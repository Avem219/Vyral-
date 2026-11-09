# Federal University Otuoke — Website Concept

A responsive, polished university website frontend concept for Federal University Otuoke (FUO), using the supplied crest and the university's stated motto: **Knowledge, Excellence, Service**.

## Run locally
No build tools are required.
1. Extract the ZIP.
2. Open `index.html` in a modern browser, or serve the folder with any static web server.
3. For local testing, Python can serve it with `python -m http.server 8080` from this folder.

## Included
- Responsive landing page and mobile navigation
- University overview and values
- Searchable/filterable sample programme cards
- Admissions guidance section linking to official channels
- Research, campus life and news preview sections
- Contact information from the client brief
- Reduced-motion support, semantic sections, basic SEO metadata and accessible controls

## Production launch checklist — required
This is a frontend concept, not a complete university admissions platform. Before public launch:

1. **Verify all institutional facts** with the university Registry/PR Unit. Confirm the official name, vision statement, current Vice-Chancellor, faculty structure and programme list.
2. **Replace sample programme cards** with the complete, current approved programme catalogue, including official entry requirements and department URLs.
3. **Replace sample news cards** with dated, approved university announcements and official imagery.
4. **Confirm contact information** and every external admissions/eCampus URL. The supplied brief did not include a verified direct eCampus URL, so the admissions CTA currently links to the main official website.
5. **Obtain image permissions/licences** and replace remote Unsplash image URLs with approved, locally hosted university photography. The remote images are design placeholders.
6. **Connect real admissions services** if needed: applicant authentication, database, application workflow, payment gateway, receipt generation, email/SMS notifications, status tracking and admin dashboard. Never collect payment or sensitive applicant data using this static frontend alone.
7. **Configure deployment** on the university's chosen hosting, HTTPS, domain, redirects, caching, uptime monitoring, analytics/privacy notice and security headers.
8. **Test** current Chrome, Firefox, Safari and mobile browsers; keyboard navigation; contrast; accessibility; broken links; load performance; and real application journeys.
9. Add a privacy policy, terms, accessibility statement, cookie notice if required, and approved data-retention/contact details.

## Current source assumptions
The supplied client brief identifies FUO as a federal public university in Otuoke, Bayelsa State, established in 2011, with academic activities beginning in 2012. These details and all contact information should be reconfirmed by the university before production publication.

## Files
- `index.html` — page content and structure
- `styles.css` — visual design and responsive layouts
- `script.js` — mobile menu, course filtering, current year and notice dismissal
- `assets/fuotuoke-logo.jpg` — supplied university crest
