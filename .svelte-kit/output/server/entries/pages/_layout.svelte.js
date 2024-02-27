import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg-white flex flex-col items-center mt-10 mb-20" data-svelte-h="svelte-1am2dh"><nav class="flex flex-col sm:flex-row justify-between w-full max-w-3xl"><a href="/" class="font-bold text-4xl sm:text-4xl mb-4 sm:mb-0 flex items-center">ItsArnav</a> <span class="space-x-0 sm:space-x-10 text-xl sm:text-sm anta-regular flex flex-col sm:flex-row "><a class="text-2xl flex items-center" href="/about">About</a> <a class="text-2xl flex items-center" href="https://medium.com/@itsarnavsh">myBlog</a> <a class="text-2xl flex items-center" href="/projects">Projects</a> <a href="/newsletter" class="text-2xl bg-green-400 text-white rounded-md p-4 hover:bg-green-500 transi duration-200 flex items-center">Newsletter</a></span></nav></div> ${slots.default ? slots.default({}) : ``} <footer data-svelte-h="svelte-1138fn8"><hr> <p class="text-center mt-10 anta-regular">Made by Arnav</p> </footer>`;
});
export {
  Layout as default
};
