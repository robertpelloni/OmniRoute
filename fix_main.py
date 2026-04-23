import re

with open("cmd/omniroute/main.go", "r") as f:
    content = f.read()

# Add combo engine initialization to main.go that we lost during merge resolution
old_init = "srv := server.NewServer(providerManager)"
new_init = """scorer := auth.NewDefaultTokenScorer()
	tokenProvider := &db.DefaultTokenProvider{Tokens: make(map[string][]string)}
	engine := combo.NewEngine(scorer, tokenProvider)
	srv := server.NewServer(providerManager, engine)"""

content = content.replace(old_init, new_init)

if '"omniroute/internal/combo"' not in content:
    content = content.replace('"omniroute/internal/auth"', '"omniroute/internal/auth"\n\t"omniroute/internal/combo"')

with open("cmd/omniroute/main.go", "w") as f:
    f.write(content)
