# Yorlin Cleaning, LLC: Website

A fast, secure, five-page website for a residential and commercial cleaning company in La Crosse County, Wisconsin. It was proposed, priced, and built as a final project: **propose, build, explain**.

**Live site: https://yorlincleaning.com**

![Home page on a laptop and a phone](docs/images/home-desktop.png)

## Project at a glance

| | |
| --- | --- |
| **Problem** | Customers can't easily find the business, trust it, or book without a phone call. The owner answers the same questions by hand. |
| **Users** | Customers (busy families, people moving, local businesses) and the owner and team. |
| **What was built** | A static five-page site: Home, Services, Booking, Gallery, About & Contact. |
| **Live at** | https://yorlincleaning.com (Cloudflare Pages) |
| **Running cost** | About $10.46 a year (the domain name). Hosting and the form service are on free plans. |
| **Security** | No cookies or trackers, strict browser security rules, spam-protected forms, no payments. |

## Architecture

![Architecture diagram](docs/images/architecture.svg)

Details, security design, and decisions are in [docs/architecture.md](docs/architecture.md).

## Documents

| Document | What it covers |
| --- | --- |
| [Proposal](docs/proposal.md) | Problem, users, what will be built, and how it will be shown |
| [Cost analysis & reasoning](docs/cost-analysis.md) | Cost items, three options compared, tradeoffs, sources |
| [Architecture](docs/architecture.md) | How the system works, security controls, limitations |
| [Presentation outline](docs/presentation.md) | Slide-by-slide outline with timing |
| [Reflection](docs/reflection.md) | What I learned, what was harder, what I would improve |
| [Go-live guide](docs/go-live-guide.md) | Hosting, forms, and adding the domain, step by step |

## Repository layout

```
site/                 The website. Upload this folder to the host.
  index.html ...      Five pages and a 404 page
  css/styles.css      All styling
  js/main.js          The only script (forms and footer year)
  _headers            Security headers for Cloudflare Pages and Netlify
  robots.txt, sitemap.xml
docs/                 Proposal, cost analysis, architecture, reflection, guides
set-domain.sh         Puts your real domain into the site's address tags
```

## Run it locally

Open `site/index.html` in a browser, or serve the folder:

```
python3 -m http.server --directory site 8000
```

Then visit http://localhost:8000.

## Deploy

1. Upload the `site` folder to Cloudflare Pages or Netlify (both free, both read `_headers`).
2. Add the domain in the host's "Custom domains" settings.
3. Run `bash set-domain.sh yourdomain.com`, then upload the `site` folder again.

Full steps are in the [go-live guide](docs/go-live-guide.md).

## Status

- Prices, business hours, real photos, and customer reviews are intentionally not included yet. They are added only when real.
- Booking is a request form that the owner confirms, not a live calendar.
- Form requests are sent through Formspree to the owner's email. If the service is unreachable, the visitor's email app opens with the request filled in.

## Credits

Built with help from an AI assistant (Claude), then reviewed and tested in a browser. Brand colors, name, and logo come from the Yorlin Cleaning, LLC flyer. Pricing estimates and their sources are in the cost analysis.
