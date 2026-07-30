import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());