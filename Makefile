.PHONY: youtube
youtube:
	cd youtube
	youtube-dl -citw --write-description --write-info-json ytuser:artsmia

.PHONY: vimeo
vimeo:
	# youtube-dl -citw --write-info-json --skip-download https://vimeo.com/artsmia
	curl http://vimeo.com/api/v2/artsmia/videos.json > vimeo/videos.json
	curl http://vimeo.com/api/v2/artsmia/albums.json > vimeo/albums.json
	mkdir -p vimeo/albums
	for album in $$(jq -r 'map(.id) | .[]' < vimeo/albums.json); do \
		curl http://vimeo.com/api/v2/album/$$album/videos.json > vimeo/albums/$$album.json; \
	done

merge:
	node js/vimeoJson.js > all.json

watchify:
	watchify app.js -t debowerify -t brfs -o bundle.js
