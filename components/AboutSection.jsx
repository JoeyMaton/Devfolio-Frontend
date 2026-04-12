export function AboutSection() {
  const highlights = [
    {
      icon: "Code",
      title: "Code Propre",
      description: "J'écris du code maintenable et bien documenté"
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Peu d'expérience en équipe et méthodologies modernes"
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "Optimisation et bonnes pratiques pour des apps rapides"
    },
    {
      icon: "Award",
      title: "Qualité",
      description: "Tests automatisés et déploiement continu"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case "Code":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16,18 22,12 16,6"></polyline>
            <polyline points="8,6 2,12 8,18"></polyline>
          </svg>
        );
      case "Users":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case "Zap":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
          </svg>
        );
      case "Award":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
          </svg>
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
                Diplômé en informatique, je me spécialise dans le développement front-end, en créant des sites web modernes et dynamiques à partir de maquettes.
                 J’utilise HTML, CSS, JavaScript et React pour transformer des designs en expériences interactives, alliant esthétique et performance.
              </p>
              <p>
                Quand je ne code pas, j’aime explorer de nouvelles technologies,
                améliorer mes compétences en front-end et suivre les tendances du web pour rester à la pointe.
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