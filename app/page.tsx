import Link from "next/link";
import Hero from "./components/Hero";

import {
  ArrowRight,
  Award,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ReceiptText,
  Scale,
  ShipWheel,
  UsersRound,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const practiceAreas = [
  {
    title:
      "Corporate & Commercial Law",

    description:
      "Strategic legal assistance for businesses, commercial agreements, transactions and corporate matters.",

    icon: BriefcaseBusiness,
  },

  {
    title: "Company Law",

    description:
      "Professional guidance relating to company formation, compliance, governance and business operations.",

    icon: Building2,
  },

  {
    title:
      "Admiralty & Maritime Law",

    description:
      "Legal assistance for shipping, maritime transactions, vessel matters and maritime disputes.",

    icon: ShipWheel,
  },

  {
    title:
      "VAT, Tax & Customs Law",

    description:
      "Legal guidance concerning taxation, VAT compliance, customs matters and related disputes.",

    icon: ReceiptText,
  },

  {
    title:
      "Real Estate & Property Law",

    description:
      "Professional support for property transactions, documentation, title verification and disputes.",

    icon: Landmark,
  },

  {
    title:
      "Labour & Employment Law",

    description:
      "Legal advice concerning workplace matters, employment contracts and labour-related disputes.",

    icon: UsersRound,
  },

  {
    title:
      "Litigation & Dispute Resolution",

    description:
      "Strategic legal representation in civil, commercial and other complex disputes.",

    icon: Scale,
  },

  {
    title: "Banking & Finance",

    description:
      "Legal assistance for banking matters, financing arrangements and commercial transactions.",

    icon: Building2,
  },

  {
    title:
      "International Legal Services",

    description:
      "Professional legal support for individuals and organisations with cross-border legal requirements.",

    icon: Globe2,
  },
];

const whyChooseUs = [
  {
    number: "01",
    title:
      "Experienced Legal Guidance",

    description:
      "More than two decades of legal experience supporting professional and strategic representation.",
  },

  {
    number: "02",
    title:
      "Client-Focused Approach",

    description:
      "Every legal matter is approached with attention, communication and practical strategy.",
  },

  {
    number: "03",
    title:
      "Professional Integrity",

    description:
      "Confidentiality, ethics and transparent communication remain central to our work.",
  },

  {
    number: "04",
    title:
      "Strategic Representation",

    description:
      "We carefully evaluate each matter before developing an appropriate legal strategy.",
  },
];

const blogs = [
  {
    category: "Corporate Law",

    title:
      "Important Legal Considerations When Starting a Business",

    date: "September 2026",
  },

  {
    category: "Property Law",

    title:
      "What To Check Before Completing A Property Transaction",

    date: "September 2026",
  },

  {
    category: "Employment Law",

    title:
      "Understanding Employment Contracts and Workplace Rights",

    date: "August 2026",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#081b32] text-[#f7f2e8]">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#081b32]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-5 py-5 lg:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#d2aa4f] font-serif text-lg font-bold text-[#d2aa4f]">
              CLC
            </div>

            <div>
              <h1 className="font-serif text-xl font-semibold uppercase tracking-wide md:text-2xl">
                Chowdhury Law Chamber
              </h1>

              <p className="mt-1 hidden text-[10px] uppercase tracking-[0.2em] text-[#d2aa4f] sm:block">
                Advocates & Legal
                Consultants
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden items-center gap-6 xl:flex">
            <Link
              href="/"
              className="nav-link text-[#d2aa4f]"
            >
              Home
            </Link>

            <Link
              href="#lawyers"
              className="nav-link"
            >
              Lawyers
            </Link>

            <Link
              href="#clients"
              className="nav-link"
            >
              Clients
            </Link>

            {/* Expertise dropdown */}

            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                Expertise

                <ChevronDown
                  size={15}
                />
              </button>

              <div className="invisible absolute left-0 top-8 z-50 w-[310px] translate-y-3 border border-white/10 bg-[#102844] p-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {practiceAreas
                  .slice(0, 6)
                  .map((area) => (
                    <Link
                      key={
                        area.title
                      }
                      href="#expertise"
                      className="block border-b border-white/5 px-4 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-[#d2aa4f]"
                    >
                      {
                        area.title
                      }
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              href="#blogs"
              className="nav-link"
            >
              Blogs
            </Link>

            <Link
              href="#faq"
              className="nav-link"
            >
              FAQs
            </Link>

            <Link
              href="#news"
              className="nav-link"
            >
              News
            </Link>

            <Link
              href="#contact"
              className="nav-link"
            >
              Contact
            </Link>

            <Link
              href="#contact"
              className="ml-3 bg-[#d2aa4f] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-[#081b32] transition hover:bg-[#e4bd63]"
            >
              Book Appointment
            </Link>
          </nav>

          {/* MOBILE MENU */}

          <details className="relative xl:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center border border-[#d2aa4f]/50 p-3 text-[#d2aa4f]">
              <Menu size={23} />
            </summary>

            <div className="absolute right-0 top-14 z-50 w-72 border border-white/10 bg-[#102844] p-4 shadow-2xl">
              <Link
                href="/"
                className="mobile-link"
              >
                Home
              </Link>

              <Link
                href="#lawyers"
                className="mobile-link"
              >
                Lawyers
              </Link>

              <Link
                href="#clients"
                className="mobile-link"
              >
                Clients
              </Link>

              <Link
                href="#expertise"
                className="mobile-link"
              >
                Expertise
              </Link>

              <Link
                href="#blogs"
                className="mobile-link"
              >
                Blogs
              </Link>

              <Link
                href="#faq"
                className="mobile-link"
              >
                FAQs
              </Link>

              <Link
                href="#news"
                className="mobile-link"
              >
                News
              </Link>

              <Link
                href="#contact"
                className="mobile-link"
              >
                Contact
              </Link>

              <Link
                href="#contact"
                className="mt-4 block bg-[#d2aa4f] px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#081b32]"
              >
                Book Appointment
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <Hero />

      {/* ================= CLIENT STRIP ================= */}

      <section className="border-y border-white/10 bg-[#07182d]">
        <div className="mx-auto grid max-w-[1650px] grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {[
            "Individuals",
            "Corporates",
            "Entrepreneurs",
            "Real Estate",
            "Financial Sector",
            "International Clients",
          ].map((item) => (
            <div
              key={item}
              className="border-b border-r border-white/10 px-5 py-8 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/45"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-[#f4f0e8] py-24 text-[#081b32]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

          <div
            className="min-h-[580px] bg-[#102844] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/about-law.jpg')",
            }}
          />

          <div className="flex flex-col justify-center">

            <p className="section-label-dark">
              About The Chamber
            </p>

            <h2 className="section-heading-dark">
              Experience.
              <br />
              Strategy.
              <br />
              Professional Integrity.
            </h2>

            <div className="my-8 h-px w-24 bg-[#b78d38]" />

            <p className="max-w-xl text-lg leading-8 text-[#4e5965]">
              Chowdhury Law Chamber
              provides professional legal
              services to individuals,
              businesses and organisations
              across a broad range of
              legal matters.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#66717c]">
              Established in 2026, the
              chamber is supported by more
              than twenty years of legal
              experience and focuses on
              strategic legal guidance,
              careful analysis and
              professional client service.
            </p>

            <Link
              href="#expertise"
              className="mt-9 flex w-fit items-center gap-3 border-b border-[#081b32] pb-2 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Discover Our Chamber

              <ArrowRight
                size={16}
              />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}

      <section
        id="expertise"
        className="bg-[#081b32] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-14 max-w-5xl">

            <p className="section-label">
              Our Expertise
            </p>

            <h2 className="section-heading">
              Specialised legal services
              across multiple practice
              areas
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {practiceAreas.map(
              (area) => {
                const Icon =
                  area.icon;

                return (
                  <article
                    key={
                      area.title
                    }
                    className="group flex min-h-[365px] flex-col border border-white/10 bg-[#102844] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#d2aa4f]/60 hover:bg-[#132d4e]"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center border border-[#d2aa4f]/40 text-[#d2aa4f]">
                      <Icon
                        size={34}
                        strokeWidth={
                          1.4
                        }
                      />
                    </div>

                    <h3 className="font-serif text-2xl leading-tight">
                      {
                        area.title
                      }
                    </h3>

                    <p className="mt-5 leading-7 text-white/50">
                      {
                        area.description
                      }
                    </p>

                    <Link
                      href="#contact"
                      className="mt-auto flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#d2aa4f]"
                    >
                      Learn More

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>
                  </article>
                );
              }
            )}

          </div>
        </div>
      </section>

      {/* ================= MANAGING PARTNER ================= */}

      <section
        id="lawyers"
        className="border-y border-white/10 bg-[#07182d] py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

          <div
            className="min-h-[680px] bg-[#102844] bg-cover bg-top"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(8,27,50,0.3)),url('/images/mohammad-munna.jpg')",
            }}
          />

          <div className="flex flex-col justify-center">

            <p className="section-label">
              Managing Partner
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Barrister
              <br />
              Mohammad Munna
            </h2>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#d2aa4f]">
              Barrister-at-Law •
              Managing Partner
            </p>

            <div className="my-8 h-px w-24 bg-[#d2aa4f]" />

            <p className="max-w-xl text-lg leading-8 text-white/55">
              Barrister Mohammad Munna
              serves as Managing Partner
              of Chowdhury Law Chamber
              and provides strategic
              legal guidance across a
              broad range of legal
              matters.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-white/40">
              His professional approach
              focuses on careful legal
              analysis, strategic
              representation,
              professional integrity and
              effective communication
              with clients.
            </p>

            <Link
              href="/lawyers/mohammad-munna"
              className="mt-9 flex w-fit items-center gap-3 border-b border-[#d2aa4f] pb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d2aa4f]"
            >
              View Profile

              <ArrowRight
                size={17}
              />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= RECOGNITION ================= */}

      <section className="bg-[#f4f0e8] py-24 text-[#081b32]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="text-center">

            <p className="section-label-dark">
              Recognition
            </p>

            <h2 className="section-heading-dark">
              Experience & Professional
              Excellence
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              [
                "3",
                "Global Awards",
              ],
              [
                "500+",
                "Cases Handled",
              ],
              [
                "20+",
                "Years of Legal Experience",
              ],
            ].map(
              ([number, label]) => (
                <article
                  key={label}
                  className="border border-[#081b32]/15 p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-[#b78d38]"
                >
                  <Award
                    size={38}
                    strokeWidth={
                      1.4
                    }
                    className="mx-auto text-[#b78d38]"
                  />

                  <p className="mt-6 font-serif text-6xl">
                    {number}
                  </p>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#66717c]">
                    {label}
                  </p>
                </article>
              )
            )}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#081b32] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          <div>

            <p className="section-label">
              Why Clients Rely On Us
            </p>

            <h2 className="section-heading">
              Legal service built around
              trust and strategy.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-white/45">
              Our goal is to provide
              professional legal support
              through careful preparation,
              confidentiality and
              practical legal solutions.
            </p>

          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">

            {whyChooseUs.map(
              (item) => (
                <article
                  key={
                    item.number
                  }
                  className="bg-[#081b32] p-8"
                >
                  <span className="font-serif text-4xl text-[#d2aa4f]">
                    {
                      item.number
                    }
                  </span>

                  <h3 className="mt-7 font-serif text-2xl">
                    {
                      item.title
                    }
                  </h3>

                  <p className="mt-4 leading-7 text-white/45">
                    {
                      item.description
                    }
                  </p>
                </article>
              )
            )}

          </div>
        </div>
      </section>

      {/* ================= OUR LAWYER ================= */}

      <section className="bg-[#f4f0e8] py-24 text-[#081b32]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="section-label-dark">
            Our Lawyers
          </p>

          <h2 className="section-heading-dark">
            Meet Our Legal Leadership
          </h2>

          <div className="mt-14 max-w-md">

            <Link
              href="/lawyers/mohammad-munna"
              className="group block overflow-hidden bg-[#081b32]"
            >
              <div className="overflow-hidden">

                <div
                  className="h-[520px] bg-[#102844] bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/mohammad-munna.jpg')",
                  }}
                />

              </div>

              <div className="p-7 text-[#f7f2e8]">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d2aa4f]">
                  Managing Partner
                </p>

                <h3 className="mt-3 font-serif text-3xl">
                  Barrister Mohammad
                  Munna
                </h3>

                <p className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d2aa4f]">
                  View Profile

                  <ArrowRight
                    size={16}
                  />
                </p>

              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}

      <section
        id="clients"
        className="border-y border-white/10 bg-[#07182d] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="text-center">

            <p className="section-label">
              Clients & Industries
            </p>

            <h2 className="section-heading mx-auto">
              Supporting diverse legal
              needs
            </h2>

          </div>

          <div className="mt-14 grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3">

            {[
              "Corporate Businesses",
              "Entrepreneurs",
              "Property Owners",
              "Shipping Sector",
              "Financial Sector",
              "Individuals & Families",
            ].map((client) => (
              <div
                key={client}
                className="flex min-h-40 items-center justify-center border-b border-r border-white/10 p-6 text-center"
              >
                <p className="font-serif text-xl text-white/65">
                  {client}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}

      <section className="bg-[#102844] py-24">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <Scale
            size={48}
            strokeWidth={1}
            className="mx-auto text-[#d2aa4f]"
          />

          <p className="mt-9 font-serif text-3xl leading-relaxed md:text-4xl">
            “Professional legal
            representation begins with
            understanding the client,
            analysing the matter carefully
            and developing a clear legal
            strategy.”
          </p>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#d2aa4f]">
            Chowdhury Law Chamber
          </p>

        </div>
      </section>

      {/* ================= BLOGS ================= */}

      <section
        id="blogs"
        className="bg-[#f4f0e8] py-24 text-[#081b32]"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="section-label-dark">
            Legal Insights
          </p>

          <h2 className="section-heading-dark">
            Latest Articles
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="group border border-[#081b32]/15 bg-[#f9f7f2]"
              >
                <div className="flex h-56 items-center justify-center bg-[#102844]">

                  <BookOpenText
                    size={55}
                    strokeWidth={
                      1.2
                    }
                    className="text-[#d2aa4f]"
                  />

                </div>

                <div className="p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b78d38]">
                    {
                      blog.category
                    }
                  </p>

                  <h3 className="mt-4 font-serif text-2xl leading-snug">
                    {blog.title}
                  </h3>

                  <p className="mt-5 text-sm text-[#66717c]">
                    {blog.date}
                  </p>

                  <button className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">

                    Read Article

                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}

      <section
        id="news"
        className="bg-[#081b32] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="section-label">
            News & Updates
          </p>

          <h2 className="section-heading">
            From The Chamber
          </h2>

          <div className="mt-14 border-t border-white/10">

            {[
              [
                "24 SEP 2026",
                "Legal Insights and Chamber Updates",
              ],

              [
                "12 SEP 2026",
                "Expanding Our Professional Legal Services",
              ],

              [
                "28 AUG 2026",
                "New Legal Resources For Our Clients",
              ],
            ].map(
              ([date, title]) => (
                <div
                  key={title}
                  className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[200px_1fr_auto] md:items-center"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-[#d2aa4f]">
                    {date}
                  </p>

                  <h3 className="font-serif text-2xl text-white/80">
                    {title}
                  </h3>

                  <ArrowRight className="text-white/30 transition duration-300 group-hover:translate-x-2 group-hover:text-[#d2aa4f]" />

                </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section
        id="faq"
        className="bg-[#f4f0e8] py-24 text-[#081b32]"
      >
        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="text-center">

            <p className="section-label-dark">
              Frequently Asked Questions
            </p>

            <h2 className="section-heading-dark">
              How Can We Help?
            </h2>

          </div>

          <div className="mt-14 space-y-4">

            {[
              [
                "How can I book a legal consultation?",
                "You may contact the chamber by telephone, email or through the appointment form available on this website.",
              ],

              [
                "What legal matters does the chamber handle?",
                "The chamber provides professional services across corporate, property, employment, litigation, dispute resolution and other legal practice areas.",
              ],

              [
                "Can businesses request legal consultation?",
                "Yes. Legal services are available for companies, entrepreneurs and other organisations.",
              ],

              [
                "Is client information confidential?",
                "Professional confidentiality and responsible handling of client information are important aspects of legal representation.",
              ],
            ].map(
              ([question, answer]) => (
                <details
                  key={
                    question
                  }
                  className="border border-[#081b32]/15 bg-white/30 p-6"
                >
                  <summary className="cursor-pointer list-none font-serif text-xl font-semibold">
                    {
                      question
                    }
                  </summary>

                  <p className="mt-5 leading-7 text-[#66717c]">
                    {answer}
                  </p>
                </details>
              )
            )}

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-[#102844] py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

          <div>

            <p className="section-label">
              Contact The Chamber
            </p>

            <h2 className="section-heading">
              Schedule a confidential
              consultation.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-white/50">
              Contact Chowdhury Law
              Chamber to discuss your
              legal requirements and
              arrange an appointment.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">

                <Phone className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">
                    Phone
                  </p>

                  <p className="mt-1">
                    +880
                    1XXX-XXXXXX
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">
                    Email
                  </p>

                  <p className="mt-1">
                    info@chowdhurylawchamber.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">
                    Office
                  </p>

                  <p className="mt-1">
                    Dhaka,
                    Bangladesh
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}

          <form className="bg-[#f4f0e8] p-7 text-[#081b32] md:p-10">

            <h3 className="font-serif text-3xl">
              Request an Appointment
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control"
              />

              <select className="form-control">
                <option>
                  Select Practice Area
                </option>

                <option>
                  Corporate Law
                </option>

                <option>
                  Company Law
                </option>

                <option>
                  Real Estate Law
                </option>

                <option>
                  Employment Law
                </option>

                <option>
                  Litigation
                </option>
              </select>

            </div>

            <textarea
              rows={6}
              placeholder="Tell us briefly about your legal matter"
              className="form-control mt-5 w-full resize-none"
            />

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-3 bg-[#081b32] px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#d2aa4f] hover:text-[#081b32]"
            >
              Submit Enquiry

              <ArrowRight
                size={17}
              />
            </button>

            <p className="mt-4 text-xs leading-5 text-[#66717c]">
              Submission of this form
              does not by itself create
              a lawyer-client
              relationship.
            </p>

          </form>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#061426]">

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d2aa4f] font-serif font-bold text-[#d2aa4f]">
                  CLC
                </div>

                <div>

                  <h3 className="font-serif text-xl">
                    Chowdhury Law Chamber
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#d2aa4f]">
                    Advocates & Legal
                    Consultants
                  </p>

                </div>

              </div>

              <p className="mt-6 max-w-sm leading-7 text-white/40">
                Professional legal
                services built around
                experience, integrity,
                strategy and client
                confidence.
              </p>

            </div>

            {/* Links */}

            <div>

              <h4 className="footer-heading">
                Quick Links
              </h4>

              <div className="mt-6 flex flex-col gap-3 text-sm text-white/50">

                <Link href="/">
                  Home
                </Link>

                <Link href="#about">
                  About
                </Link>

                <Link href="#lawyers">
                  Lawyers
                </Link>

                <Link href="#expertise">
                  Expertise
                </Link>

                <Link href="#blogs">
                  Blogs
                </Link>

              </div>

            </div>

            {/* Practice */}

            <div>

              <h4 className="footer-heading">
                Practice Areas
              </h4>

              <div className="mt-6 space-y-3 text-sm text-white/50">

                <p>
                  Corporate Law
                </p>

                <p>
                  Company Law
                </p>

                <p>
                  Property Law
                </p>

                <p>
                  Employment Law
                </p>

                <p>
                  Dispute Resolution
                </p>

              </div>

            </div>

            {/* Social */}

            <div>

              <h4 className="footer-heading">
                Connect With Us
              </h4>

              <div className="mt-6 flex gap-3">

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <FaLinkedinIn
                    size={18}
                  />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="social-button"
                >
                  <FaFacebookF
                    size={18}
                  />
                </a>

              </div>

            </div>

          </div>

          <div className="mt-14 border-t border-white/10 pt-8">

            <p className="max-w-4xl text-xs leading-6 text-white/30">
              The information provided
              on this website is for
              general informational
              purposes only and should
              not be considered legal
              advice.
            </p>

            <div className="mt-7 flex flex-col justify-between gap-4 border-t border-white/5 pt-7 text-xs text-white/30 md:flex-row">

              <p>
                © 2026 Chowdhury Law
                Chamber. All Rights
                Reserved.
              </p>

              <div className="flex flex-wrap gap-5">

                <span>
                  Privacy Policy
                </span>

                <span>
                  Terms & Conditions
                </span>

                <span>
                  Legal Disclaimer
                </span>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* FLOATING BUTTON */}

      <Link
        href="#contact"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-[#d2aa4f] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#081b32] shadow-2xl transition hover:scale-105 md:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081b32] text-[#d2aa4f]">

          <CheckCircle2
            size={17}
          />

        </span>

        Book Appointment
      </Link>

    </main>
  );
}