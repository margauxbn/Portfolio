import React, { useState } from 'react';
import "./projectContainer.css";

const ProjectContainer: React.FC = () => {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(null);

  const projects = [
    { 
      text: 'SOPHIE BLUEL',
      icon: 'fa-solid fa-house',
      description: 'Un site dédié à une architecte, conçu pour présenter et organiser par catégorie les photographies de ses réalisations professionnelles.',
      additionalInfo: [
        "Site partiellement créé avec HTML & CSS",
        "Requêtes API via des appels HTTP",
        "Site dynamique avec JavaScript",
      ]
    },
    { 
      text: 'KASA',
      icon: 'fa-solid fa-suitcase',
      description: "Un site dédié à la location d'appartements entre particuliers, spécialement conçu pour les logements situés en Île-de-France.",
      additionalInfo: [
        "Site créé avec React & SASS",
        "Utilisation de TypeScript",
        "Utilisation des props avec une database JSON",
      ]
    },
    { 
      text: 'NINA CARDUCCI',
      icon: 'fa-solid fa-camera-retro',
      description: "Amélioration du site d'une photographe, avec une optimisation du code et de la structure pour une meilleure performance, accompagnée d'une stratégie pour accroître sa visibilité et son référencement.",
      additionalInfo: [
        "Utilisation de LightHouse",
        "Utilisation de Wave",
        "Modification du format et du poids des images",
        "Fichiers minifiés",
        "Ajout de balises sémantiques ordonnées",
        "Référencement local avec schema.org",
        "Référencement grâce aux réseaux sociaux avec OpenGraph & TwitterCard",
      ]
    },
  ];

  const handleButtonClick = (index: number) => {
    if (openProjectIndex === index) {
      setOpenProjectIndex(null);
    } else {
      setOpenProjectIndex(index);
    }
  };

  const handleButtonHover = (index: number) => {
    setHoveredButtonIndex(index);
  };

  const handleButtonLeave = () => {
    setHoveredButtonIndex(null);
  };

  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <div key={index} className='project-wrapper'>
          <div
            className={`project-array ${hoveredButtonIndex === index ? 'hovered' : ''} ${openProjectIndex === index ? 'open' : ''}`}
          >
            {openProjectIndex !== index ? (
              <>
                <span>{project.text}</span>
                <i className={project.icon}></i>
              </>
            ) : (
              <div className="project-description-container">
                <p className="project-description">{project.description}</p>
                <hr className="custom-line" />
                <ul>
                  {project.additionalInfo.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            className="project-button"
            onClick={() => handleButtonClick(index)} 
            onMouseEnter={() => handleButtonHover(index)} 
            onMouseLeave={handleButtonLeave} 
          >
            {openProjectIndex === index ? 'Fermer' : 'Ouvrir'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
