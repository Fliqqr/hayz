(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=["Quantitative data evaluation","Public policy interpretation","Community needs assessment","Research methodology","Records management","Strategic briefing preparation","Government program compliance","Workflow optimization"],c=[{label:"100+ reports",text:"Generated more than 100 multi-source intelligence reports and situational briefs annually."},{label:"50% faster",text:"Improved intelligence dissemination by building automated Excel-based data workflows."},{label:"11+ platforms",text:"Built situational dashboards by integrating data from more than 11 secure intelligence systems."}],p=[{title:"Publicly Available Information Research (PAIR+)",issuer:"U.S. Army Pacific",date:"August 2024"},{title:"Open-Source Intelligence Basic Course (OBC)",issuer:"U.S. Army Pacific",date:"January 2024"},{title:"Cyber Technical Training for Intelligence Professionals (CTTIP)",issuer:"U.S. Army Network Enterprise Technology Command",date:"October 2022"}],n=document.querySelector("#app");if(!n)throw new Error("App root not found");n.innerHTML=`
  <div class="min-h-screen bg-sand text-ink">
    <header class="sticky top-0 z-20 border-b border-line/70 bg-sand/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" class="flex items-center gap-3">
          <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pine text-sm font-bold text-white">HC</span>
          <span>
            <span class="block text-xs font-semibold uppercase tracking-[0.22em] text-field">Hayden Clark</span>
            <span class="block text-sm text-slate">Research & Policy Analyst Profile</span>
          </span>
        </a>
        <nav class="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          <a href="#about" class="transition hover:text-ink">About</a>
          <a href="#expertise" class="transition hover:text-ink">Expertise</a>
          <a href="#experience" class="transition hover:text-ink">Experience</a>
          <a href="#education" class="transition hover:text-ink">Education</a>
          <a href="#contact" class="transition hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section class="hero-shell border-b border-line/70">
        <div class="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div class="flex flex-col justify-center">
            <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brass">U.S. Army Veteran • Sociology & Political Science Student</p>
            <h1 class="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Analytical research, disciplined reporting, and a public-service mindset.
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate">
              Hayden Clark is a detail-oriented Army veteran pursuing a dual Bachelor’s in Sociology and Political Science at California State University, Stanislaus. His background combines intelligence analysis, structured research, operational reporting, and mission-focused collaboration.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a href="#contact" class="inline-flex items-center justify-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine/90">Contact Hayden</a>
              <a href="https://www.linkedin.com/in/hayden-r-clark" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full border border-line bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate">View LinkedIn</a>
            </div>
            <dl class="mt-10 grid gap-5 sm:grid-cols-3">
              <div class="rounded-2xl border border-line/80 bg-white/80 p-5 shadow-panel">
                <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-field">Location</dt>
                <dd class="mt-2 text-base font-semibold text-ink">Turlock, California</dd>
              </div>
              <div class="rounded-2xl border border-line/80 bg-white/80 p-5 shadow-panel">
                <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-field">Current Focus</dt>
                <dd class="mt-2 text-base font-semibold text-ink">Research, policy, and civic impact</dd>
              </div>
              <div class="rounded-2xl border border-line/80 bg-white/80 p-5 shadow-panel">
                <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-field">Education</dt>
                <dd class="mt-2 text-base font-semibold text-ink">B.A. expected 2029</dd>
              </div>
            </dl>
          </div>

          <div class="grid gap-4">
            <div class="relative overflow-hidden rounded-[2rem] border border-white/40 shadow-panel">
              <div class="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"></div>
              <img
                src="/hayden-clark.jpg"
                alt="Portrait of Hayden Clark"
                class="h-[520px] w-full object-cover object-center"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Profile</p>
                <p class="mt-2 max-w-sm text-base leading-7 text-white/90">
                  Seeking roles where research discipline, structured analysis, and clear communication support better decisions.
                </p>
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              ${c.map(i=>`
                    <article class="rounded-2xl border border-line/80 bg-white p-5 shadow-panel">
                      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brass">${i.label}</p>
                      <p class="mt-3 text-sm leading-7 text-slate">${i.text}</p>
                    </article>
                  `).join("")}
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="border-b border-line/70 bg-white/70">
        <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brass">About</p>
            <h2 class="font-display mt-4 text-3xl leading-tight">Built for research, reporting, and public-facing problem solving.</h2>
          </div>
          <div class="space-y-6 text-base leading-8 text-slate">
            <p>
              Hayden’s profile centers on synthesizing complex information into actionable insight. His Army experience spans classified and open-source analysis, operational reporting, dashboard development, and briefings prepared for senior leadership and partner organizations.
            </p>
            <p>
              Alongside that background, he is pursuing academic training in sociology and political science with an interest in community welfare, public policy, and program improvement. The result is a portfolio grounded in disciplined analysis, discretion, adaptability, and service.
            </p>
          </div>
        </div>
      </section>

      <section id="expertise" class="border-b border-line/70 bg-mist/60">
        <div class="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Areas of Expertise</p>
            <h2 class="font-display mt-4 text-3xl leading-tight">Core strengths shaped by intelligence work and academic training.</h2>
          </div>
          <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            ${d.map(i=>`
                  <article class="rounded-2xl border border-line/80 bg-white p-5 shadow-panel">
                    <p class="text-base font-semibold text-ink">${i}</p>
                  </article>
                `).join("")}
          </div>
        </div>
      </section>

      <section id="experience" class="border-b border-line/70 bg-white">
        <div class="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Experience</p>
            <h2 class="font-display mt-4 text-3xl leading-tight">United States Army intelligence analysis across multiple operational environments.</h2>
          </div>
          <article class="mt-10 rounded-[2rem] border border-line/80 bg-mist/70 p-8 shadow-panel">
            <div class="grid gap-6 lg:grid-cols-[180px_1fr]">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.16em] text-field">2021 - 2025</p>
                <p class="mt-2 text-sm text-slate">Daegu & Pyeongtaek, South Korea<br />Tacoma, Washington</p>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-ink">Intelligence Analyst</h3>
                <p class="mt-4 text-base leading-8 text-slate">
                  Performed intelligence analysis supporting strategic and tactical military operations across multiple global theaters. Interpreted classified and open-source reporting, maintained real-time situational dashboards, collaborated with joint and multinational partners, and prepared briefings that informed operational planning and threat mitigation.
                </p>
                <div class="mt-6 grid gap-4 md:grid-cols-2">
                  <div class="rounded-2xl bg-white p-5">
                    <p class="text-sm font-semibold uppercase tracking-[0.16em] text-field">Operational Impact</p>
                    <ul class="mt-3 space-y-3 text-sm leading-7 text-slate">
                      <li>Elevated operational success by 20% through 100+ annual reports and situational briefs.</li>
                      <li>Increased information-sharing speed by 25% through joint intelligence projects with partner organizations.</li>
                      <li>Coordinated reporting across 10+ joint and allied entities to improve consistency and interoperability.</li>
                    </ul>
                  </div>
                  <div class="rounded-2xl bg-white p-5">
                    <p class="text-sm font-semibold uppercase tracking-[0.16em] text-field">Technical & Research Work</p>
                    <ul class="mt-3 space-y-3 text-sm leading-7 text-slate">
                      <li>Built automated Microsoft Excel workflows that cut dissemination time by 50%.</li>
                      <li>Developed dynamic dashboards using data from 11+ secure intelligence platforms.</li>
                      <li>Supported cyber threat collaboration and open-source intelligence collection initiatives in the Indo-Pacific theater.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="education" class="border-b border-line/70 bg-sand">
        <div class="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Education & Training</p>
            <h2 class="font-display mt-4 text-3xl leading-tight">Academic and technical preparation for policy and analytical work.</h2>
          </div>
          <div class="grid gap-5">
            <article class="rounded-2xl border border-line/80 bg-white p-6 shadow-panel">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-field">Education</p>
              <h3 class="mt-3 text-xl font-semibold text-ink">Bachelor of Arts in Sociology & Political Science</h3>
              <p class="mt-2 text-base text-slate">California State University, Stanislaus • Turlock, California</p>
              <p class="mt-2 text-sm text-slate">Expected graduation: 2029</p>
            </article>

            <div class="grid gap-5 md:grid-cols-3">
              ${p.map(i=>`
                    <article class="rounded-2xl border border-line/80 bg-white p-6 shadow-panel">
                      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-field">${i.date}</p>
                      <h3 class="mt-3 text-lg font-semibold text-ink">${i.title}</h3>
                      <p class="mt-3 text-sm leading-7 text-slate">${i.issuer}</p>
                    </article>
                  `).join("")}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="bg-white">
        <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Contact</p>
            <h2 class="font-display mt-4 text-3xl leading-tight">Connect for research, analyst, policy, or public-service opportunities.</h2>
            <p class="mt-4 max-w-xl text-base leading-8 text-slate">
              This contact section uses the resume details you provided and links directly to Hayden’s public LinkedIn profile.
            </p>
          </div>
          <div class="rounded-[2rem] border border-line/80 bg-mist/70 p-8 shadow-panel">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.14em] text-field">Email</p>
                <a href="mailto:hrclark2003@gmail.com" class="mt-3 block text-base font-semibold text-ink hover:text-pine">hrclark2003@gmail.com</a>
              </div>
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.14em] text-field">Phone</p>
                <a href="tel:+12092522366" class="mt-3 block text-base font-semibold text-ink hover:text-pine">209-252-2366</a>
              </div>
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.14em] text-field">LinkedIn</p>
                <a href="https://www.linkedin.com/in/hayden-r-clark" target="_blank" rel="noreferrer" class="mt-3 block text-base font-semibold text-ink hover:text-pine">linkedin.com/in/hayden-r-clark</a>
              </div>
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.14em] text-field">Base Location</p>
                <p class="mt-3 text-base font-semibold text-ink">Turlock, CA 95382</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-line/70 bg-sand/80">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-field sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© <span id="year"></span> Hayden Clark.</p>
        <p>Research & policy profile site.</p>
      </div>
    </footer>
  </div>
`;const l=document.querySelector("#year");l&&(l.textContent=new Date().getFullYear().toString());
