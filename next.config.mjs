import createNextIntlPlugin from "next-intl/plugin";
<<<<<<< HEAD
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const distDir = process.env.NEXT_DIST_DIR || ".next";
const projectRoot = dirname(fileURLToPath(import.meta.url));
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:";
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "media-src 'self' data: blob:",
  "connect-src 'self' http://localhost:* http://127.0.0.1:* ws://localhost:* ws://127.0.0.1:* https: wss:",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
].join("; ");
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];
=======

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const distDir = process.env.NEXT_DIST_DIR || ".next";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir,
  // Turbopack config: redirect native modules to stubs at build time
  turbopack: {
<<<<<<< HEAD
    root: projectRoot,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    resolveAlias: {
      // Point mitm/manager to a stub during build (native child_process/fs can't be bundled)
      "@/mitm/manager": "./src/mitm/manager.stub.ts",
    },
  },
  output: "standalone",
<<<<<<< HEAD
  // OmniRoute is a proxy for AI APIs — request bodies routinely include
  // multi-MB payloads (vision models, image edits, base64-encoded files,
  // long chat histories with embedded images). Next.js's Server Action
  // handler intercepts POSTs with multipart/form-data or
  // x-www-form-urlencoded content-types and enforces a 1 MB cap that
  // surfaces as a 413 with a confusing "Server Actions" hint, even on
  // pure route handlers. 50 MB matches what most upstream LLM providers
  // accept for image-bearing requests; tune via env if a deployment needs
  // more.
  experimental: {
    serverActions: {
      bodySizeLimit: process.env.OMNIROUTE_SERVER_ACTIONS_BODY_LIMIT || "50mb",
    },
  },
  outputFileTracingRoot: projectRoot,
  outputFileTracingIncludes: {
    // Migration SQL and compression rule/filter JSON files are read via fs at
    // runtime and are NOT always auto-traced by webpack/turbopack.
    "/*": [
      "./src/lib/db/migrations/**/*",
      "./open-sse/services/compression/engines/rtk/filters/**/*.json",
      "./open-sse/services/compression/rules/**/*.json",
    ],
  },
  outputFileTracingExcludes: {
    // Planning/task docs are not runtime assets and can break standalone copies
    // when broad fs/path tracing pulls the whole repository into the NFT graph.
    "/*": [
      "./.git/**/*",
      "./_tasks/**/*",
      "./_references/**/*",
      "./_ideia/**/*",
      "./_mono_repo/**/*",
      "./coverage/**/*",
      "./test-results/**/*",
      "./playwright-report/**/*",
      "./app.__qa_backup/**/*",
      "./tests/**/*",
      "./logs/**/*",
    ],
  },
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
<<<<<<< HEAD
<<<<<<< Updated upstream
    "pino-abstract-transport",
=======
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    "better-sqlite3",
    "keytar",
    "wreq-js",
    "zod",
<<<<<<< HEAD
    "tls-client-node",
    "koffi",
    "tough-cookie",
    "@ngrok/ngrok",
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    "child_process",
    "fs",
    "path",
    "os",
    "crypto",
    "net",
    "tls",
    "http",
    "https",
    "stream",
    "buffer",
    "util",
<<<<<<< HEAD
    "process",
  ],
  transpilePackages: ["@omniroute/open-sse", "@lobehub/icons"],
=======
  ],
  transpilePackages: ["@omniroute/open-sse"],
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.*"],
  typescript: {
    // TODO: Re-enable after fixing all sub-component useTranslations scope issues
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
<<<<<<< HEAD
<<<<<<< Updated upstream

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Webpack IgnorePlugin: skip thread-stream test files that contain
      // intentionally broken syntax/imports (they cause Turbopack build errors)
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /\/test\//,
          contextRegExp: /thread-stream/,
        })
      );
      // ── Turbopack / Next.js 16 module-hash patch (#394, #396, #398) ────────
      //
      // Next.js 16 (with or without Turbopack) compiles the instrumentation hook
      // into a separate chunk and emits hashed require() calls such as:
      //   require('better-sqlite3-90e2652d1716b047')
      //   require('zod-dcb22c6336e0bc69')
      //   require('pino-28069d5257187539')
      //
      // These hashed names don't exist in node_modules and cause a 500 at
      // startup on all npm global installs (issues #394, #396, #398).
      //
      // We use two strategies:
      //  1. Exact-name externals for all known server-side packages.
      //  2. Hash-strip catch-all: any require('<name>-<16hexchars>' strips the
      //     suffix and falls through to the real package name.
      //
      const HASH_PATTERN = /^(.+)-[0-9a-f]{16}$/;

      const KNOWN_EXTERNALS = new Set([
        "better-sqlite3",
        "keytar",
        "wreq-js",
        "zod",
        "pino",
        "pino-pretty",
        "child_process",
        "fs",
        "path",
        "os",
        "crypto",
        "net",
        "tls",
        "http",
        "https",
        "stream",
        "buffer",
        "util",
      ]);

      const prev = config.externals ?? [];
      const prevArr = Array.isArray(prev) ? prev : [prev];
      config.externals = [
        ...prevArr,
        ({ request }, callback) => {
          // Case 1: Exact known package — treat as external
          if (KNOWN_EXTERNALS.has(request)) {
            return callback(null, `commonjs ${request}`);
          }
          // Case 2: Hash-suffixed name — strip hash, use base name
          // e.g. "better-sqlite3-90e2652d1716b047" → "better-sqlite3"
          //      "zod-dcb22c6336e0bc69"            → "zod"
          const hashMatch = request?.match?.(HASH_PATTERN);
          if (hashMatch) {
            const baseName = hashMatch[1];
            return callback(null, `commonjs ${baseName}`);
          }
          callback();
        },
      ];
    } else {
      // Ignore native Node.js modules in browser bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        child_process: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    return config;
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  },

  async rewrites() {
    return [
      {
        source: "/chat/completions",
        destination: "/api/v1/chat/completions",
      },
      {
        source: "/responses",
        destination: "/api/v1/responses",
      },
      {
        source: "/responses/:path*",
        destination: "/api/v1/responses/:path*",
      },
      {
        source: "/models",
        destination: "/api/v1/models",
      },
      {
        source: "/v1/v1/:path*",
        destination: "/api/v1/:path*",
      },
      {
        source: "/v1/v1",
        destination: "/api/v1",
      },
      {
        source: "/codex/:path*",
        destination: "/api/v1/responses",
      },
      {
        source: "/v1/:path*",
        destination: "/api/v1/:path*",
      },
      {
        source: "/v1",
        destination: "/api/v1",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
