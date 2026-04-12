import { useState } from "react";

export function ContactSection() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleDetailsChange = (event) => {
      const { name, value } = event.target;
  
      setDetails((prevDetails) => {
        return {
          ...prevDetails,
          [name]: value,
        };
      });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api-devfolio.joey-maton.dev/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (response.ok) {
      alert("Message envoyé !");
      
      setDetails({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      alert("Erreur lors de l'envoi");
    }
  } catch (error) {
    console.error(error);
    alert("Erreur serveur");
  }
};



  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "joey.maton@live.fr",
      href: "mailto:joey.maton@live.fr"
    },
    {
      icon: "Phone",
      title: "Téléphone",
      value: "+33 7 71 58 27 59",
      href: "tel:+33771582759"
    },
    {
      icon: "MapPin",
      title: "Localisation",
      value: "Vitry-Le-François, France",
      href: "#"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case "Mail":
        return (
          <i className="fa-regular fa-envelope"></i>
        );
      case "Phone":
        return (
          <i className="fa-solid fa-phone"></i>
        );
      case "MapPin":
        return (
          <i className="fa-solid fa-location-dot"></i>
        );
      default:
        return null;
    }
  };


  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Me Contacter</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>
            N'hésitez pas à me contacter pour discuter !
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Informations de contact</h3>
            
            <div className="contact-items">
              {contactInfo.map((item) => (
                <div key={item.title} className="contact-item">
                  <div className="contact-icon-wrapper">
                    <div className="contact-icon">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-card">
              <h4>Disponibilité</h4>
              <p>
                Je suis actuellement ouvert aux nouvelles opportunités. 
                Temps de réponse habituel : 24-48h.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3>Envoyez-moi un message</h3>
            </div>
            <div className="contact-form-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nom complet</label>
                    <input
                      id="name"
                      name="name"
                      value={details.name}
                      onChange={handleDetailsChange}
                      required
                      className="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={details.email}
                      onChange={handleDetailsChange}
                      required
                      className="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input
                    id="subject"
                    name="subject"
                    value={details.subject}
                    onChange={handleDetailsChange}
                    required
                    className="form-input"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={details.message}
                    onChange={handleDetailsChange}
                    required
                    className="form-textarea"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button type="submit" disabled={!details.name || !details.email || !details.subject || !details.message} className="btn btn-primary btn-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                  </svg>
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

