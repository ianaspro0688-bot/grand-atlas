# Grand Atlas — Luxury Real Estate

React 19 + Vite + Tailwind CSS v4 + React Router.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Pages / routes

| Route | Page |
| --- | --- |
| `/` | Home (hero, stats, about, masterpieces carousel, map, future landmarks) |
| `/units` | Units listing with working filters |
| `/units/:unitId` | Unit details (gallery, WhatsApp / Call) |
| `/zones` | Zones grid |
| `/zones/:zoneId` | Zone projects |
| `/projects/:projectId` | Project details |
| `/developers` | Developers grid |
| `/developers/:developerId` | Developer projects |
| `/contact` | Contact / Register form |

## Where to edit things

- **Content** (units, zones, projects, developers, phone/email): `src/data/index.js`
- **Brand colors & fonts**: `src/index.css` (`@theme` block)
- **Images**: `src/assets/images/`

## Notes

- Several images were cropped from the design screenshots, so they are lower resolution than the originals
  (zone thumbnails, unit gallery, developer cards). Replace the files in `src/assets/images/`
  with the original photos using the **same file names** and nothing else needs to change.
- Developer logos (Palm Hills / Hayah) are recreated placeholders in `src/components/DeveloperBadge.jsx`.
- The contact form has no backend yet — see the `TODO` in `src/pages/Contact.jsx`.
- `public/_redirects` makes client-side routing work on Netlify. On other hosts, configure a fallback to `index.html`.
