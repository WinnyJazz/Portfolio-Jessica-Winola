export default function Home() {
  const skillCategories = [
    { title: "Languages", icons: "html,css,js,ts,java,python,cpp" },
    { title: "Frameworks & Libraries", icons: "react,nextjs,nodejs,tailwind" },
    { title: "Database", icons: "mongodb,mysql" },
    { title: "Tools", icons: "git,github,vscode,figma,vercel,notion" },
  ];

  const organizationExperiences = [
    {
      period: "September 2025 - Desember 2025",
      role: "Sekretaris Pelaksana Company Visit FTI - BEM FTI UNTAR",
      place: "Universitas Tarumanagara",
      points: [
        "Menyusun proposal kegiatan dan laporan pertanggungjawaban (LPJ) sebagai bagian dari administrasi dan dokumentasi acara.",
        "Mengoordinasikan jadwal rapat, mengirimkan pengingat kepada panitia, menyusun notulensi, serta berkoordinasi dengan pihak Blu by BCA untuk mendukung kelancaran persiapan kegiatan.",
        "Menjadi PIC Divisi Acara dengan mengoordinasikan anggota divisi serta memastikan rangkaian kegiatan terlaksana sesuai perencanaan.",
      ],
    },
    {
      period: "Februari 2026 - April 2026",
      role: "Wakil Koordinator Divisi Registrasi & Konsumsi FTI Competition - BEM FTI UNTAR",
      place: "Universitas Tarumanagara",
      points: [
        "Berkolaborasi dengan Koordinator Divisi dalam membagi tugas, memantau progres anggota, serta memastikan seluruh tanggung jawab divisi terlaksana sesuai rencana.",
        "Mengelola data registrasi peserta dan menyusun daftar hadir guna mendukung proses registrasi yang terorganisir.",
        "Berkoordinasi dengan vendor konsumsi untuk memenuhi kebutuhan acara sesuai dengan anggaran dan kebutuhan kegiatan.",
      ],
    },
    {
      period: "Maret 2026 - Juni 2026",
      role: "Sekretaris Pelaksana Studi Banding FTI - BEM FTI UNTAR",
      place: "Universitas Tarumanagara",
      points: [
        "Menyusun proposal kegiatan, dokumen administrasi, dan laporan pertanggungjawaban (LPJ) sebagai bagian dari administrasi acara.",
        "Mengoordinasikan jadwal rapat, menyusun notulensi, serta turut berkoordinasi dengan pihak Universitas Singaperbangsa Karawang (UNSIKA) untuk mendukung persiapan dan pelaksanaan studi banding.",
        "Menjadi PIC Divisi Publikasi & Dokumentasi dengan mengoordinasikan pembagian tugas, memantau progres anggota, serta memastikan kebutuhan publikasi dan dokumentasi acara terpenuhi.",
      ],
    },
  ];

  const workExperiences = [
    {
      period: "July 2025 - Januari 2026",
      role: "Intern Graphic Designer",
      place: "Globy",
      points: [
        "Mendesain konten edukatif untuk media sosial, seperti poster, carousel, dan cover Reels untuk meningkatkan penyampaian informasi secara visual.",
        "Dipercaya menangani berbagai kebutuhan desain tambahan, termasuk wallpaper, pamflet, baliho, dan tata letak majalah.",
        "Berkoordinasi dengan tim selama proses desain hingga revisi untuk menghasilkan materi visual yang sesuai dengan standar perusahaan.",
      ],
    },
    {
      period: "Februari 2026 - Juni 2026",
      role: "Asisten Dosen - Aljabar & Matematika Diskrit",
      place: "Universitas Tarumanagara",
      points: [
        "Mendampingi pelaksanaan sesi praktikum (responsi) serta membantu menjelaskan materi Aljabar dan Matematika Diskrit sesuai kebutuhan mahasiswa.",
        "Membimbing mahasiswa dalam menyelesaikan latihan dan menjawab pertanyaan untuk membantu pemahaman konsep.",
        "Mengoreksi tugas praktikum serta berkolaborasi dengan sesama asisten dosen untuk mendukung kelancaran proses pembelajaran.",
      ],
    },
  ];

  return (
    <>
      <div className="bg-animation">
        <div className="glow-orb orb1"></div>
        <div className="glow-orb orb2"></div>
        <div className="glow-orb orb3"></div>
      </div>

      <nav>
        <div className="logo">Jessica's Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="profile-section" id="home">
        <div className="profile-container">
          <div className="profile-image">
            <div className="image-wrapper">
              <div className="glow-border"></div>
              <div className="profile-pic">
                <img
                  src="/jess.jpg"
                  alt="Jessica Winola"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>

          <div className="profile-content">
            <h1>Hi, I'm Jessica Winola</h1>
            <div className="subtitle">Informatics Engineering Student</div>

            <p>
              I'm Jessica Winola, a 5th-semester Computer Science in Tarumanagara University student passionate
              about creating meaningful digital experiences. I enjoy bringing ideas to
              life through interactive web applications, exploring new technologies,
              and blending creativity with technology.
            </p>
            <p>
              As someone with diverse interests across different fields, I love
              discovering new perspectives and finding ways to transform them into
              innovative technological solutions. My goal is to connect creativity,
              curiosity, and technology to create something that can inspire others.
              Currently, I'm exploring Artificial Intelligence and continuously
              learning how technology can empower people to create more, not just
              consume.
            </p>

            <a
              href="https://github.com/WinnyJazz"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-btn"
            >
              See My Projects
              <span className="projects-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* === Skills Section (Tech Stack) === */}
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h2 className="skills-title">Tech Stack</h2>
          <p className="skills-desc">
            These are some of the technologies and tools I’m passionate about mastering
            and using to build creative digital experiences.
          </p>

          <div className="skills-categories">
            {skillCategories.map((category, idx) => (
              <div className="skills-category" key={idx}>
                <h3 className="skills-category-title">{category.title}</h3>
                <div className="skills-icons">
                  <img
                    src={`https://skillicons.dev/icons?i=${category.icons}`}
                    alt={category.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Experience Section === */}
      <section className="experience-section" id="experience">
        <div className="experience-container">
          <h2 className="experience-title">My Experience</h2>
          <p className="experience-desc">
            A journey through organizations and workplaces that shaped my skills and mindset.
          </p>

          <div className="experience-subsection">
            <h3 className="experience-subtitle">Organization Experience</h3>
            <div className="experience-list">
              {organizationExperiences.map((exp, idx) => (
                <div className="experience-card" key={`org-${idx}`}>
                  <div className="experience-period">{exp.period}</div>
                  <h4 className="experience-role">{exp.role}</h4>
                  <div className="experience-place">{exp.place}</div>
                  <ul className="experience-points">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-subsection">
            <h3 className="experience-subtitle">Work Experience</h3>
            <div className="experience-list">
              {workExperiences.map((exp, idx) => (
                <div className="experience-card" key={`work-${idx}`}>
                  <div className="experience-period">{exp.period}</div>
                  <h4 className="experience-role">
                    {exp.role} | {exp.place}
                  </h4>
                  <ul className="experience-points">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Contact Section === */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-desc">
            Feel free to reach out — I'd love to connect and talk about anything
            creative, technical, or in between.
          </p>

          <div className="social-links contact-links">
            <a
              href="https://www.linkedin.com/in/jessica-winola-07073b356/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://wa.me/6282125287892"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="WhatsApp"
            >
              📱
            </a>

            <a
              href="mailto:jewinn2244@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Email"
            >
              📧
            </a>

            <a
              href="https://www.instagram.com/jazzywinn_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              📸
            </a>

            <a
              href="https://github.com/WinnyJazz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Github"
            >
              👩‍💻
            </a>

          </div>
        </div>
      </section>
    </>
  );
}