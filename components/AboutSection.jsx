export function AboutSection() {
  const highlights = [
    {
      icon: "Apprentissage",
      title: "Apprentissage continu",
      description: "J’apprends régulièrement de nouvelles technologies et améliore mes compétences"
    },
    {
      icon: "Autonomie",
      title: "Autonomie",
      description: "Capable de travailler seul, de chercher et trouver des solutions efficacement"
    },
    {
      icon: "Curiosité",
      title: "Curiosité technique",
      description: "J’aime comprendre comment les choses fonctionnent et tester de nouvelles approches"
    },
    {
      icon: "Pratique",
      title: "Expérience pratique",
      description: "Projets personnels pour mettre en pratique et progresser concrètement"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case "Apprentissage":
        return (
          <i class="fa-solid fa-rocket"></i>
        );
      case "Autonomie":
        return (
          <i class="fa-solid fa-magnifying-glass"></i>
        );
      case "Curiosité":
        return (
          <i class="fa-regular fa-lightbulb"></i>
        );
      case "Pratique":
        return (
          <i class="fa-solid fa-screwdriver-wrench"></i>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>À propos de moi</h2>
          <p>
            Développeur passionné dans la création d'applications web modernes
          </p>
        </div>

        <div className="about-grid">
          {/* Image */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1675277714353-376f525d935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTgzNTM5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Portrait professionnel"
                className="about-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div>
              <p>
                Développeur front-end, je conçois des interfaces web modernes en mettant l’accent sur l’expérience utilisateur, 
                la performance et la clarté du code. J’aime transformer des idées ou des maquettes en applications concrètes, fluides et agréables à utiliser.
              </p>
              <p>
                Quand je ne code pas, j’aime explorer de nouvelles technologies afin
                d'apprendre ou améliorer mes compétences en front-end.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.title} className="highlight-card">
                  <div className="highlight-header">
                    <div className="highlight-icon">
                      {getIcon(item.icon)}
                    </div>
                    <div className="highlight-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}