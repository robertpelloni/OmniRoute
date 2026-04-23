# OmniRoute Deployment Instructions

1. `NEXT_PUBLIC_IGNORE_GOOGLE_FONTS=true npm run build`
2. `go build ./cmd/omniroute`
3. Set environment variables using `.env.example`
4. Run Go binary `./omniroute` and Node.js proxy via `node server.js`
