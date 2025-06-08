/**
 * @copyright 2025 Vaama
 * @license Apache-2.0
 */


const aboutItems = [
  /** 
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  } */
];


const About = () => {
  return (
    <section 
      id="about"
      className="section"
    >

      <div className="container">
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 mb-0 reveal-up">
          <p className="text-zinc-300 mv-4 md:mb-4 md:text-xl md:max-w-[60ch]:">
            Hi, I'm Vaama, a recent MS in Computer Science graduate from Syracuse University, passionate about AI and Machine Learning. I enjoy building thoughtful, data driven solutions that make a real world impact, whether it’s through smart predictions, language understanding, or creative applications of AI. I'm always exploring new ways to blend curiosity, creativity, and code, and I’m excited to grow in this ever-evolving field. 
            <div className="mt-8 text-zinc-300 text-sm leading-relaxed">
              <br></br>
            <h2 className="text-xl font-semibold">Technical Skills</h2>
              <ul className="text-zinc-300 mv-4 md:text-lg list-disc list-inside space-y-1">
                <li><strong>Languages:</strong> Python, C/C++, JavaScript, PHP, HTML, CSS</li>
                <li><strong>Libraries & Frameworks:</strong> TensorFlow, PyTorch, React, Node.js, TypeScript, Express, OpenCV</li>
                <li><strong>AI/ML & GenAI:</strong> Machine Learning, Deep Learning, NLP, Generative AI, LLMs (LLaMA, GPT), LangChain, RAG, Computer Vision</li>
                <li><strong>Cloud & DevOps:</strong> AWS, Azure, GCP, Docker, Kubernetes, Cloud Infrastructure</li>
                <li><strong>Tools:</strong> Git, GitHub, VS Code, Tableau, Power BI, Excel</li>
                <li><strong>Databases:</strong> MySQL, NoSQL (HBase), ChromaDB, Big Data Management</li>
                <li><strong>Other:</strong> REST APIs, OOP, Data Structures & Algorithms, Debugging, File Systems</li>
                <li><strong>Operating Systems:</strong> Windows, macOS, UNIX</li>
              </ul>
          </div>
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number},key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

          </div>

        </div>
      </div>


    </section>
  )
}

export default About