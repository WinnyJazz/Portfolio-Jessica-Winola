"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Image as ImageIcon,
  Play,
  X,
  ZoomIn,
  FileText,
} from "lucide-react";

type ProjectLink = {
  label: string;
  href: string;
  description: string;
  icon: "github" | "demo" | "paper";
};

type Project = {
  title: string;
  category: string;
  description: ReactNode;
  contribution: string[];
  technologies: string[];
  images: string[];
  video?: string;
  github?: string;
  demo?: string;
  resources?: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "RespiraWatch",
    category: "WebGIS & HealthTech",
    description:
      "RespiraWatch is a hackathon WebGIS project designed to help communities and healthcare workers monitor reported respiratory and diarrheal symptoms. The platform brings together community symptom reports, mapped case clusters, air quality (AQI), and weather information to support early identification of areas that may need attention. Its planned experience includes accessible symptom reporting, an interactive map, and a monitoring dashboard for healthcare staff.",
    contribution: [
      "Developed responsive application interfaces and reusable UI components using Next.js and Tailwind CSS.",
      "Implemented page layouts, navigation, and consistent UI elements across various project features.",
      "Integrated frontend components with backend services developed by other team members.",
      "Collaborated with the team on feature integration, troubleshooting, and Git-based development workflows during the hackathon.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebGIS"],
    images: [
      "/projects/respirawatch2.png",
      "/projects/respirawatch1.png",
      "/projects/respirawatch3.png",
    ],
    github: "https://github.com/KamingLo/respira-watch",
    demo: "https://youtu.be/rO0GWKymWQk?si=ZCLEICVJ9i6NkgfJ",
  },
  {
    title: "Sistem Informasi DPM FTI UNTAR",
    category: "Full-Stack Web Development",
    description:
      "Sistem Informasi DPM FTI UNTAR is a centralized web platform developed to integrate student organization services at the Faculty of Information Technology, Universitas Tarumanagara. The platform provides student aspirations, Lost & Found, news and announcements, real-time notifications, and administrative management features. Developed as a Software Development capstone project, it was also exhibited at I/O Festival UNTAR as part of a showcase of student projects.",
    contribution: [
      "Designed user interfaces and developed responsive frontend components to deliver an intuitive and user-friendly experience.",
      "Contributed to backend implementation, including debugging, troubleshooting, and improving application functionality.",
      "Assisted in implementing authentication features, including email verification, resend verification, and forgot password functionality.",
      "Configured and deployed the backend application using Railway, supporting the integration between frontend and backend services.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    images: [
      "/projects/sisfordpm1.png",
      "/projects/sisfordpm2.png",
      "/projects/sisfordpm3.png",
      "/projects/sisfordpm4.png",
      "/projects/sisfordpm5.png",
    ],
    video: "/projects/video marketing.mp4",
    github: "https://github.com/WinnyJazz/UAS_SOFTDEV_KELOMPOK3",
    demo: "https://youtu.be/kaCH6rd-3R0",
  },
  {
    title: "Spoiler Detection",
    category: "NLP & Machine Learning",
    description: (
      <p>
        An NLP-based research project focused on detecting spoilers in
        Indonesian-language book reviews using Machine Learning and Deep
        Learning approaches. The study resulted in a{" "}
        <a
          href="https://ojs.nusamandiri.ac.id/index.php/inti/article/view/8587"
          target="_blank"
          rel="noopener noreferrer"
          className="project-paper-link"
          title="Read the published research paper"
        >
          research paper
        </a>{" "}
        titled "Deteksi Spoiler pada Ulasan Buku Berbahasa Indonesia
        Menggunakan Pendekatan Machine Learning dan Deep Learning". Using
        11,259 Goodreads reviews from 40 mystery and thriller book titles,
        the research compares six classification models: SVM, Random Forest,
        XGBoost, BiLSTM, IndoBERT, and XLM-R. The project also features an
        interactive web interface that allows users to submit review
        sentences, select a model, and view spoiler predictions with
        confidence scores, alongside an analysis dashboard presenting model
        performance comparisons through evaluation metrics and confusion
        matrices.
      </p>
    ),
    contribution: [
      "Contributed to research paper development, including research documentation, literature review, and experimental findings.",
      "Worked with Jupyter Notebooks to execute data analysis workflows and conduct model-related experiments.",
      "Analyzed and compared Machine Learning and Deep Learning model performance using evaluation metrics.",
      "Contributed to interpreting experimental results and documenting research findings.",
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "HTML",
      "CSS",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Selenium",
    ],
    images: [
      "/projects/spoiler1.png",
      "/projects/spoiler2.png",
      "/projects/spoiler3.png",
      "/projects/spoiler4.png",
    ],
    
  resources: [
    {
      label: "GitHub – Research Development",
      href: "https://github.com/HannahLarissaHalim/NLP-Kelompok3-Klasifikasi-Spoiler",
      description:
        "Explore the research repository, including Jupyter Notebook files and model development.",
      icon: "github",
    },
    {
      label: "Project Demo / UI",
      href: "https://huggingface.co/spaces/nanasmuda/spoiler-detector",
      description:
        "Explore the interactive Spoiler Detector application on Hugging Face Spaces.",
      icon: "demo",
    },
    {
      label: "Watch Demo",
      href: "https://drive.google.com/file/d/1X53Q-1orXXALZ-hRguVJ0rw8p7Proafb/view",
      description:
        "Watch the project presentation and demonstration video on Google Drive.",
      icon: "demo",
    },
  ],

  },
  {
    title: "Terminal Juice Website",
    category: "Full-Stack Web Application",
    description:
      "Terminal Juice is a university project developed as part of the Frontend Programming course in collaboration with Terminal Juice, a small business located in the canteen of Tarumanagara University Campus 1. The project involved designing and developing a website to support the business's digital presence and provide customers with a convenient way to explore its products.",
    contribution: [
      "Designed the website's User Interface to create an intuitive and user-friendly experience.",
      "Developed and integrated responsive frontend components based on the UI/UX design.",
      "Collaborated with team members responsible for backend development and database integration.",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "CSS"],
    images: [
      "/projects/terminaljuice3.png",
      "/projects/terminaljuice2.png",
      "/projects/terminaljuice1.png",
    ],
    github: "https://github.com/WinnyJazz/Terminal-Juice",
    demo: "https://youtu.be/oTJCmYlmvtE?si=TttqoeR5VJSvcHth",
  },
  {
    title: "HopOnJKT",
    category: "Mobile Application",
    description:
      "HopOnJKT is a mobile application project focused on digital train transportation in Jakarta and its surrounding areas. The application simulates an online train ticketing service that allows users to explore departure schedules, book tickets, manage their journeys, and access ticket information through a mobile application. The project aims to provide a convenient and user-friendly public transportation experience.",
    contribution: [
      "Designed the user interface and developed frontend components for various application pages.",
      "Implemented user account management and authentication-related features.",
      "Developed core application features related to digital transactions and ticket management.",
      "Contributed to code integration and resolved merge conflicts during the development process.",
    ],
    technologies: ["Flutter", "Dart", "C++"],
    images: [
      "/projects/hoponjkt1.png",
      "/projects/hoponjkt2.png",
      "/projects/hoponjkt3.png",
    ],
    github: "https://github.com/HannahLarissaHalim/HopOnJKT",
    demo: "https://youtu.be/pyuLY27eS6k?si=aocLWTHhAjSZWL7g",
  },
];

type Slide = {
  type: "image" | "video";
  src: string;
};

type SelectedImage = {
  src: string;
  alt: string;
};


function ProjectSlideshow({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (src: string, alt: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
    ...(project.video
      ? [{ type: "video" as const, src: project.video }]
      : []),
    ...project.images.map((src) => ({
      type: "image" as const,
      src,
    })),
  ];

  if (slides.length === 0) {
    return (
      <div className="project-slideshow project-slideshow-empty">
        <ImageIcon size={38} strokeWidth={1.4} aria-hidden="true" />
        <span>Project preview coming soon</span>
      </div>
    );
  }

  const currentSlide = slides[activeIndex] ?? slides[0];

  function changeSlide(direction: number) {
    setActiveIndex(
      (current) =>
        (current + direction + slides.length) % slides.length
    );
  }

  return (
    <div
      className="project-slideshow"
      aria-label={`${project.title} media slideshow`}
    >
      {currentSlide.type === "image" ? (
        <button
          type="button"
          className="project-image-trigger"
          onClick={() =>
            onImageClick(
              currentSlide.src,
              `${project.title} preview ${activeIndex + 1}`
            )
          }
          aria-label={`Enlarge ${project.title} image`}
        >
          <img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={`${project.title} preview ${activeIndex + 1}`}
            className="project-preview-image"
            loading="lazy"
          />

          <span className="project-zoom-indicator">
            <ZoomIn size={20} />
          </span>
        </button>
      ) : (
        <video
          key={currentSlide.src}
          src={currentSlide.src}
          controls
          preload="metadata"
          className="project-preview-video"
        >
          Your browser does not support video playback.
        </video>
      )}

      <span className="project-image-counter">
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </span>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="project-slide-button project-slide-prev"
            onClick={() => changeSlide(-1)}
            aria-label={`Previous ${project.title} slide`}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            className="project-slide-button project-slide-next"
            onClick={() => changeSlide(1)}
            aria-label={`Next ${project.title} slide`}
          >
            <ArrowRight size={18} />
          </button>

          <div className="project-slide-dots" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={`${slide.type}-${slide.src}`}
                type="button"
                className={`project-slide-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1} of ${slides.length}`}
                aria-current={
                  activeIndex === index ? "true" : undefined
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectResourceLink({ link }: { link: ProjectLink }) {
  const Icon =
    link.icon === "github"
      ? GitBranch
      : link.icon === "paper"
        ? FileText
        : Play;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link-github project-resource-link"
      data-tooltip={link.description}
      title={link.description}
    >
      <Icon size={17} />
      <span>{link.label}</span>
      <ExternalLink size={14} />
    </a>
  );
}

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] =
    useState<SelectedImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">WHAT I HAVE BUILT</span>

          <h2 className="projects-title">My Projects</h2>

          <p className="projects-description">
            A collection of projects that reflect my passion for software
            development, creative problem-solving, and building meaningful
            digital experiences.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-content">
                <div className="project-topline">
                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3 className="project-name">{project.title}</h3>

                <div className="project-description">
                  {typeof project.description === "string" ? (
                    <p>{project.description}</p>
                  ) : (
                    project.description
                  )}
                </div>

                <div className="project-detail-block">
                  <h4>My Contribution</h4>

                  <ul className="project-contribution-list">
                    {project.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-detail-block">
                  <h4>Tech Stack</h4>

                  <div className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <span className="project-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.github || project.demo || project.resources) && (
                  <div className="project-links">
                    {project.resources ? (
                      project.resources.map((link) => (
                        <ProjectResourceLink
                          key={link.label}
                          link={link}
                        />
                      ))
                    ) : (
                      <>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-github"
                          >
                            <GitBranch size={17} />
                            <span>GitHub Repository</span>
                            <ExternalLink size={14} />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-demo"
                          >
                            <Play size={16} />
                            <span>Watch Demo</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="project-media">
                <ProjectSlideshow
                  project={project}
                  onImageClick={(src, alt) =>
                    setSelectedImage({ src, alt })
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}

      {selectedImage && (
        <div
          className="project-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project image preview"
        >
          <button
            type="button"
            className="project-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="project-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          <span className="project-lightbox-hint">
            Press ESC or click outside to close
          </span>
        </div>
      )}
    </section>
  );
}
