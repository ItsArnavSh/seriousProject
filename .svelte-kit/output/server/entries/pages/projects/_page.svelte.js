import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { num } = $$props;
  let { name = "Sample Project" } = $$props;
  let { emoji = "🧐" } = $$props;
  let { link = "https://github.com/ItsArnavSh" } = $$props;
  let { display = void 0 } = $$props;
  let { about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." } = $$props;
  if ($$props.num === void 0 && $$bindings.num && num !== void 0)
    $$bindings.num(num);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.emoji === void 0 && $$bindings.emoji && emoji !== void 0)
    $$bindings.emoji(emoji);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  return `<div class="${"anta-regular text-center rounded-md text-xl p-1 flex flex-row " + escape(num == 0 ? "flex-row-reverse" : "flex-row", true) + " items-center border-b-2"}"><div class="min-w-40"><p class="text-3xl p-5">${escape(name)}</p> <a${add_attribute("href", link, 0)} class="bg-green-400 text-white p-1 rounded-md hover:bg-green-500 transi duration-200">View on Github</a> <br> ${display != void 0 ? `<a${add_attribute("href", link, 0)}>View</a>` : `<p data-svelte-h="svelte-nvw4vi">...</p>`}</div> <div class=""><p class="max-h-20">${escape(emoji)} ${escape(about)}</p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let info = [
    {
      num: 1,
      name: "Chess",
      emoji: "♟️",
      link: "https://github.com/ItsArnavSh/chess",
      display: "https://itsarnavsh.github.io/chess/",
      about: "A two player game of Chess made with HTML, CSS and Vanilla Javascript."
    },
    {
      num: 0,
      name: "Elevators",
      emoji: "🏢",
      link: "https://github.com/HeyItsArnav/ElevatorSimulation",
      display: void 0,
      about: "An Elevator Simulation that is animated with ASCII made in C++."
    },
    {
      num: 1,
      name: "Wordle",
      emoji: "🔤",
      link: "https://github.com/Risha-Gupta/Wordle-in-C-1st-sem",
      display: void 0,
      about: "A command Line Version of Wordle in C and Python, for the Mini-Project"
    },
    {
      num: 0,
      name: "This Website",
      emoji: "👋",
      link: "https://github.com/",
      display: void 0,
      about: "This website is coded with Svelte and Tailwind frameworks."
    },
    {
      num: 1,
      name: "Portfolio",
      emoji: "👋",
      link: "https://github.com/",
      display: "https://itsarnavsh.github.io/",
      about: "My previous portfolio coded in HTML CSS. Back in the Good Old Days."
    }
  ];
  return `<div class="flex flex-col justify-center items-center space-y-5 mb-20">${each(info, (i) => {
    return `${validate_component(Project, "Project").$$render($$result, Object.assign({}, i), {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
