function MembershipPerks() {
  const perks = [
    { title: "Exclusive Events", desc: "Private tournaments, social gatherings, and networking opportunities." },
    { title: "Top-Class Facilities", desc: "Enjoy premium lounges, locker rooms, and training facilities." },
    { title: "Discounts", desc: "Special pricing on pro shop gear, lessons, and dining." },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-serif font-bold text-golfGreen">Why Join Us?</h2>
      <p className="mt-2 text-gray-600">More than just golf — it's a lifestyle.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {perks.map((perk, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-golfGold">{perk.title}</h3>
            <p className="mt-2 text-gray-700">{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipPerks;
