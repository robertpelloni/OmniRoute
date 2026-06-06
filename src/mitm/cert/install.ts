import fs from "fs";
import crypto from "crypto";
<<<<<<< HEAD
import {
  execFileText,
  execFileWithPassword,
  getErrorMessage,
  quotePowerShell,
  runElevatedPowerShell,
} from "../systemCommands.ts";
=======
import { exec } from "child_process";
import { execWithPassword } from "../dns/dnsConfig";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

const IS_WIN = process.platform === "win32";

// Get SHA1 fingerprint from cert file using Node.js crypto
<<<<<<< HEAD
function getCertFingerprint(certPath: string): string {
  const pem = fs.readFileSync(certPath, "utf-8");
  const der = Buffer.from(pem.replace(/-----[^-]+-----/g, "").replace(/\s/g, ""), "base64");
  const pairs = crypto.createHash("sha1").update(der).digest("hex").toUpperCase().match(/.{2}/g);
  if (!pairs) {
    throw new Error(`Unable to compute certificate fingerprint for ${certPath}`);
  }
  return pairs.join(":");
=======
function getCertFingerprint(certPath) {
  const pem = fs.readFileSync(certPath, "utf-8");
  const der = Buffer.from(pem.replace(/-----[^-]+-----/g, "").replace(/\s/g, ""), "base64");
  return crypto.createHash("sha1").update(der).digest("hex").toUpperCase().match(/.{2}/g).join(":");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Check if certificate is already installed in system store
 */
<<<<<<< HEAD
export async function checkCertInstalled(certPath: string): Promise<boolean> {
=======
export async function checkCertInstalled(certPath) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  if (IS_WIN) {
    return checkCertInstalledWindows(certPath);
  }
  return checkCertInstalledMac(certPath);
}

<<<<<<< HEAD
async function checkCertInstalledMac(certPath: string): Promise<boolean> {
  try {
    const fingerprint = getCertFingerprint(certPath);
    const output = await execFileText("security", [
      "find-certificate",
      "-a",
      "-Z",
      "/Library/Keychains/System.keychain",
    ]);
    return output.toUpperCase().includes(fingerprint);
  } catch {
    return false;
  }
}

async function checkCertInstalledWindows(_certPath: string): Promise<boolean> {
  try {
    await execFileText("certutil", ["-store", "Root", "daily-cloudcode-pa.googleapis.com"]);
    return true;
  } catch {
    return false;
  }
=======
function checkCertInstalledMac(certPath) {
  return new Promise((resolve) => {
    try {
      const fingerprint = getCertFingerprint(certPath);
      exec(
        `security find-certificate -a -Z /Library/Keychains/System.keychain | grep -i "${fingerprint}"`,
        (error) => {
          resolve(!error);
        }
      );
    } catch {
      resolve(false);
    }
  });
}

function checkCertInstalledWindows(certPath) {
  return new Promise((resolve) => {
    // Check Root store for our cert by subject name
    exec("certutil -store Root daily-cloudcode-pa.googleapis.com", (error) => {
      resolve(!error);
    });
  });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Install SSL certificate to system trust store
 */
<<<<<<< HEAD
export async function installCert(sudoPassword: string, certPath: string): Promise<void> {
=======
export async function installCert(sudoPassword, certPath) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  if (!fs.existsSync(certPath)) {
    throw new Error(`Certificate file not found: ${certPath}`);
  }

  const isInstalled = await checkCertInstalled(certPath);
  if (isInstalled) {
    console.log("✅ Certificate already installed");
    return;
  }

  if (IS_WIN) {
    await installCertWindows(certPath);
  } else {
    await installCertMac(sudoPassword, certPath);
  }
}

<<<<<<< HEAD
async function installCertMac(sudoPassword: string, certPath: string): Promise<void> {
  try {
    await execFileWithPassword(
      "sudo",
      [
        "-S",
        "security",
        "add-trusted-cert",
        "-d",
        "-r",
        "trustRoot",
        "-k",
        "/Library/Keychains/System.keychain",
        certPath,
      ],
      sudoPassword
    );
    console.log(`✅ Installed certificate to system keychain: ${certPath}`);
  } catch (error) {
    const message = getErrorMessage(error);
    const msg = message.includes("canceled")
=======
async function installCertMac(sudoPassword, certPath) {
  const command = `sudo -S security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${certPath}"`;
  try {
    await execWithPassword(command, sudoPassword);
    console.log(`✅ Installed certificate to system keychain: ${certPath}`);
  } catch (error) {
    const msg = error.message?.includes("canceled")
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      ? "User canceled authorization"
      : "Certificate install failed";
    throw new Error(msg);
  }
}

<<<<<<< HEAD
async function installCertWindows(certPath: string): Promise<void> {
  await runElevatedPowerShell(`
    $certPath = ${quotePowerShell(certPath)};
    $proc = Start-Process certutil -ArgumentList @('-addstore','Root',$certPath) -Verb RunAs -Wait -PassThru;
    if ($proc.ExitCode -ne 0) { throw "certutil exited with code $($proc.ExitCode)" }
  `);
  console.log(`✅ Installed certificate to Windows Root store`);
=======
async function installCertWindows(certPath) {
  // Use PowerShell elevated to add cert to Root store
  const psCommand = `Start-Process certutil -ArgumentList '-addstore','Root','${certPath.replace(/'/g, "''")}' -Verb RunAs -Wait`;
  return new Promise((resolve, reject) => {
    exec(`powershell -Command "${psCommand}"`, (error) => {
      if (error) {
        reject(new Error(`Failed to install certificate: ${error.message}`));
      } else {
        console.log(`✅ Installed certificate to Windows Root store`);
        resolve(void 0);
      }
    });
  });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Uninstall SSL certificate from system store
 */
<<<<<<< HEAD
export async function uninstallCert(sudoPassword: string, certPath: string): Promise<void> {
=======
export async function uninstallCert(sudoPassword, certPath) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const isInstalled = await checkCertInstalled(certPath);
  if (!isInstalled) {
    console.log("Certificate not found in system store");
    return;
  }

  if (IS_WIN) {
    await uninstallCertWindows();
  } else {
    await uninstallCertMac(sudoPassword, certPath);
  }
}

<<<<<<< HEAD
async function uninstallCertMac(sudoPassword: string, certPath: string): Promise<void> {
  const fingerprint = getCertFingerprint(certPath).replace(/:/g, "");
  try {
    await execFileWithPassword(
      "sudo",
      [
        "-S",
        "security",
        "delete-certificate",
        "-Z",
        fingerprint,
        "/Library/Keychains/System.keychain",
      ],
      sudoPassword
    );
=======
async function uninstallCertMac(sudoPassword, certPath) {
  const fingerprint = getCertFingerprint(certPath).replace(/:/g, "");
  const command = `sudo -S security delete-certificate -Z "${fingerprint}" /Library/Keychains/System.keychain`;
  try {
    await execWithPassword(command, sudoPassword);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    console.log("✅ Uninstalled certificate from system keychain");
  } catch (err) {
    throw new Error("Failed to uninstall certificate");
  }
}

<<<<<<< HEAD
async function uninstallCertWindows(): Promise<void> {
  await runElevatedPowerShell(`
    $proc = Start-Process certutil -ArgumentList @('-delstore','Root','daily-cloudcode-pa.googleapis.com') -Verb RunAs -Wait -PassThru;
    if ($proc.ExitCode -ne 0) { throw "certutil exited with code $($proc.ExitCode)" }
  `);
  console.log("✅ Uninstalled certificate from Windows Root store");
=======
async function uninstallCertWindows() {
  const psCommand = `Start-Process certutil -ArgumentList '-delstore','Root','daily-cloudcode-pa.googleapis.com' -Verb RunAs -Wait`;
  return new Promise((resolve, reject) => {
    exec(`powershell -Command "${psCommand}"`, (error) => {
      if (error) {
        reject(new Error(`Failed to uninstall certificate: ${error.message}`));
      } else {
        console.log("✅ Uninstalled certificate from Windows Root store");
        resolve(void 0);
      }
    });
  });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}
