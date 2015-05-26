SHELL := /bin/bash
default: vimeo merge browserify

.PHONY: youtube
youtube:
	cd youtube
	youtube-dl -citw --write-description --write-info-json ytuser:artsmia

.PHONY: vimeo
vimeo:
	cat <(curl http://vimeo.com/api/v2/artsmia/videos.json | jq --sort-keys '.[]') \
	    <(jq '.[]' vimeo/videos.json) \
	| jq -s 'unique_by(.id) | sort_by(.id)' | grep -v '"stats' | sponge vimeo/videos.json
	curl http://vimeo.com/api/v2/artsmia/albums.json | jq --sort-keys '.' > vimeo/albums.json
	mkdir -p vimeo/albums
	for album in $$(jq -r 'map(.id) | .[]' < vimeo/albums.json); do \
		curl http://vimeo.com/api/v2/album/$$album/videos.json | jq --sort-keys '.' | grep -v '"stats' > vimeo/albums/$$album.json; \
	done
	jq '.[].id' vimeo/videos.json | while read id; do \
		jq --arg id $$id '.[] | select(.id == ($$id | tonumber))' vimeo/videos.json \
		> vimeo/videos/$$id.json; \
	done

merge:
	node js/vimeoJson.js > all.json

browserify:
	browserify --full-path=false app.js -t debowerify -t brfs -o bundle.js

watchify:
	watchify app.js -t debowerify -t brfs -o bundle.js

deploy: es
	git add *.js* vimeo
	git reset index.js
	git commit -m "$$(git diff --cached vimeo/videos.json | grep '+    \"description\"' | wc -l | tr -d ' ') changed" --author="miabot <null+github@artsmia.org>"
	git push
	ssh new "cd third-av-symlink; git pull"

index = $(ES_index)

es: deleteIndex createIndex
	for vid in vimeo/videos/*.json; do \
		id=$$(basename $$vid .json); \
		echo "{\"index\" : {\"_type\" : \"video\", \"_id\" : \"$$id\"}}"; \
		jq -r -c '.' $$vid; \
	done | curl -XPUT "$(ES_URL)/video/_bulk" --data-binary @-; \

deleteIndex:
	curl -XDELETE $(ES_URL)/$(index)

createIndex:
	curl -XPOST -d @mappings.json $(ES_URL)/$(index)
