# OmniRoute Deployment Instructions

## Go Backend (Primary Router - v3.6.20+)

1. Ensure Go 1.21+ is installed.
2. Build the router: `go build -o omniroute ./cmd/omniroute`
3. Run the binary (it will look for a `.env` or use default sqlite config): `./omniroute`

## Next.js Frontend (Dashboard & Legacy APIs)

1. Ensure Node.js 20+ is installed.
2. Install dependencies: `npm install`
3. The build requires an isolated environment variable to prevent font fetching errors:
   `NEXT_PUBLIC_IGNORE_GOOGLE_FONTS=true npm run build`
4. Start the production server: `npm run start`

## Submodules

- Ensure submodules are pulled if you plan to reference `CLIProxyAPIPlus` or others:
  `git submodule update --init --recursive`
