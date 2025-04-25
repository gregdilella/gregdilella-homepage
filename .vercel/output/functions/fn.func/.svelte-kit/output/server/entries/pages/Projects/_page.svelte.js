import { c as create_ssr_component, e as escape, n as each, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0) $$bindings.project(project);
  return `<div class="card flex flex-col justify-between p-8 text-left"><div><h1 class="h1 font-bold">${escape(project.name)}</h1> <hr class="my-4 border-t"> <p class="font-bold font-heading-token" data-svelte-h="svelte-nthfbg">Description</p> <p>${escape(project.desc)}</p> <hr class="my-4 border-t"> <p class="font-bold font-heading-token" data-svelte-h="svelte-1lurcnk">Technologies</p> <ul class="disc-list">${each(project.tech, (tech) => {
    return `<li>${escape(tech)}</li>`;
  })}</ul> <hr class="my-4 border-t"></div> <div><div class="flex gap-4"><a${add_attribute("href", project.link, 0)} target="_blank"><button class="link-icon duration-200 ease-in-out hover:text-primary-500" ${!project.link ? "disabled" : ""}><i class="fa-solid fa-globe text-2xl"></i></button></a> <a${add_attribute("href", project.gHlink, 0)} target="_blank"><button class="link-icon duration-200 ease-in-out hover:text-tertiary-500" ${!project.gHlink ? "disabled" : ""}><i class="fa-brands fa-github text-2xl"></i></button></a></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      name: "Vendor Invoice To General Ledger",
      desc: "An App that scrapes vendor invoices and converts individual costs into general ledger codes using a machine learning algorith and uploading into database.",
      tech: ["Python", "Pandas", "PDFplumber", "Tableau Cloud"],
      link: null,
      gHlink: "https://github.com/gregdilella/costinvoicing"
    },
    {
      name: "Billing Department Automation",
      desc: "An App to infer billing codes and prices based on job data and directly upload results back into database.",
      tech: ["Python", "Tableau Cloud", "Gmail", "Pandas"],
      link: null,
      gHlink: "https://github.com/gregdilella/Billing"
    },
    {
      name: "Accrual Inferal",
      desc: "An App to infer vendor cost accrual.",
      tech: ["Python", "Tableau Cloud", "Pandas"],
      link: null,
      gHlink: "https://github.com/gregdilella/accrualproject"
    },
    {
      name: "Voucher and Dispute",
      desc: "An App to Compare Vendor Actuals with Accruals and Voucher the Matching Line Items. A Line Item Will Also Flag If Profit/Loss Falls Outside Tolereance.  ",
      tech: ["Python", "Tableau Cloud", "Pandas"],
      link: null,
      gHlink: null
    },
    {
      name: "Quoting Tool",
      desc: "A simple front end website meant to demonstrate the Billing algorithm as a Direct Customer Quoting Tool.",
      tech: ["Python", "Pandas", "Streamlit", "GoogleMaps"],
      link: "https://sterlingquoting.streamlit.app/",
      gHlink: "https://github.com/gregdilella/Quoting"
    },
    {
      name: "Aesthetics Website",
      desc: "My Wife is planning on opening an aesthetic medicine clinic. Work in Progress.",
      tech: ["Sveltekit", "Drizzle ORM", "Typescript", "TailwindCSS"],
      link: "https://esthetics-git-main-gregdilellas-projects.vercel.app/",
      gHlink: "https://github.com/gregdilella/esthetics"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-10iks21_START -->${$$result.title = `<title>Greg Dilella- Projects</title>`, ""}<meta name="description" content="Projects of Greg Dilella"><!-- HEAD_svelte-10iks21_END -->`, ""} <main class=""><div class="text-center"><div class="my-16" data-svelte-h="svelte-4h6sfr"><h1 class="text-4xl md:text-7xl font-black mb-4 animate-in fade-in slide-in-from-left-12 duration-700">Projects</h1> <h4 class="md:text-2xl font-semibold italic animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">Things I&#39;ve Created</h4></div> <p data-svelte-h="svelte-1r2ejfm">This page only features some of my projects, but you can find all of them on
			<a href="https://github.com/gregdilella" class="anchor" target="_blank">GitHub.</a></p> <br> <p data-svelte-h="svelte-1fqexvw">I work in the logistics industry, where I manage and analyze high-volume data generated from daily shipment operations. I&#39;m highly proficient in querying databases and working with big data systems. Beyond data handling, I design and build intelligent algorithms—essentially autonomous agents—on top of databases to extract insights, optimize workflows, and drive operational decisions.</p> <div class="my-16 flex grid-cols-2 flex-col gap-8 xl:grid">${each(projects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, { project }, {}, {})}`;
  })}</div></div></main>`;
});
export {
  Page as default
};
