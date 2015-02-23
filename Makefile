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

merge:
	node js/vimeoJson.js > all.json

browserify:
	browserify --full-path=false app.js -t debowerify -t brfs -o bundle.js

watchify:
	watchify app.js -t debowerify -t brfs -o bundle.js

deploy:
	git add *.js* vimeo
	git commit -m "$$(git diff --cached vimeo/videos.json | grep '+    \"description\"' | wc -l | tr -d ' ') changed" --author="miabot <null+github@artsmia.org>"
	git push
	ssh new "cd third-av-symlink; git pull"
