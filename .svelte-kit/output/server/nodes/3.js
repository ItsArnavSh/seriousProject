

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bq6n3UyL.js","_app/immutable/chunks/scheduler.BWfcJTG4.js","_app/immutable/chunks/index.c5OZ9Y8-.js","_app/immutable/chunks/spread.CK8js_jb.js"];
export const stylesheets = [];
export const fonts = [];
