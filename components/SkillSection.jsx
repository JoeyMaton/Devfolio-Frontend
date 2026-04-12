export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 70 },
        { name: "HTLM", level: 95 },
        { name: "CSS", level: 95 },
        { name: "Tailwind CSS", level: 20 },
        
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Github", level: 75 },
        { name: "VsCode", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Trello", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>Compétences</h2>
          <p>
            Technologies et outils que je maîtrise pour créer des applications web performantes
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <div className="skill-header">
                <h3>{category.title}</h3>
              </div>
              <div className="skill-content">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}