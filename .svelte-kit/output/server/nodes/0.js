import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BD3_R2x6.js","_app/immutable/chunks/scheduler.BWfcJTG4.js","_app/immutable/chunks/index.c5OZ9Y8-.js"];
export const stylesheets = ["_app/immutable/assets/0.Ck0dZpQD.css"];
export const fonts = [];
