This is a Jekyll site hosted on GitHub Pages at https://yorko.github.io (repo root likely contains _config.yml, _layouts/, _posts/, index.html or index.md). The site is called "New Yorko Times", authored by Yury Kashnitsky — a Data Scientist and creator of mlcourse.ai. 

Implement the following GEO (Generative Engine Optimization) improvements:

--- BATCH 1: New static files ---

1. Create `robots.txt` in the repo root with the following content:
   User-agent: *
   Allow: /
   User-agent: GPTBot
   Allow: /
   User-agent: ClaudeBot
   Allow: /
   User-agent: PerplexityBot
   Allow: /
   Sitemap: https://yorko.github.io/sitemap.xml

2. Create `llms.txt` in the repo root:
   # New Yorko Times
   > A blog by Yury Kashnitsky (yorko) on Machine Learning, Data Science, AI, and personal stories. Creator of mlcourse.ai.

   ## Posts
   - /: Homepage with all blog posts

3. Create `.well-known/ai.txt` with:
   User-agent: *
   Allow: /

4. Create `ai/summary.json`:
   {
     "name": "New Yorko Times",
     "url": "https://yorko.github.io",
     "description": "A blog by Yury Kashnitsky covering Machine Learning, Data Science, AI research, career advice, and personal essays.",
     "author": "Yury Kashnitsky",
     "language": "en"
   }

5. Create `ai/faq.json`:
   {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [
       {
         "@type": "Question",
         "name": "Who writes New Yorko Times?",
         "acceptedAnswer": { "@type": "Answer", "text": "Yury Kashnitsky, a Data Scientist and creator of mlcourse.ai." }
       },
       {
         "@type": "Question",
         "name": "What topics are covered?",
         "acceptedAnswer": { "@type": "Answer", "text": "Machine Learning, Data Science, AI, career advice, book reviews, and personal stories." }
       },
       {
         "@type": "Question",
         "name": "What is mlcourse.ai?",
         "acceptedAnswer": { "@type": "Answer", "text": "An open and free Machine Learning course led by Yury Kashnitsky, hosted at mlcourse.ai." }
       }
     ]
   }

6. Create `ai/service.json`:
   {
     "name": "New Yorko Times",
     "type": "Blog",
     "topics": ["Machine Learning", "Data Science", "AI", "Career", "Education"],
     "language": ["en", "ru"],
     "url": "https://yorko.github.io"
   }

--- BATCH 2: HTML <head> improvements ---

In `_layouts/default.html` (or the main layout file), make the following changes:

7. Add `lang="en"` to the `<html>` tag:
   <html lang="en">

8. Add/update the meta description tag (150-160 chars):
   <meta name="description" content="New Yorko Times — a blog by Yury Kashnitsky on Machine Learning, Data Science, AI research, career advice, and open education.">

9. Add Open Graph tags inside <head>:
   <meta property="og:title" content="{{ page.title | default: site.title }}">
   <meta property="og:description" content="{{ page.excerpt | default: site.description }}">
   <meta property="og:url" content="{{ page.url | prepend: site.url }}">
   <meta property="og:type" content="website">
   <meta property="og:image" content="https://yorko.github.io/assets/og-image.png">

10. Add WebSite + Organization JSON-LD schema inside <head>:
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://yorko.github.io/#website",
          "url": "https://yorko.github.io",
          "name": "New Yorko Times",
          "description": "A blog by Yury Kashnitsky on Machine Learning and Data Science.",
          "inLanguage": "en",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://yorko.github.io/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://yorko.github.io/#organization",
          "name": "New Yorko Times",
          "url": "https://yorko.github.io",
          "logo": "https://yorko.github.io/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/in/kashnitsky",
            "https://github.com/Yorko"
          ]
        }
      ]
    }
    </script>

11. Add FAQPage JSON-LD schema (link to the file content from step 5, inline it):
    <script type="application/ld+json">
    <!-- paste content of ai/faq.json here -->
    </script>

--- BATCH 3: HTML structure ---

12. In `_layouts/default.html`, wrap the main content area with a `<main>` tag if not already present:
    <main id="content" role="main">
      {{ content }}
    </main>

13. If the layout contains any forms (search, contact), ensure every input has a matching `<label>` or `aria-label` attribute.

14. In post layouts (`_layouts/post.html`), make sure there is at least one <h2> or <h3> subheading in the post body template (if not already the case, add a note to authors to structure posts with subheadings).

--- NOTES ---
- For items referencing assets (logo.png, og-image.png), create placeholder files or use an existing image from the repo if available.
- Do not break existing Jekyll front matter or Liquid template syntax.
- After all changes, verify the site builds locally with `bundle exec jekyll serve`.