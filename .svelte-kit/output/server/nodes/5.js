

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.sZWMA9Kt.js","_app/immutable/chunks/scheduler.BWfcJTG4.js","_app/immutable/chunks/index.c5OZ9Y8-.js","_app/immutable/chunks/spread.CK8js_jb.js"];
export const stylesheets = [];
export const fonts = [];
