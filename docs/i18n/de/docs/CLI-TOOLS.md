# CLI Tools Setup Guide — OmniRoute (Deutsch)


---

This guide explains how to install and configure all supported AI coding CLI tools
to use **OmniRoute** as the unified backend, giving you centralized key management,
cost tracking, model switching, and request logging across every tool.

---

## How It Works

```
Claude / Codex / OpenCode / Cline / KiloCode / Continue / Kiro / Cursor / Copilot
           │
           ▼  (all point to OmniRoute)
    http://YOUR_SERVER:20128/v1
           │
           ▼  (OmniRoute routes to the right provider)
    Anthropic / OpenAI / Gemini / DeepSeek / Groq / Mistral / ...
```

**Benefits:**

- One API key to manage all tools
- Cost tracking across all CLIs in the dashboard
- Model switching without reconfiguring every tool
- Works locally and on remote servers (VPS)

---

## Supported Tools (Dashboard Source of Truth)

The dashboard cards in `/dashboard/cli-tools` are generated from `src/shared/constants/cliTools.ts`.
Current list (v3.0.0-rc.16):

| Tool               | ID            | Command    | Setup Mode | Install Method |
| ------------------ | ------------- | ---------- | ---------- | -------------- |
| **Claude Code**    | `claude`      | `claude`   | env        | npm            |
| **OpenAI Codex**   | `codex`       | `codex`    | custom     | npm            |
| **Factory Droid**  | `droid`       | `droid`    | custom     | bundled/CLI    |
| **OpenClaw**       | `openclaw`    | `openclaw` | custom     | bundled/CLI    |
| **Cursor**         | `cursor`      | app        | guide      | desktop app    |
| **Cline**          | `cline`       | `cline`    | custom     | npm            |
| **Kilo Code**      | `kilo`        | `kilocode` | custom     | npm            |
| **Continue**       | `continue`    | extension  | guide      | VS Code        |
| **Antigravity**    | `antigravity` | internal   | mitm       | OmniRoute      |
| **GitHub Copilot** | `copilot`     | extension  | custom     | VS Code        |
| **OpenCode**       | `opencode`    | `opencode` | guide      | npm            |
| **Kiro AI**        | `kiro`        | app/cli    | mitm       | desktop/CLI    |

# Kiro CLI
apt-get install -y unzip 2>/dev/null; curl -fsSL https://cli.kiro.dev/install | bash

# Write configs
mkdir -p ~/.claude ~/.codex ~/.config/opencode ~/.continue

cat > ~/.claude/settings.json   <<< "{\"apiBaseUrl\":\"$OMNIROUTE_URL\",\"apiKey\":\"$OMNIROUTE_KEY\"}"
cat > ~/.codex/config.yaml      <<< "model: auto\napiKey: $OMNIROUTE_KEY\napiBaseUrl: $OMNIROUTE_URL"
cat >> ~/.bashrc << EOF
export OPENAI_BASE_URL="$OMNIROUTE_URL"
export OPENAI_API_KEY="$OMNIROUTE_KEY"
export ANTHROPIC_BASE_URL="$OMNIROUTE_URL"
export ANTHROPIC_API_KEY="$OMNIROUTE_KEY"
EOF

source ~/.bashrc
echo "✅ All CLIs installed and configured for OmniRoute"
```
