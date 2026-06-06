import path from "path";
import fs from "fs";
<<<<<<< HEAD
import { resolveMitmDataDir } from "../dataDir.ts";
=======
import { resolveDataDir } from "@/lib/dataPaths";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

const TARGET_HOST = "daily-cloudcode-pa.googleapis.com";

/**
 * Generate self-signed SSL certificate using selfsigned (pure JS, no openssl needed)
 */
<<<<<<< HEAD
export async function generateCert(): Promise<{ key: string; cert: string }> {
  const certDir = path.join(resolveMitmDataDir(), "mitm");
=======
export async function generateCert() {
  const certDir = path.join(resolveDataDir(), "mitm");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const keyPath = path.join(certDir, "server.key");
  const certPath = path.join(certDir, "server.crt");

  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    console.log("✅ SSL certificate already exists");
    return { key: keyPath, cert: certPath };
  }

  if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true });
  }

  // Dynamic import for optional dependency
  const { default: selfsigned } = await import("selfsigned");
  const attrs = [{ name: "commonName", value: TARGET_HOST }];
  const notAfter = new Date();
  notAfter.setFullYear(notAfter.getFullYear() + 1);
  const pems = await selfsigned.generate(attrs, {
    keySize: 2048,
    algorithm: "sha256",
    notAfterDate: notAfter,
    extensions: [{ name: "subjectAltName", altNames: [{ type: 2, value: TARGET_HOST }] }],
  });

  fs.writeFileSync(keyPath, pems.private);
  fs.writeFileSync(certPath, pems.cert);

  console.log(`✅ Generated SSL certificate for ${TARGET_HOST}`);
  return { key: keyPath, cert: certPath };
}
