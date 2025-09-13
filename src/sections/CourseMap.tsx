import { useState, useMemo } from "react";
import { courseHoles } from "../data/courses";

function CourseMap() {
  const [selectedHole, setSelectedHole] = useState<number | null>(null);

  // Generate stable random positions for holes (only once)
  const holePositions = useMemo(() => {
    return courseHoles.map((hole) => ({
      number: hole.number,
      top: Math.random() * 400 + 50, // Between 50px and 450px from top
      left: Math.random() * 700 + 50, // Between 50px and 750px from left
    }));
  }, []); // Empty dependency array means this only runs once

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-serif font-bold text-golfGreen">Interactive Course Map</h2>
      <p className="mt-2 text-gray-600">Hover over a hole to learn more.</p>

        <div className="relative mt-10 w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden">
          {/* Course map image */}
          <img src="https://imgs.search.brave.com/KNYoH8sK5oZhYj-0sECEtQkAwblCs1CZJlNZt5Cs_AI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzA4LzU0Lzgz/LzM2MF9GXzE1MDg1/NDgzMjhfaUtocG1N/Yms2SEx1UzZhbFdm/Yk1rejhQYUVCODI0/SGouanBn" alt="Course Map" className="w-full h-full object-cover" />

        {/* Interactive hole markers distributed across the course */}
        {holePositions.map((position) => (
          <button
            key={position.number}
            className="absolute w-8 h-8 rounded-full bg-golfGold opacity-90 hover:opacity-100 border-2 border-white shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center text-white font-bold text-sm"
            style={{ 
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            onMouseEnter={() => setSelectedHole(position.number)}
            onMouseLeave={() => setSelectedHole(null)}
            title={`Hole ${position.number}`}
          >
            {position.number}
          </button>
        ))}
      </div>

      {/* Hole Info Card */}
      {selectedHole && (
        <div className="mt-6 bg-white shadow-lg p-6 rounded-xl max-w-md mx-auto">
          <h3 className="text-xl font-bold text-golfGold">Hole {selectedHole}</h3>
          <p className="text-gray-700">
            {courseHoles.find((h) => h.number === selectedHole)?.description}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Par {courseHoles.find((h) => h.number === selectedHole)?.par} – 
            {courseHoles.find((h) => h.number === selectedHole)?.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default CourseMap;
