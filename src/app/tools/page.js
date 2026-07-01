import Link from "next/link";

export const metadata = {
  title: "Financial Tools | Grow More Advisory",
  description:
    "Free GST, Income Tax, EMI and SIP calculators by Grow More Advisory.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-yellow-400">

            Free Financial Tools

          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">

            Smart Financial

            <span className="block text-yellow-400">

              Calculators

            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Access professional financial calculators designed to help
            individuals, startups and businesses make smarter financial
            decisions with speed and accuracy.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="#tools"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Explore Tools
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Talk to an Expert
            </Link>

          </div>

        </div>

      </section>
            {/* Tools */}

      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "GST Calculator",
              icon: "🧾",
              desc: "Calculate GST amount, inclusive & exclusive prices instantly.",
              link: "/tools/gst-calculator",
            },
            {
              title: "Income Tax",
              icon: "💰",
              desc: "Estimate your income tax under the latest tax regimes.",
              link: "/tools/income-tax",
            },
            {
              title: "EMI Calculator",
              icon: "🏦",
              desc: "Know your monthly EMI, interest and total repayment.",
              link: "/tools/emi-calculator",
            },
            {
              title: "SIP Calculator",
              icon: "📈",
              desc: "Estimate your investment growth and future wealth.",
              link: "/tools/sip-calculator",
            },
          ].map((tool) => (

            <Link
              key={tool.title}
              href={tool.link}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:bg-white/[0.06]"
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-500/10 text-5xl transition duration-500 group-hover:scale-110 group-hover:bg-yellow-500/20">

                  {tool.icon}

                </div>

                <h2 className="mt-8 text-2xl font-bold transition duration-300 group-hover:text-yellow-400">

                  {tool.title}

                </h2>

                <p className="mt-4 leading-8 text-gray-400">

                  {tool.desc}

                </p>

                <div className="mt-8 flex items-center font-semibold text-yellow-400">

                  Open Tool

                  <span className="ml-2 transition duration-300 group-hover:translate-x-2">

                    →

                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>
      </section>
              {/* CTA */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.02] to-transparent p-10 md:p-16">

            {/* Glow */}

            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative z-10 text-center">

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

                Need Professional Help?

              </span>

              <h2 className="mt-8 text-4xl font-black md:text-5xl">

                Beyond Calculators,

                <span className="block text-yellow-400">

                  Get Expert Financial Advice

                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

                Our calculators provide quick estimates, but every
                business has unique financial needs. Connect with our
                experts for personalized GST, Income Tax, Accounting
                and Business Advisory solutions.

              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <Link
                  href="/contact"
                  className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
                >
                  Book Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/10 px-8 py-4 font-semibold transition-all duration-300 hover:border-yellow-500 hover:text-yellow-400"
                >
                  Explore Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}