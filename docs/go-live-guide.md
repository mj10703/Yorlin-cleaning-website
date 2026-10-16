# Yorlin Cleaning, LLC website: how to go live

Everything you need is in the `site` folder. It is plain files (no database, no logins, no plugins), so there is very little that can break or be hacked.

## 1. Look at it first

Open `site/index.html` by double-clicking it. Click through all five pages.

## 2. Check the words

Open any `.html` file in a text editor (TextEdit in plain-text mode, VS Code) and change the text between the tags. Things to check:

- **Prices.** I did not invent any. To add one, put a line like `<p>Starting at $___</p>` under a service in `services.html`.
- **Hours.** Not listed, because I did not have them. Add a line in `about.html` under "Where we work" if you want them shown.
- **The photo.** I used the portrait from your flyer on the home and about pages. Replace `site/images/owner.jpg` with another photo (about 460 x 575 pixels or larger, same file name) if you prefer.
- **Gallery.** It says "photos coming soon" on purpose. Please add only real photos and real customer reviews.

## 3. Make the forms deliver to you (about 5 minutes)

Right now, when someone sends a request, their email app opens with the details filled in. That works, but a proper form is nicer.

1. Make a free account at formspree.io and create a form that sends to yorlincleaning@gmail.com.
2. Copy the form address. It looks like `https://formspree.io/f/abcd1234`.
3. In `booking.html` and `about.html`, find `data-endpoint=""` and paste the address between the quotes.

Only Formspree addresses are accepted. Anything else is ignored on purpose.

## 4. Put it online (free, secure)

Use **Cloudflare Pages** or **Netlify**. Both are free for a small site, give you HTTPS automatically, and read the `_headers` file in `site` to turn on the security rules.

- Cloudflare Pages: Workers & Pages, Create, Pages, "Upload assets", then drag in the **`site` folder**.
- Netlify: log in, open "Sites", and drag the **`site` folder** onto the page.

You get a temporary web address right away so you can test the live site.

(GitHub Pages also works, but it ignores `_headers`, so the extra security rules would not apply.)

## 5. Add your domain

1. Buy the domain from a registrar such as Cloudflare, Namecheap, or Porkbun (about $10 to $15 a year).
2. In your host (Cloudflare Pages or Netlify), open the project and choose **Custom domains**, then add your domain.
3. The host shows you the DNS records to add. Add them at your registrar (or let Cloudflare do it if the domain is there). HTTPS turns on by itself within minutes.
4. In this folder, run: `bash set-domain.sh yourdomain.com` (use the exact address people will type, for example `www.yourdomain.com` if you use www). This fills in the page addresses, sitemap, and sharing previews.
5. Upload the `site` folder again.

## 6. After it is live

- Add the site to **Google Business Profile** (free). This helps most for "cleaning near me" searches.
- Send `https://yourdomain.com/sitemap.xml` to Google Search Console.
- Turn on two-step login for your domain, hosting, Formspree, and email accounts. That is the biggest real-world safety step.

## What is already built in for safety

- No cookies, trackers, analytics, or outside fonts or scripts. Nothing is loaded from other websites.
- Strict browser security rules (in `site/_headers`) that block injected scripts and stop other sites from framing yours.
- Forms use a hidden spam trap, limit message length, and never ask for card numbers or passwords.
- No payments or accounts on the site, so there is nothing sensitive to leak.

## Left out on purpose

- **Map.** A Google map embed would add tracking. The page lists La Crosse County instead. Ask me if you want a privacy-friendly map.
- **Online calendar.** The booking form asks for a preferred date and time, and you confirm with the customer. A live calendar needs a paid scheduling service. It can be added later.
- **Reviews.** Add real ones only.
