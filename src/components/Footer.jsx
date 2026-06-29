export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#080808]">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}

        <div>

          <h2 className="text-2xl font-bold">
            GROW MORE
            <span className="text-yellow-500"> ADVISORY</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">

            Professional Tax, GST,
            Accounting & Business
            Advisory Services
            across India.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="font-semibold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="font-semibold text-lg mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>GST Filing</li>
            <li>Income Tax</li>
            <li>ROC Compliance</li>
            <li>Accounting</li>
            <li>Startup Advisory</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-semibold text-lg mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            📞 +91 74528 78887
          </p>

          <p className="text-gray-400 mt-3">
            📧 contact@growmoreadvisory.com
          </p>

          <a
            href="https://wa.me/917452878887"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">

        © {new Date().getFullYear()} Grow More Advisory.
        All Rights Reserved.

      </div>

    </footer>
  );
}