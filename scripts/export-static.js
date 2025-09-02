import fs from "fs";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VIEWS = path.join(__dirname, "..", "views");

const pages = [
    { in: "home.ejs", out: "index.html" },
    { in: "personal_info.ejs", out: "personal_info.html" },
    { in: "academic_info.ejs", out: "academic_info.html" },
    { in: "skills.ejs", out: "skills.html" },
    { in: "projects.ejs", out: "projects.html" },
    { in: "volunteering.ejs", out: "volunteering.html" },
    { in: "certifications.ejs", out: "certifications.html" },
    { in: "contact.ejs", out: "contact.html" },
];

function renderSync(tplPath, data = {}) {
    const template = fs.readFileSync(tplPath, "utf8");
    // filename is CRITICAL so EJS resolves partials; async:false keeps includes synchronous
    return ejs.render(template, data, { filename: tplPath, async: false });
}

for (const p of pages) {
    try {
        const tplPath = path.join(VIEWS, p.in);
        const html = renderSync(tplPath, {});
        fs.writeFileSync(path.join(__dirname, "..", p.out), html, "utf8");
        console.log(`✔ Exported ${p.in} → ${p.out}`);
    } catch (err) {
        console.error(`❌ Failed to export ${p.in}:`, err);
        process.exitCode = 1;
    }
}
