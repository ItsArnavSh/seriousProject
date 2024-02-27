import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { img } = $$props;
  let { link } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="mr-5 ml-5 flex flex-col items-center anta-regular"><a${add_attribute("href", link, 0)}><img${add_attribute("src", img, 0)} width="50"${add_attribute("alt", name, 0)}></a> <p>${escape(name)}</p></div>`;
});
const SocialsPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socialLinks = [
    {
      name: "GitHub",
      img: "/images/github.png",
      link: "https://github.com/ItsArnavSh"
    },
    {
      name: "Instagram",
      img: "/images/instagram.png",
      link: "https://www.instagram.com/its.arnav.sh"
    },
    {
      name: "LinkedIn",
      img: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/itsarnavsh/"
    }
  ];
  return `<div class="flex flex-row mb-60">${each(socialLinks, (social) => {
    return `${validate_component(Socials, "Socials").$$render($$result, Object.assign({}, social), {}, {})}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center"><div class="" data-svelte-h="svelte-1pz60xf"><p class="text-5xl anta-regular mb-10">About Me</p></div> <img src="/images/me2.png" width="150px" height="100px" class="rounded-md mb-10" alt="Not Loaded!"> <p class="prompt-regular text-2xl text-center mb-10" data-svelte-h="svelte-erk992">Hello There👋<br>  
    I am Arnav, a first year student pursuing my B.Tech in Computer Science and Engineering💻.<br>
    I love building things that make the change, and work at getting better at that every single day🌏.<br>
    Also passionate about The Cosmos, Self Improvement and Entrepreneurship.<br>
    If you resonate with me, Say hi!</p> ${validate_component(SocialsPanel, "SocialsPanel").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
