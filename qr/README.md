# Print-ready vCard QR codes

Each QR encodes a **vCard** directly (not a URL). Scanning with a phone camera
offers "Add Contact" immediately — no internet needed at scan time.

| File | Person | Use |
|------|--------|-----|
| `alejandro-vcard.svg` / `.png` | Alejandro Auditore | Business card / print |
| `luis-vcard.svg` / `.png`      | Luis Galeazzi      | Business card / print |

## Which file to give the printer
- **SVG** — preferred. Vector, scales to any size with zero quality loss.
- **PNG** — high-resolution raster fallback (~2268 px) if the printer needs a bitmap.

## Print specs (important for reliable scanning)
- **Minimum printed size: 30 mm × 30 mm. Recommended: 35–40 mm.**
  At 35 mm each module is ~0.4 mm, comfortably above the ~0.33 mm scan threshold.
- **Keep the white quiet zone** around the code (already baked in — do not crop it).
- **Black on white** gives the most reliable scan. If recoloring to brand navy
  (`#1B3A6B`), keep the background white/light for contrast and test-scan before a full run.

## What's encoded
Name, organization (ALS), title, mobile, email, website, and LinkedIn.
The contact **photo is intentionally not embedded** in the print QR — it would make
the code ~40% denser and hard to scan when printed small. The on-site pages
(`alsargentina.ar/alejandro`, `/luis`) include the photo in their on-screen QR,
since a phone screen is high-resolution enough to scan the denser code.

## Regenerating
These were produced with [segno](https://pypi.org/project/segno/) at error
correction level **M**. See the project history for the generation script.
