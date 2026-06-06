# OmniRoute — Deployment Guide on VM with Cloudflare (हिन्दी)

<<<<<<< HEAD
🌐 **Languages:** 🇺🇸 [English](../../../../docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/VM_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/VM_DEPLOYMENT_GUIDE.md) · 🇧🇩 [bn](../../bn/docs/VM_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/VM_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../da/docs/VM_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../de/docs/VM_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../es/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇷 [fa](../../fa/docs/VM_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [gu](../../gu/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../he/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../id/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../it/docs/VM_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/VM_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [mr](../../mr/docs/VM_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/VM_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/VM_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../no/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/VM_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/VM_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/VM_DEPLOYMENT_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/VM_DEPLOYMENT_GUIDE.md) · 🇰🇪 [sw](../../sw/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [ta](../../ta/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [te](../../te/docs/VM_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../th/docs/VM_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/VM_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇰 [ur](../../ur/docs/VM_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/VM_DEPLOYMENT_GUIDE.md)

---

Complete guide to install and configure OmniRoute on a VM (VPS) with domain managed via Cloudflare.

---

## Prerequisites

| Item       | Minimum                  | Recommended      |
| ---------- | ------------------------ | ---------------- |
| **CPU**    | 1 vCPU                   | 2 vCPU           |
| **RAM**    | 1 GB                     | 2 GB             |
| **Disk**   | 10 GB SSD                | 25 GB SSD        |
| **OS**     | Ubuntu 22.04 LTS         | Ubuntu 24.04 LTS |
| **Domain** | Registered on Cloudflare | —                |
| **Docker** | Docker Engine 24+        | Docker 27+       |

**Tested providers**: Akamai (Linode), DigitalOcean, Vultr, Hetzner, AWS Lightsail.

---
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/VM_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../es/docs/VM_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/VM_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../de/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../it/docs/VM_DEPLOYMENT_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/VM_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/VM_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/VM_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [in](../../in/docs/VM_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../th/docs/VM_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../id/docs/VM_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/VM_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/VM_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../no/docs/VM_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../da/docs/VM_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/VM_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/VM_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/VM_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/VM_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/VM_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/VM_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../he/docs/VM_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/VM_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/VM_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/VM_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/VM_DEPLOYMENT_GUIDE.md)

---

क्लाउडफ्लेयर के माध्यम से प्रबंधित डोमेन के साथ वीएम (वीपीएस) पर ओमनीरूट को स्थापित और कॉन्फ़िगर करने के लिए पूरी गाइड।---

## Prerequisites

| आइटम       | न्यूनतम               | अनुशंसित           |
| ---------- | --------------------- | ------------------ |
| **सीपीयू** | 1 वीसीपीयू            | 2 वीसीपीयू         |
| **राम**    | 1 जीबी                | 2 जीबी             |
| **डिस्क**  | 10 जीबी एसएसडी        | 25 जीबी एसएसडी     |
| **ओएस**    | उबंटू 22.04 एलटीएस    | उबंटू 24.04 एलटीएस |
| **डोमेन**  | Cloudflare पर पंजीकृत | —                  |
| **डॉकर**   | डॉकर इंजन 24+         | डॉकर 27+           |

**परीक्षित प्रदाता**: अकामाई (लिनोड), डिजिटलओशन, वल्चर, हेट्ज़नर, एडब्ल्यूएस लाइटसेल।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 1. Configure the VM

### 1.1 Create the instance

<<<<<<< HEAD
On your preferred VPS provider:

- Choose Ubuntu 24.04 LTS
- Select the minimum plan (1 vCPU / 1 GB RAM)
- Set a strong root password or configure SSH key
- Note the **public IP** (e.g., `203.0.113.10`)

### 1.2 Connect via SSH
=======
आपके पसंदीदा VPS प्रदाता पर:

- उबंटू 24.04 एलटीएस चुनें
- न्यूनतम योजना चुनें (1 वीसीपीयू / 1 जीबी रैम)
- एक मजबूत रूट पासवर्ड सेट करें या SSH कुंजी कॉन्फ़िगर करें -**सार्वजनिक आईपी**पर ध्यान दें (उदाहरण के लिए, `203.0.113.10`)### 1.2 Connect via SSH
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
ssh root@203.0.113.10
```

### 1.3 Update the system

```bash
apt update && apt upgrade -y
```

### 1.4 Install Docker

```bash
# Install dependencies
apt install -y ca-certificates curl gnupg

# Add official Docker repository
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $ (. /etc/os-release && echo “$VERSION_CODENAME”) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 1.5 Install nginx

```bash
apt install -y nginx
```

### 1.6 Configure Firewall (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP (redirect)
ufw allow 443/tcp   # HTTPS
ufw enable
```

<<<<<<< HEAD
> **Tip**: For maximum security, restrict ports 80 and 443 to Cloudflare IPs only. See the [Advanced Security](#advanced-security) section.

---
=======
> **टिप**: अधिकतम सुरक्षा के लिए, पोर्ट 80 और 443 को केवल क्लाउडफ़ेयर आईपी तक सीमित रखें। [उन्नत सुरक्षा](#उन्नत-सुरक्षा) अनुभाग देखें।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 2. Install OmniRoute

### 2.1 Create configuration directory

```bash
mkdir -p /opt/omniroute
```

### 2.2 Create environment variables file

```bash
cat > /opt/omniroute/.env << ‘EOF’
# === Security ===
JWT_SECRET=CHANGE-TO-A-UNIQUE-64-CHAR-SECRET-KEY
INITIAL_PASSWORD=YourSecurePassword123!
API_KEY_SECRET=REPLACE-WITH-ANOTHER-SECRET-KEY
STORAGE_ENCRYPTION_KEY=REPLACE-WITH-THIRD-SECRET-KEY
STORAGE_ENCRYPTION_KEY_VERSION=v1
MACHINE_ID_SALT=CHANGE-TO-A-UNIQUE-SALT

# === App ===
PORT=20128
NODE_ENV=production
HOSTNAME=0.0.0.0
DATA_DIR=/app/data
STORAGE_DRIVER=sqlite
APP_LOG_TO_FILE=true
AUTH_COOKIE_SECURE=false
REQUIRE_API_KEY=false

# === Domain (change to your domain) ===
BASE_URL=https://llms.seudominio.com
NEXT_PUBLIC_BASE_URL=https://llms.seudominio.com

# === Cloud Sync (optional) ===
# CLOUD_URL=https://cloud.omniroute.online
# NEXT_PUBLIC_CLOUD_URL=https://cloud.omniroute.online
EOF
```

<<<<<<< HEAD
> ⚠️ **IMPORTANT**: Generate unique secret keys! Use `openssl rand -hex 32` for each key.

### 2.3 Start the container
=======
> ⚠️**महत्वपूर्ण**: अद्वितीय गुप्त कुंजियाँ उत्पन्न करें! प्रत्येक कुंजी के लिए `openssl rand -hex 32` का उपयोग करें।### 2.3 Start the container
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
docker pull diegosouzapw/omniroute:latest

docker run -d \
  --name omniroute \
  --restart unless-stopped \
  --env-file /opt/omniroute/.env \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

### 2.4 Verify that it is running

```bash
docker ps | grep omniroute
docker logs omniroute --tail 20
```

<<<<<<< HEAD
It should display: `[DB] SQLite database ready` and `listening on port 20128`.

---
=======
इसे प्रदर्शित करना चाहिए: `[DB] SQLite डेटाबेस तैयार` और `पोर्ट 20128 पर सुनना`।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 3. Configure nginx (Reverse Proxy)

### 3.1 Generate SSL certificate (Cloudflare Origin)

<<<<<<< HEAD
In the Cloudflare dashboard:

1. Go to **SSL/TLS → Origin Server**
2. Click **Create Certificate**
3. Keep the defaults (15 years, \*.yourdomain.com)
4. Copy the **Origin Certificate** and the **Private Key**

```bash
mkdir -p /etc/nginx/ssl

# Paste the certificate
nano /etc/nginx/ssl/origin.crt

# Paste the private key
nano /etc/nginx/ssl/origin.key

chmod 600 /etc/nginx/ssl/origin.key
```
=======
क्लाउडफ्लेयर डैशबोर्ड में:

1.**एसएसएल/टीएलएस → ओरिजिन सर्वर**पर जाएं 2.**प्रमाणपत्र बनाएं**पर क्लिक करें 3. डिफ़ॉल्ट रखें (15 वर्ष, \*.yourdomain.com) 4.**मूल प्रमाणपत्र**और**निजी कुंजी**की प्रतिलिपि बनाएँ```bash
mkdir -p /etc/nginx/ssl

# Paste the certificate

nano /etc/nginx/ssl/origin.crt

# Paste the private key

nano /etc/nginx/ssl/origin.key

chmod 600 /etc/nginx/ssl/origin.key

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 3.2 Nginx Configuration

```bash
cat > /etc/nginx/sites-available/omniroute << ‘NGINX’
# Default server — blocks direct access via IP
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    ssl_certificate     /etc/nginx/ssl/origin.crt;
    ssl_certificate_key /etc/nginx/ssl/origin.key;
    server_name _;
    return 444;
}

# OmniRoute — HTTPS
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name llms.yourdomain.com;  # Change to your domain

    ssl_certificate     /etc/nginx/ssl/origin.crt;
    ssl_certificate_key /etc/nginx/ssl/origin.key;
    ssl_protocols TLSv1.2 TLSv1.3;

    client_max_body_size 100M;

    location / {
        proxy_pass http://127.0.0.1:20128;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection “upgrade”;

        # SSE (Server-Sent Events) — streaming AI responses
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 600s;
        proxy_send_timeout 600s;
    }
}

# HTTP → HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name llms.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
NGINX
<<<<<<< HEAD
```

Keep reverse-proxy stream timeouts aligned with your OmniRoute timeout env vars. If you raise
`FETCH_TIMEOUT_MS` / `STREAM_IDLE_TIMEOUT_MS`, raise `proxy_read_timeout` / `proxy_send_timeout`
above the same threshold.

### 3.3 Enable and Test
=======
````

Keep reverse-proxy stream timeouts aligned with your OmniRoute timeout env vars. यदि आप बढ़ाते हैं
`FETCH_TIMEOUT_MS` / `STREAM_IDLE_TIMEOUT_MS`, `proxy_read_timeout` / `proxy_send_timeout` बढ़ाएं
एक ही सीमा से ऊपर.### 3.3 Enable and Test
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
# Remove default configuration
rm -f /etc/nginx/sites-enabled/default

# Enable OmniRoute
ln -sf /etc/nginx/sites-available/omniroute /etc/nginx/sites-enabled/omniroute

# Test and reload
nginx -t && systemctl reload nginx
```

---

## 4. Configure Cloudflare DNS

### 4.1 Add DNS record

<<<<<<< HEAD
In the Cloudflare dashboard → DNS:

| Type | Name   | Content                | Proxy      |
| ---- | ------ | ---------------------- | ---------- |
| A    | `llms` | `203.0.113.10` (VM IP) | ✅ Proxied |

### 4.2 Configure SSL

Under **SSL/TLS → Overview**:

- Mode: **Full (Strict)**

Under **SSL/TLS → Edge Certificates**:

- Always Use HTTPS: ✅ On
- Minimum TLS Version: TLS 1.2
- Automatic HTTPS Rewrites: ✅ On

### 4.3 Testing
=======
क्लाउडफ़ेयर डैशबोर्ड में → DNS:

| प्रकार | नाम      | सामग्री                    | प्रॉक्सी    |
| ------ | -------- | -------------------------- | ----------- | --------------------- |
| ए      | `एलएमएस` | `203.0.113.10` (वीएम आईपी) | ✅ प्रॉक्सी | ### 4.2 Configure SSL |

**एसएसएल/टीएलएस → अवलोकन**के अंतर्गत:

- मोड:**पूर्ण (सख्त)**

**एसएसएल/टीएलएस → एज सर्टिफिकेट**के अंतर्गत:

- हमेशा HTTPS का उपयोग करें: ✅ चालू
- न्यूनतम टीएलएस संस्करण: टीएलएस 1.2
- स्वचालित HTTPS पुनर्लेखन: ✅ चालू### 4.3 Testing
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
curl -sI https://llms.seudominio.com/health
# Should return HTTP/2 200
```

---

## 5. Operations and Maintenance

### Upgrade to a new version

```bash
docker pull diegosouzapw/omniroute:latest
docker stop omniroute && docker rm omniroute
docker run -d --name omniroute --restart unless-stopped \
  --env-file /opt/omniroute/.env \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

### View logs

```bash
docker logs -f omniroute          # Real-time stream
docker logs omniroute --tail 50   # Last 50 lines
```

### Manual database backup

```bash
# Copy data from the volume to the host
docker cp omniroute:/app/data ./backup-$(date +%F)

# Or compress the entire volume
docker run --rm -v omniroute-data:/data -v $(pwd):/backup \
  alpine tar czf /backup/omniroute-data-$(date +%F).tar.gz /data
```

### Restore from backup

```bash
docker stop omniroute
docker run --rm -v omniroute-data:/data -v $(pwd):/backup \
  alpine sh -c “rm -rf /data/* && tar xzf /backup/omniroute-data-YYYY-MM-DD.tar.gz -C /”
docker start omniroute
```

---

## 6. Advanced Security

### Restrict nginx to Cloudflare IPs

```bash
cat > /etc/nginx/cloudflare-ips.conf << ‘CF’
# Cloudflare IPv4 ranges — update periodically
# https://www.cloudflare.com/ips-v4/
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;
real_ip_header CF-Connecting-IP;
CF
```

<<<<<<< HEAD
Add the following to `nginx.conf` inside the `http {}` block:

```nginx
include /etc/nginx/cloudflare-ips.conf;
```
=======
`http {}` ब्लॉक के अंदर `nginx.conf` में निम्नलिखित जोड़ें:```nginx
include /etc/nginx/cloudflare-ips.conf;

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Install fail2ban

```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban

# Check status
fail2ban-client status sshd
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Block direct access to the Docker port

```bash
# Prevent direct external access to port 20128
iptables -I DOCKER-USER -p tcp --dport 20128 -j DROP
iptables -I DOCKER-USER -i lo -p tcp --dport 20128 -j ACCEPT

# Persist the rules
apt install -y iptables-persistent
netfilter-persistent save
```

---

## 7. Deploy to Cloudflare Workers (Optional)

<<<<<<< HEAD
For remote access via Cloudflare Workers (without exposing the VM directly):

```bash
# In the local repository
=======
क्लाउडफ्लेयर वर्कर्स के माध्यम से रिमोट एक्सेस के लिए (वीएम को सीधे उजागर किए बिना):```bash

# In the local repository

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
cd omnirouteCloud
npm install
npx wrangler login
npx wrangler deploy
<<<<<<< HEAD
```

See the full documentation at [omnirouteCloud/README.md](../omnirouteCloud/README.md).

---

## Port Summary

| Port  | Service     | Access                     |
| ----- | ----------- | -------------------------- |
| 22    | SSH         | Public (with fail2ban)     |
| 80    | nginx HTTP  | Redirect → HTTPS           |
| 443   | nginx HTTPS | Via Cloudflare Proxy       |
| 20128 | OmniRoute   | Localhost only (via nginx) |
=======

```

पूरा दस्तावेज़ [omnirouteCloud/README.md](../omnirouteCloud/README.md) पर देखें।---

## Port Summary

| बंदरगाह | सेवा | पहुंच |
| ----- | ----------- | -------------------------------- |
| 22    | एसएसएच | सार्वजनिक (fail2ban के साथ) |
| 80 | nginx HTTP | रीडायरेक्ट → HTTPS |
| 443 | nginx HTTPS | क्लाउडफ्लेयर प्रॉक्सी के माध्यम से |
| 20128 | ओमनीरूट | केवल लोकलहोस्ट (nginx के माध्यम से) |
```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
