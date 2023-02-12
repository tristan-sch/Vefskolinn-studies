# Headless WordPress

`How to connect Next.js to Wordpress?`

- Check out the [Video](https://www.canva.com/design/DAE_p1kriDM/bL0IV6-vLicmfI6Gi0cE2Q/watch?utm_content=DAE_p1kriDM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 1- Set up WordPress

- [LocalWP](https://localwp.com/)
- [WPGraphQL](https://www.wpgraphql.com/)
- Your first Query:

```bash
query settings {
        generalSettings {
          title
          description
          url
        }
      }
```

## 2- Set up Next.js

```bash
git clone github.com/tristan-sch/headless-wp
```

`Rename the *.env.local.example* file to **.env.local** and add your Endpoint:`

```bash
WORDPRESS_API_URL=https://yourDomain/graphql
```

`Run the App`

```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
```

## 3- Query the WP Settings

- Check out the [Next.js documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) to help you

## 4- Create a query on your own to fetch the posts you created using the GraphQL API

- Check out the [WP GraphQL documentation](https://www.wpgraphql.com/docs/posts-and-pages/) to help you

## Ressources & Documentation

- [Next.js starter](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
- [Next.js documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [GraphQL API for WordPress](https://www.wpgraphql.com/)
- [GraphQL: Edges and Nodes - YouTube](https://www.youtube.com/watch?v=dCQ9g5V_CxE)
