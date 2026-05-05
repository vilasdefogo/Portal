// netlify/functions/clan.js
export async function handler(event, context) {
  const apiKey = process.env.COC_API_KEY; // chave escondida
  const clanTag = "%23ABCD1234"; // substitua pelo seu Clan Tag

  try {
    const response = await fetch(`https://api.clashofclans.com/v1/clans/${clanTag}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json"
      }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao buscar dados do clã" })
    };
  }
}
