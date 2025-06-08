/**
 * @copyright 2025 Vaama
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
  title: 'Local AI Restaurant Review Chatbot',
  tags: ['LangChain', 'Python', 'RAG', 'Ollama', 'ChromaDB'],
  projectLink: 'https://github.com/Vaamanikam11/local-ai-agent-rag',
  },
  {
    title: 'Airline Status Prediction',
    tags: ['ML', 'Logistic Regression', 'APIs'],
    projectLink: 'https://github.com/Vaamanikam11'
  },
  {
    title: 'AI-Powered Mental Health App',
    tags: ['GenAI', 'Sentiment Analysis', 'SVM'],
    projectLink: 'https://github.com/Vaamanikam11'
  },
  {
    title: 'Real-Time Traffic Analysis',
    tags: ['Backend', 'Python', 'APIs'],
    projectLink: 'https://github.com/Vaamanikam11'
  },
  {
  title: "Emotion Recognition System",
  tags: ["Python", "OpenCV", "CNN", "Keras"],
  projectLink: 'https://github.com/Vaamanikam11'
  },
  {
  title: "COVID Vaccine Analysis",
  tags: ["Python", "Pandas", "Seaborn", "Plotly"],
  projectLink: "https://github.com/Vaamanikam11/Covid_Vaccine_Analysis"
}
];

const Projects = () => {
  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="headline-2 mt-16 mb-8 reveal-up">My project highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
