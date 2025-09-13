import { memberships } from "../data/membership";

function MembershipPlans() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-golfGreen">Membership Options</h2>
        <p className="mt-2 text-gray-600">Choose the plan that best fits you.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((plan) => (
            <div
              key={plan.tier}
              className="bg-white rounded-xl shadow-lg p-8 border hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-golfGold">{plan.tier}</h3>
              <p className="mt-2 text-2xl font-semibold">{plan.price}</p>

              <ul className="mt-4 space-y-2 text-gray-700 text-left">
                {plan.benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-golfGreen font-bold mr-2">✔</span>
                    {b}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-3 bg-golfGreen text-white font-semibold rounded-lg hover:bg-golfGold transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
