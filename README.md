# anvilwebdesign.co.uk

The website for Anvil Web Design, the trading name of Mark Aszkenasy: websites for small businesses across Teesside.

- `index.html`, `css/styles.css`, `js/main.js`: the one-page site.
- `images/`: sample design crops (mockups, not client sites; no business names shown).
- `fonts/`: self-hosted DM Sans (SIL Open Font License).
- `CNAME`: serves the site on `anvilwebdesign.co.uk` through GitHub Pages.

The enquiry form opens the visitor's email app addressed to hello@anvilwebdesign.co.uk; nothing is stored on the site, and no cookies or trackers are used.

Preview locally with `python3 -m http.server` and open http://localhost:8000.

## Private proposal pages

`for/serinos/`, `for/borrelli/`, `for/cafe-nossa/`, `for/pilates-studio/`, `for/ey-handyman/`, `for/jmh-travel/`, `for/osbournes/` and `for/ultra-football-shirts/` hold copies of the concept sites (Sets A to D) made for those businesses. The originals live in their own `tedotedo/*-demo` repositories.

- They are not linked from the homepage, every page carries `noindex`, and each keeps its "Concept design, not the official website" banner, which also says the design is a mockup only, with no obligation.
- Each `for/<business>/index.html` opens with a welcome panel: a short narrated pitch film (`film.mp4`, poster `film.jpg`) and a note that the page will be deleted if the business isn't interested or doesn't reply within 7 days.
- Each Design D page (`for/<business>/d/`) has a short AI-generated promo clip (`promo.mp4`, poster `promo.jpg`), labelled "Illustrative video".
- To copy a mockup in: `git archive HEAD` from the demo repository, leaving out `PITCH.md`, `README.md` and `.nojekyll`, then re-add the mockup note to the banner.

### Sent and deletion dates

| Page | Sent | Delete if no reply by |
|---|---|---|
| `for/pilates-studio/` | 17 Nov 2026 (email) | 24 Nov 2026 |
| `for/cafe-nossa/` | 17 Nov 2026 (Instagram) | 24 Nov 2026 |
| `for/serinos/` | 17 Nov 2026 (Facebook) | 24 Nov 2026 |
| `for/borrelli/` | 17 Nov 2026 (Facebook) | 24 Nov 2026 |
| `for/ey-handyman/` | Not sent yet | 7 days after sending |
| `for/jmh-travel/` | Not sent yet | 7 days after sending |
| `for/osbournes/` | Not sent yet | 7 days after sending |
| `for/ultra-football-shirts/` | Not sent yet | 7 days after sending |

To delete a page, remove its `for/<business>/` folder, commit and push.

## Working files

The full-quality films, promo clips, narration recordings, music, Google search recordings and per-business notes (scripts, contacts, what the search showed) are kept in Google Drive, in the **Anvil Web Design** folder, rather than in this repository.
