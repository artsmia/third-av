.PHONY: youtube
youtube:
	cd youtube
	youtube-dl -citw --write-description --write-info-json ytuser:artsmia

.PHONY: vimeo
vimeo:
	cd vimeo
	youtube-dl -citw --write-info-json --skip-download https://vimeo.com/artsmia

merge:
	for i in vimeo/*info.json; do \
		jq -c --arg file "$$(echo "$$i" | sed 's/info.json/mp4/')" '.file = "$$$file"' < "$$i"; \
	done | json -g | jq -c '.' > all.json

watchify:
	watchify index.js -t jadeify -t brfs -o bundle.js
