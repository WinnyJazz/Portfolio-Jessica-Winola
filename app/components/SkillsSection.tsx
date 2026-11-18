const skillCategories = [
  {
    title: "Programming Languages",
    icons: [
      { name: "HTML", image: "/Skills/html.png" },
      { name: "CSS", image: "/Skills/css.png" },
      { name: "JavaScript", image: "/Skills/js.png" },
      { name: "TypeScript", image: "/Skills/ts.png" },
      { name: "Java", image: "/Skills/java.png" },
      { name: "Python", image: "/Skills/python.png" },
      { name: "C++", image: "/Skills/c++.png" },
      { name: "PHP", image: "/Skills/php.png" },
    ],
  },
  {
    title: "Databases",
    icons: [
      { name: "PostgreSQL", image: "/Skills/postgresql.png" },
      { name: "MySQL", image: "/Skills/mysql.png" },
      { name: "Mongodb", image: "/Skills/mongodb.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icons: [
      { name: "Express.js", image: "/Skills/expressjs.png" },
      { name: "Node.js", image: "/Skills/nodejs.png" },
      { name: "Laravel", image: "/Skills/laravel.png" },
      { name: "React", image: "/Skills/react.png" },
      { name: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { name: "Bootstrap", image: "/Skills/bootstrap.png" },
      { name: "Next.js", image: "/Skills/nextjs.png" },
      { name: "Flutter", image: "/Skills/flutter.png" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title" id="skills">
          Skills
        </h2>

        <p className="skills-desc">
          Technologies and tools I use to build applications,
          develop solutions, and explore new ideas.
        </p>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div className="skills-category" key={category.title}>
              <h3 className="skills-category-title">
                {category.title}
              </h3>

              <div className="skills-icons">
                {category.icons.map((icon) => (
                  <img
                    key={icon.name}
                    src={icon.image}
                    alt={icon.name}
                    title={icon.name}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
