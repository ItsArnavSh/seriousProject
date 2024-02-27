import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="pt-40 pb-40 bg-green-100" data-svelte-h="svelte-arw0e2"><div class="flex flex-col items-center"><p class="mb-5 text-3xl">I am Starting My Own <b>Newsletter</b></p> <p class="text-5xl mb-5 anta-regular">Trillingo</p></div> <div class="flex flex-row justify-center items-center "><div class="p-10 flex flex-col items-end text-3xl prompt-regular"><p class="mb-4">Solving the Problem</p> <p class="mb-4">in <b>3 Algorithms</b>, in <b>3 Languages</b>, Every <b>3 Days</b></p> <p class="mb-6">Using C++, JavaScript and Rust</p> <p class="mb-5">If that sounds like your cup of tea,</p> <p class="mb-5">Consider Subscribing 🤗</p> <iframe title="news" src="https://embeds.beehiiv.com/b4d502eb-1c82-4018-a782-e8d6c0e712b8?slim=true" data-test-id="beehiiv-embed" height="120" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe> <p class="mt-2">To learn more about it, you can visit  the <a href="https://medium.com/@itsarnavsh/coders-listen-up-i-am-starting-a-new-series-89764f1b1142" class="text-gray-500">Medium Article</a></p></div> <div class="justify-start"><img alt="Computer" src="/images/programming.png"></div></div></div>`;
});
export {
  Page as default
};
