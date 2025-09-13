import { courseHoles } from "../data/courses";

function Scorecards() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-serif font-bold text-golfGreen">Course Scorecard</h2>
      <p className="mt-2 text-gray-600">Detailed overview of each hole.</p>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-golfGreen text-white">
            <tr>
              <th className="p-2">Hole</th>
              {courseHoles.map((h) => (
                <th key={h.number} className="p-2">{h.number}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 font-bold">Par</td>
              {courseHoles.map((h) => (
                <td key={h.number} className="p-2">{h.par}</td>
              ))}
            </tr>
            <tr className="border">
              <td className="p-2 font-bold">Length</td>
              {courseHoles.map((h) => (
                <td key={h.number} className="p-2">{h.length}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <a
        href="/omu-aran-scorecard.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-golfGold text-white font-semibold rounded-lg shadow hover:bg-golfGreen transition"
      >
        Download Full Guide
      </a>
    </section>
  );
}

export default Scorecards;
