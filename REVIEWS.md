# Session reviews

The `/reviews/` page collects a 1–5 rating, first name, session group, review and publication consent. It prepares an email to Tacticalkeepers@hotmail.com. Visitors must send that email themselves. There is no database or automatic publication.

## Publishing an approved review

1. Check that the sender attended sessions and gave permission to publish. Accept honest feedback regardless of rating. Remove personal details about children; agree any edits with the author.
2. Add the approved review to `reviews` in `lib/reviews.ts`, with a unique `id`, `name` (first name only), `session`, numeric `rating` (1–5), and `text`. Never add the sender's email address.
3. Run `npm.cmd run build` on Windows (or `npm run build` elsewhere) and deploy the contents of `out` through the existing hosting workflow.

The homepage shows the first three entries. The reviews page shows all entries. The average uses every published review. An empty list shows an invitation to leave the first review without an invented rating.

To support direct online submissions later, connect a persistent review service with moderation and spam protection; the current static export cannot store submissions by itself.

## Awaiting content

- Club shop: supplier's shop URL, kit images and product names. Link purchases directly to the supplier.
- Session footage: final video files or hosted video links and permission to publish.
- Venue: confirmed name, address and relevant session details.

These pending items have not been published as placeholder content.
