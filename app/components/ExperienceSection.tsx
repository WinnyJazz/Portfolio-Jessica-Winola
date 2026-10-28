const organizationExperiences = [
  {
    period: "September 2025 - December 2025",
    role: "Sekretaris Pelaksana Company Visit FTI - BEM FTI UNTAR",
    place: "Universitas Tarumanagara",
    points: [
      "Menyusun proposal kegiatan dan laporan pertanggungjawaban (LPJ) sebagai bagian dari administrasi dan dokumentasi acara.",
      "Mengoordinasikan jadwal rapat, mengirimkan pengingat kepada panitia, menyusun notulensi, serta berkoordinasi dengan pihak Blu by BCA untuk mendukung kelancaran persiapan kegiatan.",
      "Menjadi PIC Divisi Acara dengan mengoordinasikan anggota divisi serta memastikan rangkaian kegiatan terlaksana sesuai perencanaan.",
    ],
  },
  {
    period: "February 2026 - April 2026",
    role: "Wakil Koordinator Divisi Registrasi & Konsumsi FTI Competition - BEM FTI UNTAR",
    place: "Universitas Tarumanagara",
    points: [
      "Berkolaborasi dengan Koordinator Divisi dalam membagi tugas, memantau progres anggota, serta memastikan seluruh tanggung jawab divisi terlaksana sesuai rencana.",
      "Mengelola data registrasi peserta dan menyusun daftar hadir guna mendukung proses registrasi yang terorganisir.",
      "Berkoordinasi dengan vendor konsumsi untuk memenuhi kebutuhan acara sesuai dengan anggaran dan kebutuhan kegiatan.",
    ],
  },
  {
    period: "March 2026 - June 2026",
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
    period: "July 2025 - January 2026",
    role: "Intern Graphic Designer",
    place: "Globy",
    points: [
      "Mendesain konten edukatif untuk media sosial, seperti poster, carousel, dan cover Reels untuk meningkatkan penyampaian informasi secara visual.",
      "Dipercaya menangani berbagai kebutuhan desain tambahan, termasuk wallpaper, pamflet, baliho, dan tata letak majalah.",
      "Berkoordinasi dengan tim selama proses desain hingga revisi untuk menghasilkan materi visual yang sesuai dengan standar perusahaan.",
    ],
  },
  {
    period: "February 2026 - June 2026",
    role: "Asisten Dosen - Aljabar & Matematika Diskrit",
    place: "Universitas Tarumanagara",
    points: [
      "Mendampingi pelaksanaan sesi praktikum (responsi) serta membantu menjelaskan materi Aljabar dan Matematika Diskrit sesuai kebutuhan mahasiswa.",
      "Membimbing mahasiswa dalam menyelesaikan latihan dan menjawab pertanyaan untuk membantu pemahaman konsep.",
      "Mengoreksi tugas praktikum serta berkolaborasi dengan sesama asisten dosen untuk mendukung kelancaran proses pembelajaran.",
    ],
  },
];

function ExperienceList({ experiences, showPlace = true }) {
  return (
    <div className="experience-list">
      {experiences.map((exp) => (
        <article className="experience-card" key={exp.role}>
          <div className="experience-period">{exp.period}</div>

          <h4 className="experience-role">{exp.role}</h4>

          {showPlace && (
            <div className="experience-place">{exp.place}</div>
          )}

          <ul className="experience-points">
            {exp.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">My Experience</h2>

        <p className="experience-desc">
          A journey through organizations and workplaces that shaped
          my skills and mindset.
        </p>

        <div className="experience-subsection">
          <h3 className="experience-subtitle">
            Organization Experience
          </h3>

          <ExperienceList experiences={organizationExperiences} />
        </div>

        <div className="experience-subsection">
          <h3 className="experience-subtitle">Work Experience</h3>

          <ExperienceList
            experiences={workExperiences}
            showPlace={false}
          />
        </div>
      </div>
    </section>
  );
}                                   