---
layout: "@layouts/BlogPage.astro"
title: Migrating my website to Astro
pubDate: 2023-01-08
description: I was lazy but rebuilt my website with Astro
---

The static site generator which I was using [Zola](https://getzola.org) was fine
but I wanted to have more modern development experience and decided to switch to
[Astro](https://astro.build/) for my blog.

## Background

Zola was fine for creating simple and minimal websites but I felt it won't be
suitable for creating complex layouts.

So I was looking for new SSG and found Astro. Although I was pretty satisfied
with Zola. I wanted to get familiar with modern web development centered around
npm.

Below, I will write some notes when I was developing.

## RSS/sitemap

The official integrations support features which most blog want to have.

- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

One thing to note that Astro will separate the xml file to two files
`sitemap-0.xml` and `sitemap-index.xml`.

## Markdown or MDX?

Currently my blog posts are all in `.md` file. In `.mdx` file you can use
components, meaning it will give more options to design my posts but I felt it
is too much for me. I will keep sticking with `.md` for now.

## Import alias

I got tired of writing `../../` when importing components and understanding the
directories. [The official
documentation](https://docs.astro.build/en/guides/aliases/) shows how to solve
this by using import alias.

My configuration looks like this.

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@utils/*": ["src/utils/*"],
      "@images/*": ["src/images/*"],
      "@styles/*": ["src/styles/*"]
    }
  }
}
```

Now you don't need to think about the file path and the code looks much cleaner
like this.

```astro
---
import "@components/RandomComponent.astro";
---
```

## Lighthouse result

![Lighthouse result](/images/lighthouse-result.png)

Just tested out of curiosity. Everything looks good.

## What I liked about Astro

+ [Astro island architecture](https://docs.astro.build/en/concepts/islands/)
  + I do not use this feature for my blog though
+ Framework specialized for static site generation
  + Even I who have little experience with frontend development can create
+ Supports React, Vue, Svelte and more...
+ Compiled html file ships with 0 Javascript

## Source code?

+ [Here you go](https://github.com/shutosheep/shutotamaoka.xyz)
