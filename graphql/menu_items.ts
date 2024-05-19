export async function HeaderMenu() {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  const query = `
  query MainMenu {
    menuItems(where: {parentId: "0"}) {
      nodes {
        label
        childItems {
          nodes {
            uri
            label
          }
        }
        uri
      }
    }
  }
  `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    console.error("Network response was not ok");
    return [];
  }

  const data = await response.json();

  if (data.errors) {
    console.error("GraphQL errors:", data.errors);
    return [];
  }

  if (!data.data || !data.data.menuItems) {
    console.error("No menu items found");
    return [];
  }

  return data.data.menuItems.nodes;
}

export async function FooterMenu() {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  const query = `
  query MainMenu {
    menuItems(where: {location: MENU_2}) {
      nodes {
        label
        childItems {
          nodes {
            label
            path
          }
        }
        uri
      }
    }
  }
  `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    console.error("Network response was not ok");
    return [];
  }

  const data = await response.json();

  if (data.errors) {
    console.error("GraphQL errors:", data.errors);
    return [];
  }

  if (!data.data || !data.data.menuItems) {
    console.error("No menu items found");
    return [];
  }

  console.log("Received data:", data);

  return data.data.menuItems.nodes;
}
