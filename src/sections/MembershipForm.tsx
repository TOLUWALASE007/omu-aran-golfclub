function MembershipForm() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-golfGreen">Apply for Membership</h2>
        <p className="mt-2 text-gray-600">Fill in your details and our team will reach out.</p>

        <form className="mt-8 bg-white p-8 rounded-xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen"
          />
          <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen">
            <option>Select Membership Tier</option>
            <option>Individual</option>
            <option>Family</option>
            <option>Corporate</option>
          </select>
          <textarea
            placeholder="Message (optional)"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen"
          ></textarea>
          <button className="w-full py-3 bg-golfGold text-white font-semibold rounded-lg hover:bg-golfGreen transition">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

export default MembershipForm;
