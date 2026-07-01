"use client";

import Link from "next/link";
import { useState } from "react";

export default function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState(18);
  const [type, setType] = useState("exclusive");
  const [result, setResult] = useState(null);

  const calculateGST = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      setResult(null);
      return;
    }

    let baseAmount = 0;
    let gstAmount = 0;
    let totalAmount = 0;

    if (type === "exclusive") {
      baseAmount = value;
      gstAmount = (value * gst) / 100;
      totalAmount = value + gstAmount;
    } else {
      totalAmount = value;
      baseAmount = value / (1 + gst / 100);
      gstAmount = value - baseAmount;
    }

    setResult({
      base: baseAmount.toFixed(2),
      gst: gstAmount.toFixed(2),
      total: totalAmount.toFixed(2),
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-400 transition hover:text-yellow-400"
          >
            ← Back to Tools
          </Link>

          <div className="mt-10 max-w-4xl">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
              Financial Tool
            </span>

            <h1 className="mt-8 text-5xl font-black md:text-7xl">
              GST
              <span className="block text-yellow-400">
                Calculator
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              Instantly calculate GST for both Inclusive and Exclusive
              pricing with accurate results. Perfect for businesses,
              freelancers and professionals.
            </p>

          </div>

        </div>

      </section>

      {/* Calculator */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">

          <h2 className="text-3xl font-bold">
            Calculate GST
          </h2>

          <p className="mt-3 text-gray-400">
            Enter amount, choose GST percentage and calculation type.
          </p>
                    <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* Amount */}

            <div>

              <label className="mb-3 block text-sm font-medium text-gray-300">
                Amount (₹)
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-all focus:border-yellow-500"
              />

            </div>

            {/* GST */}

            <div>

              <label className="mb-3 block text-sm font-medium text-gray-300">
                GST Rate
              </label>

              <select
                value={gst}
                onChange={(e) => setGst(Number(e.target.value))}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-all focus:border-yellow-500"
              >
                <option value={3}>3%</option>
                <option value={5}>5%</option>
                <option value={12}>12%</option>
                <option value={18}>18%</option>
                <option value={28}>28%</option>
              </select>

            </div>

          </div>

          {/* Calculation Type */}

          <div className="mt-10">

            <label className="mb-4 block text-sm font-medium text-gray-300">
              Calculation Type
            </label>

            <div className="grid gap-5 md:grid-cols-2">

              <button
                onClick={() => setType("exclusive")}
                className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                  type === "exclusive"
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-white/10 hover:border-yellow-500/40"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  Exclusive GST
                </h3>

                <p className="mt-2 text-gray-400">
                  GST will be added to the entered amount.
                </p>

              </button>

              <button
                onClick={() => setType("inclusive")}
                className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                  type === "inclusive"
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-white/10 hover:border-yellow-500/40"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  Inclusive GST
                </h3>

                <p className="mt-2 text-gray-400">
                  GST will be extracted from the entered amount.
                </p>

              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={calculateGST}
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              Calculate GST
            </button>

            <button
              onClick={() => {
                setAmount("");
                setGst(18);
                setType("exclusive");
                setResult(null);
              }}
              className="rounded-full border border-white/10 px-8 py-4 font-semibold transition-all duration-300 hover:border-red-500 hover:text-red-400"
            >
              Reset
            </button>

          </div>
                    {/* Result */}

          {result && (

            <div className="mt-12">

              <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.02] to-transparent p-8">

                <h3 className="text-3xl font-bold text-yellow-400">
                  GST Calculation Result
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-3">

                  {/* Base */}

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

                    <p className="text-sm text-gray-400">
                      Base Amount
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">
                      ₹ {result.base}
                    </h4>

                  </div>

                  {/* GST */}

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

                    <p className="text-sm text-gray-400">
                      GST Amount
                    </p>

                    <h4 className="mt-3 text-3xl font-bold text-yellow-400">
                      ₹ {result.gst}
                    </h4>

                    <p className="mt-3 text-sm text-gray-500">
                      CGST : ₹ {(result.gst / 2).toFixed(2)}
                    </p>

                    <p className="text-sm text-gray-500">
                      SGST : ₹ {(result.gst / 2).toFixed(2)}
                    </p>

                  </div>

                  {/* Total */}

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

                    <p className="text-sm text-gray-400">
                      Total Amount
                    </p>

                    <h4 className="mt-3 text-3xl font-bold text-green-400">
                      ₹ {result.total}
                    </h4>

                  </div>

                </div>

                {/* Formula */}

                <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">

                  <h4 className="text-xl font-semibold">
                    Formula Used
                  </h4>

                  <p className="mt-4 text-gray-400">

                    {type === "exclusive"
                      ? "GST Amount = Amount × GST% ÷ 100"
                      : "Base Amount = Total ÷ (1 + GST%)"}

                  </p>

                </div>

                {/* CTA */}

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
                  >
                    Book GST Consultation
                  </Link>

                  <Link
                    href="/tools"
                    className="rounded-full border border-white/10 px-8 py-4 font-semibold transition-all duration-300 hover:border-yellow-500 hover:text-yellow-400"
                  >
                    Explore More Tools
                  </Link>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}