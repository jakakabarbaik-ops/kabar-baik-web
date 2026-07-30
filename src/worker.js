const DIRECTUS_URL = 'https://cms.kabar-baik.id';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/berita') {
      if (request.method !== 'GET') {
        return new Response('Method Not Allowed', {
          status: 405,
          headers: { Allow: 'GET' },
        });
      }

      const directusUrl = new URL('/items/berita', DIRECTUS_URL);
      url.searchParams.forEach((value, key) => {
        directusUrl.searchParams.append(key, value);
      });

      try {
        const response = await fetch(directusUrl, {
          headers: { Accept: 'application/json' },
        });

        return new Response(response.body, {
          status: response.status,
          headers: {
            'Content-Type':
              response.headers.get('Content-Type') || 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=60, s-maxage=300',
          },
        });
      } catch (error) {
        console.error('Directus request failed:', error);
        return Response.json(
          { errors: [{ message: 'CMS tidak dapat dihubungi.' }] },
          { status: 502 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  },
};
