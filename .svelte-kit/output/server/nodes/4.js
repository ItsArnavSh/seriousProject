

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.p69PpcCE.js","_app/immutable/chunks/scheduler.BWfcJTG4.js","_app/immutable/chunks/index.c5OZ9Y8-.js"];
export const stylesheets = [];
export const fonts = [];
