# YourUni

I've developed this project with Next.js and the application is live on https://college-finder.vercel.app/. Instrucions on how to run the app are given at the bottom through Next.js default documentation.

This solution is "quick and dirty" given the prompt of working about 2 hours on it. The task simplicity however does not ask for much more complexity, so a short run around key decisions:

## Notable decisions

**Next.js**: I find next.js a more powerful framework than create-react-app for its SSR and ISR (a topic I gave a public talk about [here](https://www.youtube.com/watch?v=eXxrz4BiqSM&list=PLf9R1sIea3m2K5RkJD6zPnP0Q1t0iBs_s&index=32)

**Design deviation**: The cards in the figma design have variable height. I think this is a strange decision and very conciously made them all use common flexbox to make them equal height. I think it looks better this way, unless the intention where to make a Pinterest-like Mosaic.

**Mobile responsiveness**: For the sake of simplicity I made the design responsive only on two sizes (below and above 996px). Several techniques and decisions on how to organize the content are displayed.

**Accesibility**: links and buttons are implemented with anchors for browser-default navigation, and lint/a11y practices like adding alt on images provided. More semanting HTML could be used to improve SEO and readability, like main/footer tags, or article components. They provide marginal benefits for this problem.

**Search**: There was no design req for search, and it was not clear to me if the search was meant to be a filter or a global search bar. I implemented the latter, including debounce and some events to open/close results. 

**API**: I thought of adding a server-side api endpoint to parse CSV results, but the provided endpoint worked unrestrictedly for either search use cases or initial loading. A lot of options are available to improve performance and reliability here: caching in the server, caching in the client, cached-proxy, etc. For time constraints I just used the same endpoint over and over.

**GetInitialProps**: This is a unique feature of Next.js that means the page is generated once at build time and served with the request already made. This makes it really fast to load the page and skip any loading states. However this also means the results go stale, and we would want to active [ISR](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) for it.

**CSS**: Using default css modules. The project is not large enough to decide on a pattern for reusability (global styles, shared components, inheritance/composition, etc) so it seemed practical and easy.

This is meant to be a quick&dirty delivery, and I can certainly polish and add more sophistication. Hopefully this is what you were looking for!

# Next.js docs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
