download:
	youtube-dl -citw --write-description --write-info-json ytuser:artsmia

merge:
	for i in *info.json; do \
		jq -c --arg file $$(echo "$$"i | sed 's/info.json/mp4/') '.file = "$$file"' < "$$i"; \
	done | json -g | jq -c '.' > all.json
