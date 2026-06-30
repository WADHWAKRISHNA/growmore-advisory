export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32">

        {/* Background Glow */}
        <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 tracking-widest uppercase text-sm">
            About Grow More Advisory
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Building Businesses.

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Creating Trust.
            </span>

          </h1>

          <p className="max-w-3xl mt-10 text-gray-400 text-xl leading-9">

            Grow More Advisory is committed to helping businesses,
            entrepreneurs and startups simplify taxation,
            compliance and financial management through
            reliable advisory services and long-term partnerships.

          </p>

        </div>

      </section>

    </main>
  );
}