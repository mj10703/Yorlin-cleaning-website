# Reflection: Yorlin Cleaning Website

I planned, priced, and built a website for my own cleaning company, Yorlin Cleaning, LLC, with help from an AI assistant. The biggest lesson was that a website is several small systems working together, and that cost is mostly a choice about whose time and how much control.

## What did I learn?

- **A website is a chain of separate parts.** The domain is the address, DNS points that address to a host, the host stores the files and adds HTTPS, and a form service delivers messages to my email. Each part has its own cost and can be swapped without rebuilding the rest.
- **Cost is a design decision.** The same website can cost $10.46 or $5,000. The difference is mostly who does the work and how much control I keep.
- **Security often means leaving things out.** My site has no database, plugins, cookies, or trackers, so there is much less to attack. I also added rules that tell the browser to run only the site's own code.
- **Good business content is plain and honest.** Each page has one clear action, "Book now," and I left out prices, reviews, and photos I did not have instead of making them up.

## What was harder than expected?

- **Online booking.** I wanted a live calendar, but real scheduling needs a server or a paid service. I learned the difference between a booking request and a confirmed booking, and designed the site around requests that I confirm by phone or email.
- **Cost numbers disagree.** One freelancer price guide gave two different ranges in the same article. I learned to show ranges, name the source and date, and explain my reasoning instead of chasing one exact number.
- **Planning for failure.** A contact form needs a backup plan. If the form service is down or not set up, the site opens the visitor's email app, and every page shows my phone number.

## What would I improve with more time?

- Add real photos of my work and customer reviews, with permission.
- Add the live booking calendar once I see how many requests arrive and whether customers want exact times.
- Test the site with five real customers and time how long it takes them to book.
- Add privacy-friendly visit counts, so I can compare real requests with my goal of 10 a month.
- Run an accessibility check with a screen reader, and set up Google Business Profile for local search.
- Keep the project in GitHub so every change is saved and I can undo mistakes.
