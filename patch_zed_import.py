import re

with open("src/app/(dashboard)/dashboard/settings/components/ZedImportCard.tsx", "r") as f:
    content = f.read()

# Replace the handler to do a full OAuth redirect
new_handler = """  const handleOAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId) {
      notify.error("Please enter a Client ID to begin OAuth flow.");
      return;
    }

    // Typical OAuth flow redirect
    // We navigate away to zed authorization endpoint.
    // The redirect URI needs to be handled by a page route, but we will mock it
    // or point it to a callback page which handles the `code` exchange using /api/zed/callback.

    // Storing credentials temporarily (e.g. session storage) to use in the callback page,
    // Note: In real production, the backend should securely manage state and PKCE, but per our scope:
    sessionStorage.setItem("zed_oauth_client_id", clientId);
    if (clientSecret) {
      sessionStorage.setItem("zed_oauth_client_secret", clientSecret);
    }

    const redirectUri = window.location.origin + "/dashboard/settings/zed-callback";
    const authUrl = `https://zed.dev/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

    window.location.href = authUrl;
  };"""

content = re.sub(r'const handleOAuthSubmit = async.*?};', new_handler, content, flags=re.DOTALL)

with open("src/app/(dashboard)/dashboard/settings/components/ZedImportCard.tsx", "w") as f:
    f.write(content)
