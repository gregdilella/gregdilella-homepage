import * as server from '../entries/pages/Contact/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BPlfyhQU.js","_app/immutable/chunks/scheduler.BXkDTsw4.js","_app/immutable/chunks/index.OxkCvJe9.js"];
export const stylesheets = [];
export const fonts = [];
