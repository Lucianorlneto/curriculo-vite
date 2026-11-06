// Builds the app, serves it with `vite preview` and prints each document to PDF
// with headless Chromium. Usage: `yarn pdf [luciano-en|luciano|cover-letter ...]`
// (no arguments = all documents). Output goes to `pdf/`.
import { mkdir } from "node:fs/promises";
import { build, preview } from "vite";
import { chromium } from "playwright";

const documents = {
  "luciano-en": "Luciano-Neto-Resume-EN.pdf",
  luciano: "Luciano-Neto-Curriculo-PT.pdf",
  "cover-letter": "Luciano-Neto-Cover-Letter.pdf",
};

const requested = process.argv.slice(2);
const unknown = requested.filter((key) => !(key in documents));
if (unknown.length) {
  console.error(
    `Unknown document(s): ${unknown.join(", ")}. ` +
      `Available: ${Object.keys(documents).join(", ")}`
  );
  process.exit(1);
}
const keys = requested.length ? requested : Object.keys(documents);

await build({ logLevel: "warn" });
const server = await preview({ preview: { port: 4173 }, logLevel: "warn" });
const baseUrl = server.resolvedUrls.local[0];

let browser;
try {
  browser = await chromium.launch();
  const page = await browser.newPage();
  await mkdir("pdf", { recursive: true });

  for (const key of keys) {
    await page.goto(`${baseUrl}?doc=${key}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    const path = `pdf/${documents[key]}`;
    await page.pdf({
      path,
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    });
    console.log(`✔ ${path}`);
  }
} finally {
  await browser?.close();
  await server.close();
}
