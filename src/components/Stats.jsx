export default function Stats() {
  return (
    <section className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold text-yellow-500">150+</h2>
          <p className="text-gray-400 mt-2">Happy Clients</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-500">500+</h2>
          <p className="text-gray-400 mt-2">Returns Filed</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-500">99%</h2>
          <p className="text-gray-400 mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-500">24×7</h2>
          <p className="text-gray-400 mt-2">Support</p>
        </div>

      </div>
    </section>
  );
}