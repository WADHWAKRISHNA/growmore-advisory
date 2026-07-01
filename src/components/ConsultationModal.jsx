"use client";

export default function ConsultationModal({ open, onClose }) {

  if (!open) return null;

  const handleSubmit = (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const message = e.target.message.value;

    const text = `Hello Grow More Advisory 👋

Name : ${name}

Phone : ${phone}

Email : ${email}

Service : ${service}

Requirement :
${message || "Not Provided"}

I would like to book a consultation.
Please contact me.`;

    window.open(
      `https://wa.me/917452878887?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    onClose();

  };

  return (

    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 shadow-2xl"
      >

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black text-white">

              Book Consultation

            </h2>

            <p className="mt-2 text-gray-400">

              Fill in your details and we'll connect with you shortly.

            </p>

          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl text-gray-400 transition hover:bg-red-500 hover:text-white"
          >

            ✕

          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
                    <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
          />

          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit Mobile Number"
            className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
          />

          <select
            name="service"
            required
            className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
          >

            <option value="">Select Service</option>

            <option>GST Registration & Filing</option>

            <option>Income Tax</option>

            <option>ROC Compliance</option>

            <option>Accounting & Bookkeeping</option>

            <option>Startup Advisory</option>

            <option>Business Registration</option>

            <option>Financial Consulting</option>

            <option>Auditing & Assurance</option>

            <option>Others</option>

          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us briefly about your requirement (Optional)"
            className="w-full resize-none rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
          />
                    <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.35)] active:scale-95"
          >

            Book Free Consultation

          </button>

          <p className="text-center text-sm leading-6 text-gray-500">

            By submitting this form, you agree to be contacted by
            Grow More Advisory via phone, email or WhatsApp regarding
            your enquiry.

          </p>

        </form>

      </div>

    </div>

  );
}
