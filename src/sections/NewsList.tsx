function NewsList() {
  // Example static articles (later you can fetch from an API or CMS)
  const news = [
    {
      title: "Club Hosts Annual Championship",
      date: "August 15, 2025",
      excerpt: "The annual championship saw over 200 players competing for the prestigious title. The tournament featured some of the best golfers from across Nigeria and neighboring countries.",
      image: "https://imgs.search.brave.com/pcwPtiHSdv4ysqbYmUGkCyWoPcqXzrwAWI0R9V7ip54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDQ4MjM0MC9waG90/by9zaWx2aXMtaWxs/aW5vaXMtcGdhLXRv/dXItY29tbWlzc2lv/bmVyLWpheS1tb25h/aGFuLXNwZWFrcy10/by10aGUtbWVkaWEt/ZHVyaW5nLWEtcHJl/c3MuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJqR3FfSWVt/MkpIVzdoOHgzTnM3/WXpQemJNUHoxaFIx/aHFldTlsTlZrcFk9",
    },
    {
      title: "Junior Golf Program Launches",
      date: "July 10, 2025",
      excerpt: "We are excited to launch our junior golf development initiative, designed to nurture the next generation of golf champions. The program includes coaching, equipment, and mentorship.",
      image: "https://imgs.search.brave.com/O6AQvVl-2EqrA_8aVcdc2fEqV5FYgRe-BngyZex9tXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/OTUzNTY0My9waG90/by9maXJlbnplLWl0/YWx5LW1hdGhpZXUt/dmFuLWRlci1wb2Vs/LW9mLW5ldGhlcmxh/bmRzLWFuZC10ZWFt/LWFscGVjaW4tZGVj/ZXVuaW5jay1kdXJp/bmctdGhlLXRvcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d09WRmpzWHRRQXA1/TXFXZElUTXNLek9B/ckd3TnJRajFvVU5q/dGtOeXdyZz0",
    },
    {
      title: "New Clubhouse Opens",
      date: "June 1, 2025",
      excerpt: "Our newly renovated clubhouse is now open with modern facilities, including a state-of-the-art pro shop, elegant dining areas, and premium locker rooms for members.",
      image: "https://imgs.search.brave.com/p1qNyMrhnNAtC2KsQJZKETa0lW4asFScrPC9pCgaw38/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MTg3NTA3My9lcy9m/b3RvL29ha2xhbmQt/Y2EtYWxlbi1zbWFp/bGFnaWMtb2YtdGhl/LWdvbGRlbi1zdGF0/ZS13YXJyaW9ycy1z/cGVha3Mtd2l0aC10/aGUtbWVkaWEtZHVy/aW5nLWEtcHJlc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9WdlFlWWtJQ0hL/WWw0czJrRFN4RDVw/Uk5adnV6bXB6M3ZZ/bGVxcWRBck09",
    },
    {
      title: "Environmental Sustainability Initiative",
      date: "May 20, 2025",
      excerpt: "Omu-Aran Golf Club announces new environmental initiatives including water conservation, native plant restoration, and eco-friendly course maintenance practices.",
      image: "https://imgs.search.brave.com/U023nh9vQKsf2SVglclyeVqO5O1HEpcOsNxuBoSESyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAw/MzcyMjEyMi9waG90/by9wYWNpZmljLXBh/bGlzYWRlcy1jYWxp/Zm9ybmlhLXRpZ2Vy/LXdvb2RzLXRhbGtz/LXdpdGgtdGhlLW1l/ZGlhLWluLWEtcHJl/c3MtY29uZmVyZW5j/ZS1wcmlvci10by5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N0ZYUkU1OFlIdDl6/OV8xMkV2NFJtQTI4/d2VMU3Y4cDEwNHRs/eFlkSHpXaz0",
    },
    {
      title: "Professional Golf Academy Opens",
      date: "April 12, 2025",
      excerpt: "The club's new professional golf academy offers world-class instruction from certified PGA professionals, featuring advanced training facilities and personalized coaching programs.",
      image: "https://imgs.search.brave.com/5mZMIZYiQWoQ0O8mVzMK6mIvUUultzgK2wK-C6-1XUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg1/MjczNTY4L3Bob3Rv/L3Jpby1kZS1qYW5l/aXJvLWJyYXppbC1j/YW0tbWNldm95LW9m/LWF1c3RyYWxpYS1h/dHRlbmRzLWFuLWF1/c3RyYWxpYW4tb2x5/bXBpYy10ZWFtLXBy/ZXNzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz13anZnU3BS/Z3hiYUtrY1BwM014/YUhwY0k0M1MxOUJv/NDJkZ2JnQTN6UGNB/PQ",
    },
    {
      title: "Community Outreach Program",
      date: "March 8, 2025",
      excerpt: "Our community outreach program continues to grow, providing golf lessons and equipment to local schools and youth organizations, promoting the sport across the region.",
      image: "https://imgs.search.brave.com/w2FaIz7t40vW6OhANo-aW_7c9hmPbE-Q4Y7-rFjF6a4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Bw/V1JMN1dwTnpHZVFL/NHVBWmt2NlIuanBn",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Latest News
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Stay updated with the latest happenings at Omu-Aran Golf Club.
        </p>

        {/* Grid of articles */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden"
            >
              {/* Article image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              {/* Article content */}
              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-golfGold">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.excerpt}</p>

                {/* Read more link */}
                <a
                  href="#"
                  className="mt-4 inline-block text-golfGreen font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsList;
