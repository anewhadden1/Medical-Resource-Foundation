export default function App() {
  const pages = [
    { name: "Home", id: "home", keywords: "Medical Resource Foundation Dayton Ohio disability support" },
    { name: "Mission", id: "mission", keywords: "nonprofit mission disability advocacy Dayton Ohio" },
    { name: "Programs", id: "programs", keywords: "waiver advocacy autism coach DME assistance" },
    { name: "Special Needs Coaching", id: "coaching", keywords: "autism coach Dayton Ohio special needs coaching" },
    { name: "Resources", id: "resources", keywords: "disability resources waiver advocacy Ohio" },
    { name: "Funding", id: "funding", keywords: "nonprofit funding medical equipment assistance" },
    { name: "Contact", id: "contact", keywords: "contact disability nonprofit Dayton Ohio" },
    { name: "Site Map", id: "sitemap", keywords: "site map Medical Resource Foundation" },
  ];

  const programs = [
    {
      title: "One-on-One Special Needs Coaching",
      description:
        "A 45-minute private coaching session for families who need help with autism resources, disability services, care planning, behavior supports, school concerns, waiver advocacy, and next steps.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      alt:
        "Autism coach and special needs coaching support for families in Dayton Ohio",
    },
    {
      title: "Medical Equipment Assistance",
      description:
        "Help with complex rehabilitation wheelchairs, pediatric power chairs, adaptive seating, communication devices, bath chairs, standers, walkers, lifts, and other DME that may be needed through insurance, Medicaid, or waiver services.",
      image:
        "https://images.unsplash.com/photo-1576765607924-5f65ccdc6e7f?q=80&w=1200&auto=format&fit=crop",
      alt:
        "Child disability support and complex wheelchair medical equipment assistance",
    },
    {
      title: "Waiver Advocacy",
      description:
        "Guidance for Ohio families navigating Medicaid waivers, disability services, provider options, service planning, documentation, and advocacy meetings.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      alt:
        "Waiver advocacy and disability case support in Dayton Ohio",
    },
    {
      title: "Autism & Behavioral Support Resources",
      description:
        "Connecting families with autism support, behavioral health referrals, caregiver education, school advocacy, and community-based disability resources.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      alt:
        "Autism resources and behavioral support for children and families",
    },
  ];

  const resources = [
    "Dayton, Ohio disability advocacy",
    "Ohio Medicaid waiver advocacy",
    "Autism coach and caregiver coaching",
    "Special needs family support",
    "Pediatric durable medical equipment assistance",
    "Insurance documentation guidance",
    "IEP and school meeting support",
    "Transportation and accessible housing referrals",
    "Respite and caregiver resources",
    "Grant and emergency funding support",
  ];

  const goTop = (
    <a href="#home" className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50">
      Back to Top
    </a>
  );

  return (
    <main id="home" className="min-h-screen scroll-smooth bg-slate-50 text-slate-800">
      <nav aria-label="Main website navigation for Medical Resource Foundation" className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="font-serif text-2xl font-bold italic text-blue-900" title="Medical Resource Foundation Home Dayton Ohio disability nonprofit">
            Medical Resource Foundation
          </a>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            {pages.slice(0, 7).map((page) => (
              <a key={page.id} href={`#${page.id}`} title={page.keywords} className="hover:text-blue-700">
                {page.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="relative flex min-h-[82vh] items-center justify-center bg-cover bg-center px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop')" }} aria-label="Medical Resource Foundation hero image showing community support and disability resources">
        <div className="absolute inset-0 bg-blue-950/45" />
        <div className="relative z-10 max-w-5xl rounded-3xl bg-black/20 p-8 backdrop-blur-sm">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-100">Dayton, Ohio Disability Resources</p>
          <h1 className="font-serif text-5xl font-black italic leading-tight tracking-wide text-white md:text-7xl" style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45)" }}>
            Medical Resource Foundation
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-white md:text-2xl">
            Disability advocacy, waiver advocacy, autism coaching, medical equipment assistance, and family resources for children and adults with complex needs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#coaching" className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700">Book Coaching</a>
            <a href="#resources" className="rounded-2xl border border-white bg-white/20 px-8 py-4 text-lg font-semibold text-white shadow-xl backdrop-blur hover:bg-white/30">Find Resources</a>
          </div>
        </div>
      </header>

      <section id="mission" className="bg-white px-6 py-20 md:px-16" aria-labelledby="mission-title">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">Mission Page</p>
            <h2 id="mission-title" className="mb-6 text-4xl font-bold">Our Mission in Dayton, Ohio</h2>
            <p className="text-lg leading-8 text-slate-600">
              The Medical Resource Foundation helps individuals with disabilities, autism, behavioral health challenges, and complex medical needs access resources, advocacy, education, waiver support, insurance guidance, and compassionate care.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe every person deserves dignity, inclusion, independence, and practical support that helps families remain connected to their community.
            </p>
            <div className="mt-8">{goTop}</div>
          </div>
          <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1400&auto=format&fit=crop" alt="Wheelchair user receiving disability support and medical resource advocacy in Dayton Ohio" title="Wheelchair disability advocacy Dayton Ohio Medical Resource Foundation" className="h-[450px] w-full rounded-3xl object-cover shadow-2xl" />
        </div>
      </section>

      <section id="programs" className="bg-slate-100 px-6 py-20 md:px-16" aria-labelledby="programs-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">Programs Page</p>
            <h2 id="programs-title" className="text-4xl font-bold">Programs & Services</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Support for Dayton, Ohio families seeking disability resources, waiver advocacy, autism coaching, special needs guidance, and medical equipment assistance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article key={program.title} className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl">
                <img src={program.image} alt={program.alt} title={`${program.title} | Dayton Ohio disability resources`} className="h-56 w-full object-cover" />
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold">{program.title}</h3>
                  <p className="leading-7 text-slate-600">{program.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">{goTop}</div>
        </div>
      </section>

      <section id="coaching" className="bg-white px-6 py-20 md:px-16" aria-labelledby="coaching-title">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">Autism Coach & Special Needs Coaching Page</p>
            <h2 id="coaching-title" className="mb-6 text-4xl font-bold">One-on-One Special Needs Coaching</h2>
            <p className="mb-6 text-lg leading-8 text-slate-600">
              Schedule a private session to discuss autism resources, disability services, waiver advocacy, behavior supports, care planning, school concerns, medical resources, or the next steps for your family.
            </p>
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-800">$75</h3>
              <p className="mt-2 text-xl font-semibold">45-minute private session</p>
              <p className="mt-4 leading-7 text-slate-600">Sessions may be held by phone, video call, or in person when available.</p>
            </div>
            <div className="mt-8">{goTop}</div>
          </div>
          <form className="rounded-3xl bg-slate-100 p-8 shadow-xl" aria-label="Request a special needs coaching appointment">
            <h3 className="mb-6 text-2xl font-semibold">Request an Appointment</h3>
            <div className="space-y-5">
              <input aria-label="Full name" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Full Name" type="text" />
              <input aria-label="Email address" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Email Address" type="email" />
              <input aria-label="Phone number" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Phone Number" type="tel" />
              <input aria-label="Preferred appointment date" className="w-full rounded-xl border border-slate-300 p-4" type="date" />
              <select aria-label="Preferred session time" className="w-full rounded-xl border border-slate-300 p-4">
                <option>Preferred Session Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <textarea aria-label="Describe your special needs coaching request" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Briefly describe what you need help with" rows={5} />
              <button type="button" className="w-full rounded-2xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800">Request Appointment — $75 / 45 Minutes</button>
            </div>
          </form>
        </div>
      </section>

      <section id="resources" className="bg-white px-6 py-20 md:px-16" aria-labelledby="resources-title">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1400&auto=format&fit=crop" alt="Family support resources for disability waiver advocacy and autism coaching in Dayton Ohio" title="Dayton Ohio disability resources and waiver advocacy" className="h-[320px] w-full rounded-3xl object-cover shadow-2xl" />
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop" alt="Durable medical equipment DME supplies for children with disabilities and insurance support" title="Pediatric DME insurance and Medicaid waiver equipment resources" className="h-[320px] w-full rounded-3xl object-cover shadow-2xl" />
          </div>
          <div>
            <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">Resources Page</p>
            <h2 id="resources-title" className="mb-8 text-4xl font-bold">Community Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {resources.map((resource) => (
                <a key={resource} href="#contact" title={`${resource} through Medical Resource Foundation Dayton Ohio`} className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-lg font-medium shadow-sm hover:bg-blue-100">
                  {resource}
                </a>
              ))}
            </div>
            <div className="mt-8">{goTop}</div>
          </div>
        </div>
      </section>

      <section id="funding" className="bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-20 text-white md:px-16" aria-labelledby="funding-title">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 font-bold uppercase tracking-wide text-blue-100">Funding Page</p>
          <h2 id="funding-title" className="mb-6 text-4xl font-bold">Funding & Donations</h2>
          <p className="mx-auto max-w-4xl text-xl leading-8 text-blue-100">
            The Medical Resource Foundation is funded through community donations, grants, fundraising campaigns, corporate sponsorships, and charitable partnerships. Support helps provide waiver advocacy, disability resources, autism coaching, and medical equipment assistance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl hover:scale-105">Make a Donation</a>
            <a href="#contact" className="rounded-2xl border border-white px-8 py-4 font-semibold hover:bg-white/20">Become a Sponsor</a>
          </div>
          <div className="mt-10">{goTop}</div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 md:px-16" aria-label="Medical Resource Foundation impact statistics">
        <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-4">
          <div className="rounded-3xl bg-white p-10 shadow-lg"><h3 className="text-5xl font-bold text-blue-700">100+</h3><p className="mt-4 text-lg text-slate-600">Families Served</p></div>
          <div className="rounded-3xl bg-white p-10 shadow-lg"><h3 className="text-5xl font-bold text-blue-700">DME</h3><p className="mt-4 text-lg text-slate-600">Equipment Support</p></div>
          <div className="rounded-3xl bg-white p-10 shadow-lg"><h3 className="text-5xl font-bold text-blue-700">OH</h3><p className="mt-4 text-lg text-slate-600">Waiver Advocacy</p></div>
          <div className="rounded-3xl bg-white p-10 shadow-lg"><h3 className="text-5xl font-bold text-blue-700">$75</h3><p className="mt-4 text-lg text-slate-600">Coaching Session</p></div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-20 md:px-16" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">Contact Page</p>
            <h2 id="contact-title" className="mb-6 text-4xl font-bold">Contact Medical Resource Foundation</h2>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p><strong>Address:</strong><br />Medical Resource Foundation<br />125 Hope Avenue<br />Dayton, Ohio 45402</p>
              <p><strong>Phone:</strong><br />(937) 581-0105</p>
              <p><strong>Email:</strong><br />info@medicalresourcefoundation.org</p>
              <p><strong>Keywords:</strong><br />Dayton Ohio disability resources, waiver advocacy, autism coach, special needs coaching, Medicaid waiver support, pediatric DME assistance.</p>
            </div>
            <div className="mt-8">{goTop}</div>
          </div>
          <form className="rounded-3xl bg-slate-100 p-8 shadow-xl" aria-label="Contact Medical Resource Foundation">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
            <div className="space-y-5">
              <input aria-label="Full name" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Full Name" type="text" />
              <input aria-label="Email address" className="w-full rounded-xl border border-slate-300 p-4" placeholder="Email Address" type="email" />
              <textarea aria-label="Message" className="w-full rounded-xl border border-slate-300 p-4" placeholder="How can we help you?" rows={6} />
              <button type="button" className="w-full rounded-2xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800">Submit Message</button>
            </div>
          </form>
        </div>
      </section>

      <section id="sitemap" className="bg-slate-100 px-6 py-20 md:px-16" aria-labelledby="sitemap-title">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-bold uppercase tracking-wide text-blue-700">SEO Site Map</p>
          <h2 id="sitemap-title" className="mb-6 text-center text-4xl font-bold">Website Site Map</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Each site map link points to a labeled page section and each section includes a Back to Top link, creating clear internal linking for visitors and search engines.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pages.map((page) => (
              <a key={page.id} href={`#${page.id}`} title={page.keywords} className="rounded-2xl bg-white p-6 text-center font-semibold text-blue-800 shadow hover:bg-blue-50">
                Visit {page.name}
                <span className="mt-2 block text-sm font-normal text-slate-500">{page.keywords}</span>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">{goTop}</div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-slate-300 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="font-serif text-2xl font-bold italic text-white">Medical Resource Foundation</h3>
            <p className="mt-2 text-slate-400">Dayton, Ohio disability resources, waiver advocacy, autism coaching, and medical equipment support.</p>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 Medical Resource Foundation</p>
            <a href="#sitemap" className="mt-1 inline-block text-blue-300 hover:text-white">View Site Map</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
