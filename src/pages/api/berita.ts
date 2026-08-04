import { directusUrl } from '../../lib/directus.js';

export async function GET({ request }) {
  const incomingUrl = new URL(request.url);
  const directusEndpoint = new URL(`${directusUrl}/items/berita`);

  incomingUrl.searchParams.forEach((value, key) => {
    directusEndpoint.searchParams.append(key, value);
  });

  const directusResponse = await fetch(directusEndpoint.href);
  const body = await directusResponse.text();

  return new Response(body, {
    status: directusResponse.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
