const skillCategories = [
  {
    title: "Languages",
    icons: "html,css,js,ts,java,python,cpp",
  },
  {
    title: "Frameworks & Libraries",
    icons: "react,nextjs,nodejs,tailwind",
  },
  {
    title: "Database",
    icons: "mongodb,mysql",
  },
  {
    title: "Tools",
    icons: "git,github,vscode,figma,vercel,notion",
  },
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>

        <p className="skills-desc">
          These are some of the technologies and tools I&apos;m passionate
          about mastering and using to build creative digital experiences.
        </p>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div className="skills-category" key={category.title}>
              <h3 className="skills-category-title">
                {category.title}
              </h3>

              <div className="skills-icons">
                <img
                  src={`https://skillicons.dev/icons?i=${category.icons}`}
                  alt={`${category.title} icons`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}