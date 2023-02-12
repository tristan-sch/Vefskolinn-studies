const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getSettings() {
  const data = await fetchAPI(
    `
      query settings {
        generalSettings {
          title
          description
          url
        }
      }
    `
  );

  return data?.generalSettings;
}

export async function getPosts() {
  const data = await fetchAPI(
    `
      query allPosts {
        posts {
       edges {
         node {
           id
           title
           content
         }
       }
        }
      }
    `
  );

  return data?.posts;
}