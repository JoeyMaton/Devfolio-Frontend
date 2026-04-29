export function ProjectsSection() {
  const projects = [
    {
      title: "Booki",
      description: "Booki est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. À partir d’une maquette fournie, j’ai assuré l’intégration complète de la page d’accueil d’une agence de voyage fictive, en respectant les standards du web, la fiche technique et en utilisant les technologies HTML et CSS. Fonctionnalité visée : Le responsive",
      image: "./components/assets/booki.png",
      technologies: ["Html", "Css"],
      liveUrl: "booki.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/Booki"
    },
    {
      title: "OhMyFood",
      description: "OhMyFood est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. Sur la base d’une maquette fournie, j’ai pris en charge l’intégration de la version mobile d’un site de foodtech, en y intégrant des animations CSS pour enrichir l’expérience utilisateur. Fonctionnalité visée : Dynamiser un site web avec des animations",
      image: "./components/assets/ohmyfood.png",
      technologies: ["Html", "Css"],
      liveUrl: "ohmyfood.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/JoeyMaton.github.io"
    },
    {
      title: "GameOn",
      description: "GameOn est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. Sur la base d’une maquette et d’un site de référence fournis, j’ai réalisé l’intégration d’une landing page en HTML, CSS et JavaScript, dédiée à l’inscription à un concours national de jeux vidéo. Fonctionnalité visée : Création d'une landing page.",
      image: "./components/assets/gameon.png",
      technologies: ["Html", "Css","JavaScript"],
      liveUrl: "gameon.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/GameOn"
    },
    {
      title: "FishEye",
      description: "FishEye est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. En m’appuyant sur une maquette fournie, j’ai développé un site web pour une plateforme dédiée aux photographes, conçu pour leur permettre de présenter et partager leurs galeries de photos. Fonctionnalité visée : Gestion de la modal",
      image: "./components/assets/fisheye.png",
      technologies: ["Html", "Css","JavaScript"],
      liveUrl: "fisheye.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/FishEye"
    },
    {
      title: "Les Petits Plats",
      description: "Les Petits Plats est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. En me basant sur une maquette fournie, j’ai développé une page web pour un site de recettes de cuisine, en veillant au respect du design et à la qualité de l’intégration. Fonctionnalité visée : Développement d'un algorithme de recherche",
      image: "./components/assets/lespetitsplats.png",
      technologies: ["Html", "Css","JavaScript"],
      liveUrl: "lespetitsplats.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/LesPetitsPlats"
    },
    {
      title: "Billed",
      description: "Billed est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. Dans le cadre de ce projet, j’ai débogué et amélioré une application existante en JavaScript et Jest, en intégrant des API pour assurer des échanges efficaces avec l’application. Fonctionnalité visée : Débogger une application et création de tests unitaires",
      image: "./components/assets/Billed.png",
      technologies: ["Html", "Css","JavaScript","Jest"],
      liveUrl: "billed.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/Billed"
    },
    {
      title: "Devfolio",
      description: "Devfolio est un projet réalisé dans le cadre de mon apprentissage personnel. L’objectif est de présenter l’ensemble de mes projets réalisés à ce jour, ainsi que les technologies que je maîtrise.  Fonctionnalité visée : Création d'une application React ",
      image: "./components/assets/portefolio.png",
      technologies: ["React"],
      liveUrl: "devfolio.joey-maton.dev",
      githubUrl: "https://github.com/JoeyMaton/Devfolio-Frontend"
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Mes Projets</h2>
          <p>
            Voici une sélection de mes projets récents qui démontrent mes compétences et ma passion pour le développement web
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square icon" width="16" height="16" viewBox="0 0 24 24" fill="none"></i>
                    Voir le site
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640" className="icon-github">
                    <path fill="#000000" d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640" className="icon-github">
            <path fill="#000000" d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
            </svg>
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}