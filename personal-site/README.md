# Khaled Ashour — personal site

A single-page personal profile and link hub: bio, expertise, career timeline,
credentials, selected writing, and contact. Bilingual English / Arabic with RTL
support, light and dark themes, no build step and no external dependencies.

This folder is **staged here temporarily**. It is meant to live in its own
repository (see *Deploying* below) so it is independent of the Avenlor
Consulting site that occupies this repo's root.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire site — markup, styles and script, self-contained. |
| `favicon.svg` | `KA` monogram, matching the Avenlor colour palette. |
| `robots.txt` | Crawler policy + sitemap pointer. |
| `sitemap.xml` | Single-URL sitemap. |

## Editing the copy

Every user-visible string lives in the `i18n` object near the top of the
`<script>` block in `index.html` — English under `i18n.en`, Arabic under
`i18n.ar`. The markup only carries `data-i18n="key"` attributes.

To change wording, edit the string in **both** language dictionaries. Do not
edit the text inside the HTML tags: it is replaced at runtime whenever the
language is switched.

## Outstanding placeholders

Anything still awaiting real content is marked in two places: a `⚑ TODO`
comment in the `i18n` dictionaries, and a `todo` CSS class on the element so it
is highlighted in gold on the rendered page. Search for `todo` to find them all.

Currently unresolved:

- Personal LinkedIn URL (`hub_li_s`, `ct_v2`, and the `href` on `#link-linkedin`)
- Current job title (`f5v`)
- Career timeline — dates, roles and employers (`cv1w`, `cv2*`, `cv3*`)
- Education, certifications and memberships (`cr1*`, `cr2*`, `cr3*`)

Remove the `todo` class from an element once its content is real, so the gold
highlight disappears.

The contact address is currently `contact@avenlorconsulting.com`. Swap it for a
personal address if you would rather keep personal enquiries separate.

## Deploying

1. Create a new **public** repository named `khaledashour79.github.io`.
   The name matters: GitHub Pages serves a repo with that exact name as your
   user site at `https://khaledashour79.github.io`, with no extra configuration.
2. Push the *contents* of this folder to that repository's default branch —
   `index.html` must sit at the repository root, not inside a `personal-site/`
   subfolder.
3. In the repository's **Settings → Pages**, confirm the source is the default
   branch, root folder. The site is live within a minute or two.

### Using a custom domain

GitHub Pages allows one custom domain per repository, which is why this cannot
share the repo that already serves `avenlorconsulting.com`.

To serve this site from your own domain instead:

1. Add a file named `CNAME` at the repository root containing only the domain,
   e.g. `khaledashour.com`.
2. At your DNS provider, point the domain at GitHub Pages — an `ALIAS`/`ANAME`
   record at the apex to `khaledashour79.github.io`, or a `CNAME` record for a
   `www` subdomain to the same target.
3. Update the absolute URLs in `index.html` (`canonical`, the Open Graph tags
   and the JSON-LD `@id`/`url`), plus `robots.txt` and `sitemap.xml`, to the new
   domain.
