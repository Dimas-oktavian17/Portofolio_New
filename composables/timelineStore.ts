import slugify from 'slugify';
import type { LevelEnum, ProjectData, Timeline } from '~/types/stepper';

export const timelineStore = async () => {
    const route = useRoute();
    const projectsResult = useState<ProjectData[]>("projects-result", () => []);
    const experinceWork = useState<Timeline[]>("timeline-work", () => [
        {
            title: "DB-Klik | Curriculum Developer – Kontrak (onsite)",
            description: "Mengembangkan dan menyusun materi pembelajaran PHP dengan pendekatan project-based, memimpin tim kecil, serta merancang modul dan rubrik evaluasi menggunakan Figma.",
            dateStart: new Date("2024-11-06"),
            dateEnd: new Date("2025-02-06"),
            tech: ["PHP", "Figma", "HackerRank", "HTML", "CSS", "Project-Based Learning"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini.",
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748939969/portofolio/curicculum-dev/6_xw7irq.png",
                    id: 1
                }
            ],
        },
        {
            title: "DB-Klik | Curriculum Developer – Intern (Scratch) (hybrid)",
            description: "Memimpin tim kecil dalam pengembangan materi Scratch, merancang modul kolaboratif berbasis proyek, dan menciptakan evaluasi interaktif serta rubrik penilaian terstruktur.",
            dateStart: new Date("2024-08-07"),
            dateEnd: new Date("2024-11-06"),
            tech: ["Scratch", "Figma", "Google Docs", "Interactive Quiz", "Project-Based Learning", "Online Collaboration Tools"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini.",
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748939936/portofolio/curicculum-dev/5_qmbn6r.png",
                    id: 1
                }
            ],
        },
        {
            title: "DB-Klik | Curriculum Developer – Intern (ScratchJr) (onsite)",
            description: "Mengembangkan modul pembelajaran ScratchJr secara mandiri, menyusun worksheet interaktif ramah anak, dan membangun struktur materi berjenjang dalam pendekatan project-based learning.",
            dateStart: new Date("2024-05-06"),
            dateEnd: new Date("2024-08-06"),
            tech: ["ScratchJr", "Figma", "Google Docs", "Visual Worksheet", "Project-Based Learning"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini.",
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748939959/portofolio/curicculum-dev/4_ggnjy3.png",
                    id: 1
                }
            ],
        },
        {
            title: "Rakamin PBI | Front-End Developer – Virtual Internship",
            description: "Mengembangkan antarmuka pengguna menggunakan Vue.js dan mengimplementasikan manipulasi data berbasis API dalam program magang berbasis proyek.",
            dateStart: new Date("2024-02-01"),
            dateEnd: new Date("2024-03-31"),
            tech: ["Vue.js", "HTML", "CSS", "JavaScript", "Fake Store API"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini."
        },
        {
            title: "Rumah Juang Sahabat Prabowo | IT Staff – Kontrak (onsite)",
            description: "Berperan penting dalam operasional IT organisasi, dari pengelolaan data hingga mendukung kegiatan daring seperti presentasi dan Zoom meeting.",
            dateStart: new Date("2023-05-01"),
            dateEnd: new Date("2023-10-01"),
            tech: ["Microsoft Excel", "Zoom", "PowerPoint"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini."
        },
        {
            title: "IT Support – Intern (onsite)",
            description: "Menangani perawatan lab komputer, troubleshooting perangkat lunak dan perangkat keras, serta mengoptimalkan sumber daya untuk efisiensi laboratorium.",
            dateStart: new Date("2022-01-01"),
            dateEnd: new Date("2022-04-01"),
            tech: ["Windows OS", "Microsoft Office", "Troubleshooting", "Software Installation", "Hardware Diagnostics"],
            longDescription: "Deskripsi lengkap tidak ditampilkan di sini."
          },
    ]);
    const experinceEducation = useState<Timeline[]>("timeline-education", () => [
        {
            title: "Sarjana Sistem Informasi",
            description: "Mahasiswa semester 2 di Universitas Terbuka. Saat ini sedang mempelajari dasar-dasar bisnis, manajemen, serta sistem informasi. Aktif mengikuti perkuliahan daring dan kegiatan akademik lainnya.",
            dateStart: new Date("2024-06-01"),
            dateEnd: new Date("2028-06-01"),
        },
        {
            title: "SMK Kawung 1 Surabaya – Rekayasa Perangkat Lunak (RPL)",
            description: "Lulus dari jurusan RPL. Pernah menjadi Asisten Ketua Jurusan dan membantu proses mengajar. Berkontribusi dalam pembuatan website landing page untuk PPDB (Penerimaan Peserta Didik Baru).",
            dateStart: new Date("2020-06-01"),
            dateEnd: new Date("2023-06-01"),
        }   
    ]);
    const projects = ref<ProjectData[]>([
        {
            picture: "/v1681990026/portofolio/PPDB.png",
            title: "Website PPDB Kawung 1",
            dateStart: new Date("2022-11-1"),
            dateEnd: new Date("2022-12-14"),
            description: `Merupakan website pendaftaran peserta baru, bagi siswa yang ingin melanjutkan pendidikan di SMK Kawung 1 Surabaya.
                          Website ini saya buat atas permintaan sekolah saya, dan website ini saya buat menggunakan js,tailwindcss,swipper dll.
                          Pada project ini saya bertugas fokus pada tampilan front-end saja, bagian backend'nya telah dikerjakan sendiri oleh tim IT disekolah.`,
            longDescription: "This project involved a comprehensive overhaul of an outdated e-commerce website. We conducted extensive user research, A/B testing, and implemented a responsive design to ensure seamless functionality across all devices. Key achievements include a 25% increase in mobile conversions and a 15% reduction in bounce rate.",
            links: [
                {
                    link: `https://psb.smkkawung1sby.sch.id/`,
                    live: "Preview",
                    preview: "material-symbols:search-rounded",
                },

            ],
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1681990026/portofolio/PPDB.png",
                    id: 1
                },
            ],
            // linkYt: "v1681487419/samples/cld-sample-video.mp4",
            level: {id: 3, name: "Basic" as LevelEnum},
            tech: ["Tailwind CSS", "Swiper", "HTML", "Javascript"]
        },
        {
            picture: "/v1681990026/portofolio/mountain.png",
            title: "Volcano",
            dateStart: new Date("2023-12-19"),
            dateEnd: new Date("2024-1-13"),
            description: `Merupakan website pencarian gunung berapi yang ada di Indonesia, website ini dibuat menggunakan bantuan API dari Yogi Saputro.
          Website ini memiliki beberapa fitur seperti search, filter dan clear. Untuk info lebih lanjut kalian bisa mencoba'nya sendiri.`,
            longDescription: "The mobile healthcare application was designed to bridge the gap between patients and healthcare providers. It includes features such as secure messaging, virtual consultations, medication reminders, and integration with wearable health devices. Extensive security audits were performed to ensure compliance with healthcare regulations.",
            links: [
                {
                    link: `https://volcano-vue.vercel.app/`,
                    live: "Preview",
                    preview: "material-symbols:search-rounded",
                },
                {
                    link: `https://github.com/Dimas-oktavian17/Volcano-vue.git`,
                    live: "Github",
                    preview: "uil:github",
                },
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1681990026/portofolio/mountain.png",
                    id: 1
                },
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748843360/portofolio/Screenshot_2025-06-02_124330-front_ucv11v.png",
                    id: 2
                }
            ],
            level: { id: 3, name: "Basic" as LevelEnum },
            tech: [
                "axios",
                "vue",
                "vue-router",
                "@formkit/auto-animate",
                "@iconify/vue",
                "@vitejs/plugin-vue",
                "@vue/test-utils",
                "eslint",
                "eslint-plugin-vue",
                "jsdom",
                "tailwindcss",
                "vite"
              ]
        },
        {
            picture: "/v1681990025/portofolio/vue.png",
            title: "MSTSKP Landing Page",
            dateStart: new Date("2023-03-05"),
            dateEnd: new Date("2023-04-02"),
            description: "Merupakan sebuah landing page sedherhana yang dibuat melalui slincing figma dari array id, website ini dibuat dengan vue js 3 serta berbagai macam libray animation",
            longDescription: "The mobile healthcare application was designed to bridge the gap between patients and healthcare providers. It includes features such as secure messaging, virtual consultations, medication reminders, and integration with wearable health devices. Extensive security audits were performed to ensure compliance with healthcare regulations.",
            links: [
                {
                    link: `https://mstskp-id.vercel.app/`,
                    live: "Preview",
                    preview: "material-symbols:search-rounded",
                },
                {
                    link: `https://github.com/Dimas-oktavian17/Mtskp--arrayid.git`,
                    live: "Github",
                    preview: "uil:github",
                },
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1681990025/portofolio/vue.png",
                    id: 1
                },
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748844690/portofolio/mstkp/Screenshot_2025-06-02_131039_so8sav.png",
                    id: 2
                },
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748844690/portofolio/mstkp/Screenshot_2025-06-02_131019_l5asch.png",
                    id: 2
                }
            ],
            // linkYt: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            level: { id: 3, name: "Basic" as LevelEnum },
            tech: [
                "@egjs/vue3-flicking",
                "@emailjs/browser",
                "swiper",
                "vue",
                "vue-inline-svg",
                "vue-kinesis",
                "@vitejs/plugin-vue",
                "@volar-plugins/vetur",
                "autoprefixer",
                "postcss",
                "tailwindcss",
                "vite",
                "vite-plugin-preload"
              ]
        },
        {
            picture: "/v1748935150/portofolio/data-entry/Screenshot_2025-06-03_133742_j1soff.png",
            title: "Data Entry",
            dateStart: new Date("2024-2-1"),
            dateEnd: new Date("2024-5-30"),
            description: `Merupakan sebuah project data entry yang dapat di visualisasikan melalui diagram, chart. Terdapat berbagai fitur Crud seperti membuat data baru, mengedit, dan menghapus. semua data pengguna disimpan melalui database firebase, dan terdapat juga fitur login dan register melalui email atau authentification secara langsung dari google.`,
            longDescription: "This project involved a comprehensive overhaul of an outdated e-commerce website. We conducted extensive user research, A/B testing, and implemented a responsive design to ensure seamless functionality across all devices. Key achievements include a 25% increase in mobile conversions and a 15% reduction in bounce rate.",
            links: [
                {
                    link: `https://github.com/Dimas-oktavian17/Data-entry-apps.git`,
                    live: "Github",
                    preview: "uil:github",
                },
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748935150/portofolio/data-entry/Screenshot_2025-06-03_133742_j1soff.png",
                    id: 1
                },
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748935149/portofolio/data-entry/Screenshot_2025-06-03_133906_jfgptd.png",
                    id: 2
                },
            ],
            linkYt: "/v1748966705/ulsf0u2becmkykwejqy9.mp4",
            level: { id: 2, name: "Medium" as LevelEnum },
            tech: [
                "@formkit/core",
                "@formkit/vue",
                "@vueuse/core",
                "axios",
                "firebase",
                "flatpickr",
                "jsvectormap",
                "pinia",
                "pinia-plugin-persistedstate",
                "vue",
                "vue-json-excel3",
                "vue-router",
                "vue3-apexcharts",
                "vuefire",
                "@iconify/vue",
                "@vitejs/plugin-vue",
                "@vue/test-utils",
                "autoprefixer",
                "eslint",
                "eslint-plugin-vue",
                "jsdom",
                "postcss",
                "tailwindcss",
                "vite"
              ]
        },
        {
            picture: "/v1748937093/portofolio/oktamindjourney/Screenshot_2025-06-03_144929_jdnxd6.png",
            title: "Oktamindjourney",
            dateStart: new Date("2025-2-12"),
            dateEnd: new Date("2025-5-27"),
            description: `adalah sistem manajemen konten canggih yang mengintegrasikan **Best AI Model** dengan teknologi web modern untuk menghasilkan wawasan dan konten yang terpercaya. Platform ini menggunakan model AI **deepseek-r1-distill-llama-70b** untuk menghasilkan konten berkualitas tinggi dan analisis mendalam, dashboard analytics yang komprehensif.`,
            longDescription: "This project involved a comprehensive overhaul of an outdated e-commerce website. We conducted extensive user research, A/B testing, and implemented a responsive design to ensure seamless functionality across all devices. Key achievements include a 25% increase in mobile conversions and a 15% reduction in bounce rate.",
            links: [
                {
                    link: `https://oktamindjourney.space/home`,
                    live: "Preview",
                    preview: "material-symbols:search-rounded",
                },
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748937093/portofolio/oktamindjourney/Screenshot_2025-06-03_144929_jdnxd6.png",
                    id: 1
                },
                {
                    url: "https://res.cloudinary.com/duvpel2np/image/upload/v1748937092/portofolio/oktamindjourney/Screenshot_2025-06-03_145008_ibfods.png",
                    id: 2
                },
            ],
            // linkYt: "v1681487419/samples/cld-sample-video.mp4",
            level: { id: 1, name: "High" as LevelEnum },
            tech: [
                "@formkit/core",
                "@formkit/vue",
                "@types/katex",
                "@vavt/vite-plugin-import-markdown",
                "@vitejs/plugin-basic-ssl",
                "@vueuse/core",
                "@vueuse/integrations",
                "apexcharts",
                "axios",
                "cropperjs",
                "flatpickr",
                "highlight.js",
                "jsvectormap",
                "jwt-decode",
                "katex",
                "markdown-it",
                "md-editor-v3",
                "mermaid",
                "pinia",
                "pusher-js",
                "screenfull",
                "slugify",
                "unhead",
                "universal-cookie",
                "vue",
                "vue-router",
                "vue3-apexcharts",
                "vue3-carousel",

                "@iconify/vue",
                "@rushstack/eslint-patch",
                "@tailwindcss/typography",
                "@tsconfig/node18",
                "@types/node",
                "@vitejs/plugin-vue",
                "@vitejs/plugin-vue-jsx",
                "@vue/eslint-config-prettier",
                "@vue/eslint-config-typescript",
                "@vue/tsconfig",
                "autoprefixer",
                "eslint",
                "eslint-plugin-unused-imports",
                "eslint-plugin-vue",
                "npm-run-all2",
                "postcss",
                "prettier",
                "tailwindcss",
                "typescript",
                "vite",
                "vue-tsc",

                "@hono/node-server",
                "@hono/oauth-providers",
                "@prisma/client",
                "@types/nodemailer",
                "apitally",
                "bad-words",
                "cloudinary",
                "cron",
                "dotenv",
                "hono",
                "hono-rate-limiter",
                "nodemailer",
                "otpauth",
                "pexels",
                "pusher",
                "reading-time",
                "zod",

                "@eslint/js",
                "dotenv-cli",
                "globals",
                "prisma",
                "tsup",
                "tsx",
                "typescript-eslint"
              ]
        },
    ]);

    // Computed properties
    const totalStories = computed(() => experinceWork.value.length);
    const projectsResultComputed = computed(() => projectsResult.value);
    // Actions
    const addStory = (newStory: Timeline) => {
        experinceWork.value.push(newStory);
    };
    // Fetch and sort data
    const fetchSortedWorks = async (data: ProjectData[], sort: string) => {
        const sortedDataAsc = useSorted(data, (a: Timeline, b: Timeline) => {
            const dateA = new Date(a.dateEnd).getTime();
            const dateB = new Date(b.dateEnd).getTime();
            return dateB - dateA;
        });
        const sortedDataComplexity = useSorted(data, (a: Timeline, b: Timeline) => {
            const dateA = Number(a?.level?.id) 
            const dateB = Number(b?.level?.id)
            return dateA - dateB; 
        });
        return sort === "most-recent" ?
    projectsResult.value = sortedDataAsc.value :   sort === "most-complex" ?
    projectsResult.value =   sortedDataComplexity.value  :
    projectsResult.value =  sortedDataAsc.value
    };
    // Fetch data from Nuxt Content
    const fetchContent = async (slugString: string) => {
        const slug = slugify(slugString, { lower: true });

        // Use route name to determine content directory dynamically
        const contentPath = String(route.name); // e.g., 'timeline', 'articles', 'blog', etc.

        const { data: content, error } = await useAsyncData(
            `content-${contentPath}-${slug}`, // Include route name in key for uniqueness
            () => queryContent(contentPath) // Dynamic path based on route name
                .where({ title: slugString })
                .findOne());

        if (error.value) {
            console.error('Fetch error:', error.value);
            return error.value;
        }

        return content.value;
    };
    // Return the state, getters, and actions
    return {
        // State
        experinceWork,
        experinceEducation,
        projects,
        // Getters
        totalStories,
        projectsResultComputed,
        // Actions
        addStory,
        fetchContent,
        fetchSortedWorks
    };
};