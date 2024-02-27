

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9Noq20CF.js","_app/immutable/chunks/scheduler.BWfcJTG4.js","_app/immutable/chunks/index.c5OZ9Y8-.js","_app/immutable/chunks/entry.JcshCFy5.js"];
export const stylesheets = [];
export const fonts = [];
