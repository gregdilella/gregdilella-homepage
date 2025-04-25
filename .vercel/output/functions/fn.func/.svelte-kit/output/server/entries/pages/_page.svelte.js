import { c as create_ssr_component, k as subscribe, l as createEventDispatcher, s as setContext, e as escape, n as each, o as set_store_value, g as getContext, p as onDestroy, a as add_attribute, d as compute_slots, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { p as prefersReducedMotionStore, a as fade, g as getModalStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index2.js";
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  async function onNext(locked, stepIndex) {
    await new Promise((resolve) => setTimeout(resolve));
    if (locked) return;
    set_store_value(state, $state.current++, $state);
    dispatch("next", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onBack(stepIndex) {
    set_store_value(state, $state.current--, $state);
    dispatch("back", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onComplete(stepIndex) {
    dispatch("complete", { step: stepIndex, state: $state });
  }
  setContext("state", state);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("onNext", onNext);
  setContext("onBack", onBack);
  setContext("onComplete", onComplete);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0) $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0) $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0) $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0) $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0) $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0) $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0) $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0) $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0) $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0) $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0) $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0) $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0) $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0) $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0) $$bindings.regionContent(regionContent);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0) $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0) $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0) $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0) $$bindings.transitionOutParams(transitionOutParams);
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { onNext = getContext("onNext") } = $$props;
  let { onBack = getContext("onBack") } = $$props;
  let { onComplete = getContext("onComplete") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0) $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0) $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0) $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0) $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0) $$bindings.state(state);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0) $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0) $$bindings.justify(justify);
  if ($$props.onNext === void 0 && $$bindings.onNext && onNext !== void 0) $$bindings.onNext(onNext);
  if ($$props.onBack === void 0 && $$bindings.onBack && onBack !== void 0) $$bindings.onBack(onBack);
  if ($$props.onComplete === void 0 && $$bindings.onComplete && onComplete !== void 0) $$bindings.onComplete(onComplete);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0) $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0) $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0) $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0) $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0) $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0) $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0) $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0) $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0) $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0) $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0) $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0) $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0) $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const me = {
  sources: {
    avif: "/_app/immutable/assets/me.BgdMhrwE.avif 296w, /_app/immutable/assets/me.Cw5Ffgk_.avif 591w",
    webp: "/_app/immutable/assets/me.CzI1RQqJ.webp 296w, /_app/immutable/assets/me.klbXBGNh.webp 591w",
    png: "/_app/immutable/assets/me.ZZBi1Bvb.png 296w, /_app/immutable/assets/me.5Ub8yKB6.png 591w"
  },
  img: {
    src: "/_app/immutable/assets/me.5Ub8yKB6.png",
    w: 591,
    h: 674
  }
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  return `${validate_component(Stepper, "Stepper").$$render(
    $$result,
    {
      stepTerm: "",
      buttonCompleteLabel: "That's it!",
      buttonCompleteType: "reset"
    },
    {},
    {
      default: () => {
        return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2011`;
          },
          default: () => {
            return `Graduated With a Degree in Electrical and Computer Engenieering.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2018`;
          },
          default: () => {
            return `Finish MBA and Start Working For the Management Team at Global Logistics Company.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2020`;
          },
          default: () => {
            return `Covid Hits and I Am Forced To Spend a Few Months at Home. Passed CFA level 1 and Began Coding Data Science Applications.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2021`;
          },
          default: () => {
            return `Created an App to Interact with Comany Backend to Automate the Cost Input / Invoice Processing Department. 20 FTEs.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2023`;
          },
          default: () => {
            return `Created Billing Department Automation. 15 FTEs.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2024`;
          },
          default: () => {
            return `Started Learning Typescript and Sveltekit in Order to Build Full Stack Web Applications.`;
          }
        })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
          header: () => {
            return `2025`;
          },
          default: () => {
            return `Started Hosting AI Agents In a Server To Sit On Top of Company Database and Automate Financial Backend Applications.`;
          }
        })}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-9p2xsk_START -->${$$result.title = `<title>Greg DiLella - Home</title>`, ""}<meta name="description" content="The Homepage of Greg Dilella"><meta property="og:title" content="Greg Dilella"><meta property="og:image" content="banner.png"><meta property="og:description" content="Homepage of Greg Dilella"><meta property="og:url" content="https://www.gregdilella.com"><!-- HEAD_svelte-9p2xsk_END -->`, ""}  <section class="flex justify-center items-start pt-5 py-10 md:pt-20" data-svelte-h="svelte-1mtv1sd"><div class="flex flex-col items-center"><h1 class="text-8xl md:text-10xl font-black mb-4 animate-in fade-in slide-in-from-left-12 blur-in duration-700">Greg DiLella</h1> <h3 class="text-center text-xl md:text-2xl font-semibold italic animate-in fade-in slide-in-from-bottom-8 delay-200 animate-blur-in"><span class="font-extrabold text-primary-500 duration-200 ease-in-out hover:tracking-widest hover:text-green-500">Full</span>
			Stack Developer and
			<span class="font-extrabold text-primary-500 duration-200 ease-in-out hover:tracking-widest hover:text-blue-500">Finance</span>
			Nerd</h3></div></section>  <section id="about"><div class="mx-auto max-w-6xl px-6 md:grid md:grid-cols-2 md:gap-8 items-center"><div data-svelte-h="svelte-aknxoz"><h1 class="text-4xl font-black mb-4">About me</h1> <p class="text-lg leading-relaxed text-balance">Hey, I&#39;m Greg DiLella — a Full Stack Engineer and Analyst from Canada with a passion for programming,
				finance, and all things tech. When I&#39;m not coding, you&#39;ll find me on the Jiu Jitsu mats, playing hockey,
				or walking the dogs with my wife.</p></div> ${typeof me === "string" ? `<img${add_attribute("src", me.img.src, 0)} alt="me:)" loading="lazy" class="max-w-xs md:max-w-sm border-2 border-base-300 rounded-2xl animate-in fade-in slide-in-from-left-12 blur-in duration-700 mx-auto"${add_attribute("width", me.img.w, 0)}${add_attribute("height", me.img.h, 0)}>` : `<picture>${each(Object.entries(me.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", me.img.src, 0)} alt="me:)" loading="lazy" class="max-w-xs md:max-w-sm border-2 border-base-300 rounded-2xl animate-in fade-in slide-in-from-left-12 blur-in duration-700 mx-auto"${add_attribute("width", me.img.w, 0)}${add_attribute("height", me.img.h, 0)}></picture>`}</div></section>  <section id="information" class="grid-row-3 mx-auto flex grid-cols-3 flex-col gap-8 py-8 md:grid" data-svelte-h="svelte-ggm5u9"><div class="bento-box flex justify-center"><div class="my-auto"><h1 class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl">6 Years</h1> <p class="list-inside text-lg font-semibold md:text-xl space-y-1">Of Developper Experience</p></div></div> <div class="bento-box col-span-2 flex flex-col"><div class="m-auto text-left"><h1 class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl">Why me?</h1> <ul class="list-inside text-lg font-semibold md:text-xl space-y-1"><li>Most Developers Don&#39;t Do Finance and Accounting</li> <li>Most Finance People Can&#39;t Code</li> <li>Web Dev and Front End Capable</li> <li>A.I. First Mindset</li></ul></div></div></section> <div> <div class="flex justify-center" data-svelte-h="svelte-6thn2c"><div class="bento-box flex justify-center w-full md:w-[60%]"><div class="my-auto w-full"><h1 class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl">Stack:</h1> <ul class="text-md text-lg font-bold md:text-xl space-y-1"><li><a href="https://python.org" target="_blank">Python</a></li> <li><a href="https://pandas.pydata.org" target="_blank">Pandas</a></li> <li><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></li> <li><a href="https://tailwindcss.com" target="_blank">Tailwindcss</a></li> <li><a href="https://orm.drizzle.team" target="_blank">Drizzle ORM</a></li> <li><a href="https://www.tableau.com/" target="_blank">Tableau</a></li></ul></div></div></div>  <section class="my-16"><div class="my-8 text-center" data-svelte-h="svelte-16892se"><h1 class="h1 font-black">Timeline</h1> <h4 class="h4 font-semibold italic">Key moments</h4></div> <div class="card mx-auto p-8 md:w-[60%]">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})}</div></section></div>`;
});
export {
  Page as default
};
