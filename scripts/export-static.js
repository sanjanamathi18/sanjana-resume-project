import fs from "fs";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";

// Needed to emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to  views folder
const VIEWS = path.join(__dirname, "..", "views");

// Map of input .ejs → output .html
const pages = [
    { in: "home.ejs", out: "index.html" },
    { in: "academic_info.ejs", out: "academic_info.html" },
    { in: "certifications.ejs", out: "certifications.html" },
    { in: "contact.ejs", out: "contact.html" },
    { in: "personal_info.ejs", out: "personal_info.html" },
    { in: "projects.ejs", out: "projects.html" },
    { in: "skills.ejs", out: "skills.html" },
    { in: "volunteering.ejs", out: "volunteering.html" },
];

(async () => {
    for (const p of pages) {
        try {
            const tplPath = path.join(VIEWS, p.in);
            const html = await ejs.renderFile(tplPath, {}, { async: true });
            fs.writeFileSync(path.join(__dirname, "..", p.out), html, "utf8");
            console.log(`✔ Exported ${p.in} → ${p.out}`);
        } catch (err) {
            console.error(`❌ Failed to export ${p.in}:`, err);
        }
    }
})();
