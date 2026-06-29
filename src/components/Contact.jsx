"use client";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Hello Grow More Advisory

Name : ${name}

Email : ${email}

Message :
${message}`;

    window.open(
      `https://wa.me/917452878887?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (

<section className="px-8 md:px-10 py-24 border-t border-gray-800">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

{/* LEFT */}

<div>

<h2 className="text-4xl font-bold">
Let's Grow Together.
</h2>

<p className="text-gray-400 mt-5 leading-8">

Need GST Filing, Income Tax Return,
Business Registration or Accounting Support?

Our experts are ready to help.

</p>

<div className="mt-10 space-y-6">

<div>
<h3 className="font-semibold text-yellow-500">
📞 Phone
</h3>

<p className="text-gray-400">
+91 74528 78887
</p>

</div>

<div>

<h3 className="font-semibold text-yellow-500">
📧 Email
</h3>

<p className="text-gray-400">
contact@growmoreadvisory.com
</p>

</div>

<div>

<h3 className="font-semibold text-yellow-500">
📍 Office
</h3>

<p className="text-gray-400">
India
</p>

</div>

</div>

</div>

{/* RIGHT */}

<form
onSubmit={handleSubmit}
className="bg-[#111] border border-gray-800 rounded-2xl p-8 space-y-5"
>

<input
name="name"
placeholder="Full Name"
className="w-full p-4 rounded-lg bg-black border border-gray-700"
/>

<input
name="email"
placeholder="Email Address"
className="w-full p-4 rounded-lg bg-black border border-gray-700"
/>

<textarea
name="message"
rows="5"
placeholder="How can we help you?"
className="w-full p-4 rounded-lg bg-black border border-gray-700"
/>

<button
className="w-full py-4 bg-yellow-500 rounded-lg text-black font-semibold hover:scale-105 transition"
>

Send on WhatsApp

</button>

</form>

</div>

</section>

  );

}