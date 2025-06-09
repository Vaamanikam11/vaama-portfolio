/**
 * @copyright 2025 Vaama
 * @license Apache-2.0
 */

const experiences = [
  {
    role: "Software Developer",
    company: "iConsult Collaborative",
    period: "Jan 2025 – Jun 2025",
    stack: ["Backend", "Python", "APIs"],
    description: "Worked on web-based solutions and data integrations for the university’s consulting arm, focusing on scalable backend systems."
  },
  {
    role: "AI Developer",
    company: "CheckExplore Technologies",
    period: "Feb 2022 – July 2023",
    stack: ["AI", "OCR", "Computer Vision"],
    description: "Developed an AI-powered vehicle recognition system and optimized OCR models for the insurance sector."
  },
  {
    role: "AI/ML Intern",
    company: "Axisvation Solutions",
    period: "May 2021 – Dec 2021",
    stack: ["AI", "OCR", "Model Training"],
    description: "Built image-processing pipelines for identifying tire damages using custom-trained ML models."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section mt-1">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-8">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-zinc-800 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-sm text-zinc-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-sm text-zinc-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tag, i) => (
                  <span key={i} className="bg-zinc-700 text-sm px-2 py-1 rounded-md text-zinc-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Experience