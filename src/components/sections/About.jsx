import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const softwares = [
    "Adobe Photoshop",
    "Blender",
    "Substance Painter",
    "Z Brush",
    "Clip Studio",
  ];

  const experiences = ["Freelancing", "Dashtoon", "Arena Animation"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate artist with expertise in 3D and 2D arts. I'm freelancing since 2018.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Softwares </h3>
                <div className="flex flex-wrap gap-2">
                  {softwares.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Experiences</h3>
                <div className="flex flex-wrap gap-2">
                  {experiences.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B. Voc, 3D, Animation and VFX </strong> - Arena Animation
                  (2019-2022)
                </li>
                <li>
                  Relevant Coursework: ZBrush, Substance Painter, Blender, Autodesk 3ds Max,
                  Adobe Photoshop...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Post production artist at Dashtoon (2024 - 2025){" "}
                  </h4>
                  <p>
                    Worked on Comic paneling and design. Conducting hygience checks and performing image corrections
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelancing since 2018{" "}
                  </h4>
                  <p>
                    Worked on Character Designs, Art Media, Digital art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};