const TAKESHAPE_API_URL = process.env.TAKESHAPE_API_URL;
const TAKESHAPE_API_KEY = process.env.TAKESHAPE_API_KEY;

//  receives GraphQL query and variables (if any) as parameters
//  and fetch data from TakeShape based on that query

const fetchData = async (query, { variables } = {}) => {
  const res = await fetch(TAKESHAPE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const resJson = await res.json();
  if (resJson.status !== 200) {
    console.log("Failed fetch Takeshape API");
  }

  return resJson.data;
};

export async function getLandingData() {
  const data = await fetchData(`
        {getLanding {
          _id
          hero {
            cta {
              label
              url
            }
            heading
            image {
              _id
              caption
              credit
              description
              filename
              mimeType
              path
              sourceUrl
              title
              uploadStatus
            }
            text
          }
          trapdoor {
            cta {
              label
              url
            }
            heading
            secondaryAction {
              label
              url
            }
            text
          }
        }}
    `);

  return data;
}
