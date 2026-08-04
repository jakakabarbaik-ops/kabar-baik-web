import { directusUrl } from '../../lib/directus.js';

export async function GET() {
  const endpoint = new URL(`${directusUrl}/items/kategori`);
  endpoint.searchParams.set('fields', 'id,nama,slug,show_in_menu,sort');
  endpoint.searchParams.set('filter[show_in_menu][_eq]', 'true');
  endpoint.searchParams.set('sort', 'sort');

  const response = await fetch(endpoint.href);
  const body = await response.text();

  return new Response(body, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
