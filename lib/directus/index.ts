import { createDirectus, rest } from "@directus/sdk";

// rest({
//   onRequest: (options) => ({ ...options, cache: "no-store" }),
// });

const directus = createDirectus("http://0.0.0.0:8055").with(rest());

export default directus;
