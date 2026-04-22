import re

with open("CHANGELOG.md", "r") as f:
    content = f.read()

new_log = """
## [3.6.31] - 2024-04-10
### Added
- Completed Go port of TS A2A protocol `getExecutor` routing alias logic into `internal/providers/manager.go`. The native Go load-balancer now intrinsically understands routing aliases like "cu", "pol", and automatically treats unknown providers like "openrouter" as an `OpenAIProvider` stream.
- Implemented `combo.Engine` in Go to natively handle fallback multi-provider routing and `TokenScorer` API key selection.
- Strengthened Go SSE Proxy to delay `200 OK` until first valid payload byte, providing transparent HTTP 429/502 catching for auto-failover to the next fallback provider.

"""

if "## [3.6.31]" not in content:
    content = content.replace("## [Unreleased]\n", "## [Unreleased]\n" + new_log)

with open("CHANGELOG.md", "w") as f:
    f.write(content)
