# Apple Wallet business cards (no developer account)

This folder has everything to build an Apple Wallet **Generic** pass — styled like
a ticket — for Alejandro and Luis, using a free third-party pass generator that
signs the pass for you (no Apple Developer account needed).

Recommended generators (any one works):
- **Pass2U** — https://www.pass2u.net/ → *Make Your Own Pass* (web) or the Pass2U app
- **Passcreator** — https://www.passcreator.com/ (free tier)
- **WalletPasses / PassKit** designers also work

> **What a Wallet pass does and doesn't do:** it displays the info and shows a QR.
> It can't *itself* write to the iPhone Contacts app — but the QR on the pass is the
> full vCard, so anyone who scans it gets the "Add Contact" prompt. So the pass is a
> Wallet-resident business card, and the QR does the saving (same as the web pages).

---

## Files

| File | What it is |
|------|------------|
| `alejandro-vcard.txt` / `luis-vcard.txt` | **Barcode payload** — paste as the QR message |
| `images/icon@2x.png` `icon@3x.png` (+ `icon.png`) | Pass **icon** (required) |
| `images/logo@2x.png` `logo@3x.png` | ALS **logo** (top of pass) |
| `images/alejandro-thumbnail@3x.png` etc. | **Photo** (right-side thumbnail) |

Upload the highest-resolution variant; generators downscale as needed.

---

## Design — set these exactly

**Pass style:** Generic

**Colors**
| Setting | Value (RGB) | Hex |
|---|---|---|
| Background | `rgb(27, 58, 107)` | `#1B3A6B` |
| Foreground (text) | `rgb(255, 255, 255)` | `#FFFFFF` |
| Label | `rgb(200, 160, 74)` | `#C8A04A` |

**Images**
- **Logo:** `images/logo@2x.png` (or `@3x`)
- **Icon:** `images/icon@2x.png` (or `@3x`)
- **Thumbnail:** the person's `…-thumbnail@3x.png`

---

## Fields

### Alejandro Auditore

| Slot | Label | Value |
|------|-------|-------|
| Header | `ALS` | *(leave value blank — logo carries the brand)* |
| Primary | *(none)* | `Alejandro Auditore` |
| Secondary | `Role` | `Co-Founder — Former VP, Chevron` |
| Auxiliary | `Company` | `Argentina Landing Services` |
| Back: `Mobile` | `Mobile` | `+54 9 11 3147 0224` |
| Back: `Email` | `Email` | `alejandro.auditore@alsargentina.ar` |
| Back: `Website` | `Website` | `https://alsargentina.ar/` |
| Back: `LinkedIn` | `LinkedIn` | `https://www.linkedin.com/in/alejandro-auditore/` |

### Luis Galeazzi

| Slot | Label | Value |
|------|-------|-------|
| Header | `ALS` | *(blank)* |
| Primary | *(none)* | `Luis Galeazzi` |
| Secondary | `Role` | `Co-Founder` |
| Auxiliary | `Company` | `Argentina Landing Services` |
| Back: `Mobile` | `Mobile` | `+54 9 11 6245 01234` |
| Back: `Email` | `Email` | `luis.galeazzi@alsargentina.ar` |
| Back: `Website` | `Website` | `https://alsargentina.ar/` |
| Back: `LinkedIn` | `LinkedIn` | `https://www.linkedin.com/in/luis-galeazzi/` |

> Tip: the back-of-pass fields become tappable links in Wallet when the value is a
> phone number, email, or URL. If the generator offers "detect links", enable it.

---

## Barcode (the contact-saving QR)

- **Type / format:** QR
- **Message:** paste the entire contents of `alejandro-vcard.txt` (or `luis-vcard.txt`)
  — keep the line breaks.
- **Encoding:** **UTF-8** (important — the company name contains an "—" em dash).
  If the generator only offers ISO-8859-1 and the pass rejects the text, replace the
  two "—" characters with a plain "-" hyphen in the message.
- **Alt text (optional):** the person's name.

After scanning that QR, the phone shows an **Add Contact** card with name, title,
company, phone, email, website, and LinkedIn. (No photo is embedded in the QR — it's
deliberately left out so the code stays low-density and scannable; same choice as the
printed cards in `../qr/`.)

---

## Sharing the finished pass

The generator gives you a `.pkpass` file and usually a hosted link / QR.
- **AirDrop / email / iMessage** the `.pkpass` — the recipient taps *Add to Wallet*.
- Or link to the generator's hosted pass URL.
- Optional: I can add an **"Add to Apple Wallet"** button on `alsargentina.ar/alejandro`
  and `/luis` pointing at the hosted `.pkpass` — just give me the URLs once created.

## Android note
Apple Wallet is iOS-only. For Android, the same generators can usually produce a
**Google Wallet** version, or just keep sharing the web pages / vCard QR, which work
on every phone.
