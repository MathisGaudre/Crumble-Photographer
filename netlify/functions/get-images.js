export async function handler(event) {
  const folderId = event.queryStringParameters.folder;
  const size = event.queryStringParameters.size || "w800"; // w300, w800, w1600...
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!folderId) {
    return { statusCode: 400, body: "Missing folder ID" };
  }

  try {
    const url =
      `https://www.googleapis.com/drive/v3/files` +
      `?q='${folderId}'+in+parents` +
      `&key=${API_KEY}` +
      `&fields=files(id,name,mimeType)`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.files) {
      return { statusCode: 404, body: "No files found" };
    }

    const images = data.files
      .filter((f) => f.mimeType?.startsWith("image/"))
      .map((f) => ({
        id: f.id,
        name: f.name,
        thumb: `https://drive.google.com/thumbnail?id=${f.id}&sz=${size}`,
        full: `https://drive.google.com/uc?export=view&id=${f.id}`,
      }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=600",
      },
      body: JSON.stringify(images),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
