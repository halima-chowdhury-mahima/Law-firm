import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Phone,
  Scale,
} from "lucide-react";

export default function MohammadMunnaProfile() {
  const practiceAreas = [
    "Corporate & Commercial Law",
    "Company Law",
    "Real Estate & Property Law",
    "Labour & Employment Law",
    "Litigation",
    "Dispute Resolution",
  ];

  return (
    <main className="min-h-screen bg-[#081b32] text-[#f7f2e8]">
      {/* NAVBAR */}
      <header className="border-b border-white/10 bg-[#081b32]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d2aa4f] font-serif font-bold text-[#d2aa4f]">
              CLC
            </div>

            <div>
              <h1 className="font-serif text-xl uppercase">
                Chowdhury Law Chamber
              </h1>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#d2aa4f]">
                Advocates & Legal Consultants
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d2aa4f]"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
        </div>
      </header>

      {/* PROFILE HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          {/* Image */}
          <div
            className="min-h-[650px] bg-[#102844] bg-cover bg-top"
            style={{
              backgroundImage: "url('/images/mohammad-munna.jpg')",
            }}
          />

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="section-label">Managing Partner</p>

            <h1 className="font-serif text-6xl leading-tight md:text-7xl">
              Barrister
              <br />
              Mohammad Munna
            </h1>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#d2aa4f]">
              Barrister-at-Law • Managing Partner
            </p>

            <div className="my-8 h-px w-24 bg-[#d2aa4f]" />

            <p className="max-w-2xl text-lg leading-8 text-white/60">
              Barrister Mohammad Munna is the Managing Partner of Chowdhury Law
              Chamber, providing professional and strategic legal
              representation across a broad range of legal matters.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-white/45">
              With more than 20 years of legal experience, his approach focuses
              on careful legal analysis, professional integrity, strategic
              representation and effective communication with clients.
            </p>

            <Link href="/#contact" className="gold-button mt-9">
              Book Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL PROFILE */}
      <section className="bg-[#f4f0e8] py-24 text-[#081b32]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="section-label-dark">Professional Profile</p>

            <h2 className="section-heading-dark">
              Legal Experience & Practice
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5e6974]">
              His practice focuses on providing practical and strategic legal
              solutions for individuals, businesses and organisations.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-[#5e6974]">
              Each matter is approached with careful preparation,
              confidentiality and a clear understanding of the client&apos;s
              legal objectives.
            </p>

            {/* Practice Areas */}
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {practiceAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border border-[#081b32]/15 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#b78d38]"
                  />

                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bg-[#081b32] p-8 text-white">
            <h3 className="font-serif text-3xl">Profile Details</h3>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <Scale className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">Position</p>
                  <p className="mt-1">Managing Partner</p>
                </div>
              </div>

              <div className="flex gap-4">
                <BriefcaseBusiness className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">Experience</p>
                  <p className="mt-1">20+ Years</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">Chamber</p>
                  <p className="mt-1">Chowdhury Law Chamber</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">Email</p>
                  <p className="mt-1">
                    info@chowdhurylawchamber.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#d2aa4f]" />

                <div>
                  <p className="contact-label">Phone</p>
                  <p className="mt-1">+880 1XXX-XXXXXX</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#102844] py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="section-label">Legal Consultation</p>

          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Discuss your legal matter with our chamber.
          </h2>

          <Link
            href="/#contact"
            className="mx-auto mt-9 flex w-fit items-center gap-3 bg-[#d2aa4f] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-[#081b32]"
          >
            Book Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}