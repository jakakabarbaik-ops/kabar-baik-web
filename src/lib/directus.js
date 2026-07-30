import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus(import.meta.env.DIRECTUS_URL).with(rest());