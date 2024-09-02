---
title: "Make it your own"
excerpt: "Learn how you can customize this template to make it your own. This guide will help you understand how the template is organized and how to add new content."
coverImage: "/assets/blogs/make-it-your-own/cover.webp"
date: "2024-08-22T19:29:00.000Z"
author:
  name: Umair Jibran
  picture: "/assets/authors/jibran.webp"
ogImage:
  url: "/assets/blogs/make-it-your-own/cover.webp"
tags:
  - open-source
  - portfolio
  - nextjs
  - tailwindcss
  - antd
---

This template is created with Next.js and Tailwind CSS. The primary goal of this template is to provide a starting point for developers to build their portfolio and to have a place where they can post their thoughts.

## Technology Used

- **[Next.js](https://nextjs.org/)** - React framework with hybrid static rendering.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework.
- **[Markdown](https://www.markdownguide.org/getting-started/)** - To write blog posts.
- **[AntD](https://ant.design/components/overview)** - An enterprise-class UI design language and React UI library.
- **[Feather Icons](https://feathericons.com/)** - Simply beautiful open source icons.
- **[Remark HTML](https://www.npmjs.com/package/remark-html)** - To parse markdown in HTML.
- **[Gray Matter](https://www.npmjs.com/package/gray-matter)** - Parse front-matter from a string or file.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types.

## Getting Started

To get started with this template, follow these steps:

1. Clone this [repository](https://github.com/umairjibran/portfolio)
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.

## Folder Structure

The folder structure is organized as follows:

```bash
_blogs
  └── make-it-your-own.md
public
  ├── assets
  └── robots.txt
src
  ├── app
  ├── components
  ├── data
  ├── lib
  ├── styles
  └── types
```

- **\_blogs** - Contains the markdown files for the blog posts.
- **public** - Contains static.
- **src** - Contains the source code.
  - **app** - Contains the pages/layouts.
  - **components** - Contains all the components.
  - **data** - Contains the json files that you can update to add your data.
  - **lib** - Contains utility functions.
  - **styles** - Contains custom CSS styles.
  - **types** - Contains TypeScript types.

## Customization

To customize this template, you can follow these steps:

1. Update the `data` files in the `src/data` directory.
2. Add new blog posts in the `_blogs` directory. (Don't forget to add your cover image in the `public/assets/blogs/[blog-id]/` directory.)
3. Update the `src/styles` directory to add your custom styles.
4. Update the `src/components` directory to add new components.

## Miscellaneous

- To change the favicon, update the `src/app/icon.png` file.
- To update the site metadata, update the `data/meta.json` file.
- I am using [Umami](https://umami.is) for analytics. You can update the `data/umamiAnalytics.json` file with your own `dataWebsiteId`. (it's free to use and open-source.)
- I am using [Azure](https://azure.microsoft.com) for hosting. You can either create your [static site](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-react?pivots=github) on Azure, and add the environment variables in the `repo > settings > Secrets and variables > actions` or delete the `.github/workflows/azure-static-web-apps-polite-river-0640ed603.yml` file and update it with your preferred tool.

## Closing Thoughts

I hope this template helps you to get started with your portfolio. If you have any questions or suggestions, feel free to reach out to me on [Linkedin](https://linkedin.com/in/umairjibran) or [email](mailto:me@umairjibran.com).

Happy coding! 🚀 Please star this [repository](https://github.com/umairjibran/portfolio) if you find it helpful.
