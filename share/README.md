# Shareable card images (offline)

Full-screen captures of the live business-card pages, for sharing when offline
(WhatsApp, email, AirDrop, etc.).

| File | Person |
|------|--------|
| `alejandro-card.png` | Alejandro Auditore |
| `luis-card.png`      | Luis Galeazzi |

- **Resolution:** 904 × 2064 px (2× retina). The whole card — photo, contact
  details, and QR — fits in a single image that displays fully on a phone screen,
  with an even 16 px margin around the card.
- **The QR inside the image is live:** it encodes the full vCard (including the
  contact photo) and can be scanned directly off a phone screen — decode verified.
- These mirror the on-site pages `alsargentina.ar/alejandro` and `/luis`.

### Regenerating
Headless Chrome (`--headless=new`) clamps the minimum window width to **500 px**,
so capture at `--window-size=500,1044 --force-device-scale-factor=2`, then crop to
the centred 420 px-wide card (CSS rect left=40, top=16, w=420, h=1000) plus a 16 px
margin. Capturing at a narrower width silently clips the card's right edge.
