"use client";

export default function ConsultationModal({ open, onClose }) {

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;

    const text = `Hello Grow More Advisory

Name : ${name}

Phone : ${phone}

Service : ${service}

I want to book a free consultation.`;

    window.open(
      `https://wa.me/917452878887?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]">

      <div className="bg-[#111] border border-gray-700 rounded-2xl p-8 w-[95%] max-w-lg">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Book Free Consultation
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          />

          <select
            name="service"
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          >
            <option>GST Filing</option>
            <option>Income Tax</option>
            <option>ROC Compliance</option>
            <option>Accounting</option>
            <option>Startup Advisory</option>
          </select>

         <button
           type="submit"
           className="w-full py-4 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
           >
           Book Consultation
         </button>

        </form>

      </div>

    </div>
  );
}