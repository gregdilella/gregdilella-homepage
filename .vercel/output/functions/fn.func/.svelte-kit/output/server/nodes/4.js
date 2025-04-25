

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BnHbyePY.js","_app/immutable/chunks/scheduler.BXkDTsw4.js","_app/immutable/chunks/index.OxkCvJe9.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
