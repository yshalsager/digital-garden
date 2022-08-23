.DEFAULT_GOAL := serve

serve: ## Serve Quartz locally
	hugo-obsidian -input=content -output=assets/indices -index -root=. && hugo server --enableGitInfo --minify
