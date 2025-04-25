import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B_5hFEaT.js","_app/immutable/chunks/scheduler.BXkDTsw4.js","_app/immutable/chunks/index.OxkCvJe9.js","_app/immutable/chunks/entry.BUtArwCO.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.D15bipQb.js","_app/immutable/chunks/stores.eMRnFXE0.js"];
export const stylesheets = ["_app/immutable/assets/0.Dy5d0l-e.css","_app/immutable/assets/ProgressBar.c6i8ireL.css"];
export const fonts = [];
