import { createDirectus, rest } from '@directus/sdk';

// Gunakan fallback URL jika variabel Cloudflare gagal terbaca
const url = import.meta.env.PUBLIC_DIRECTUS_URL || 'https://cms.kabar-baik.id';

export const directus = createDirectus(url).with(rest());