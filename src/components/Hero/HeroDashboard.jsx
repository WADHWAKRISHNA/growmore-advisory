"use client";

import { motion } from "framer-motion";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="hidden lg:block"
    >

      <div className="rounded-[34px] border border-yellow-500/20 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[3px] text-yellow-500">

              Live Business Insights

            </p>

            <h2 className="mt-2 text-3xl font-black text-white">

              Advisory Dashboard

            </h2>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-green-400">

              Online

            </span>

          </div>

        </div>

        {/* Compliance Score */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-400">

                Compliance Health

              </p>

              <h3 className="mt-1 text-4xl font-black text-yellow-500">

                100%

              </h3>

            </div>

            <div className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">

              Excellent

            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8 }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300"
            />

          </div>

        </div>

        {/* Services */}

        <div className="mt-8 space-y-4">

          {[
            ["GST Registration", "Completed"],
            ["Income Tax Compliance", "Active"],
            ["ROC Filings", "Updated"],
            ["Accounting", "Managed"],
            ["Business Advisory", "Available"],
          ].map(([title, status]) => (

            <motion.div
              key={title}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >

              <span className="text-gray-300">

                {title}

              </span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">

                {status}

              </span>

            </motion.div>

          ))}

        </div>

        {/* Bottom */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">

            <h3 className="text-3xl font-black text-yellow-500">

              150+

            </h3>

            <p className="mt-2 text-xs text-gray-400">

              Clients

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">

            <h3 className="text-3xl font-black text-yellow-500">

              99%

            </h3>

            <p className="mt-2 text-xs text-gray-400">

              Satisfaction

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">

            <h3 className="text-3xl font-black text-yellow-500">

              AI

            </h3>

            <p className="mt-2 text-xs text-gray-400">

              Assisted

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}