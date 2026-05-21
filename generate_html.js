const fs = require('fs');

const projects = [
    { title: "MixinMenu", desc: "Platform untuk restoran yang ingin menampilkan menu secara online agar memudahkan pelanggan untuk melihat menu.", tech: ["Laravel", "Vue.js"], link: "https://mixinmenu.com", abbr: "MM" },
    { title: "Katalog Mixinlabs", desc: "Platform katalog produk untuk toko dapat menampilkan produk dan meningkatkan promosi digital.", tech: ["Laravel", "Vue.js"], link: "https://katalog.mixinlabs.com", abbr: "KM" },
    { title: "Mixinlabs Affiliate", desc: "Website untuk menampilkan dan mengatur sistem afiliasi dari penjualan produk.", tech: ["Laravel", "Vue.js", "Tailwind"], link: "https://affiliate.mixinlabs.com", abbr: "AF" },
    { title: "Demo Sewa Lapangan", desc: "Website demo untuk sistem penyewaan lapangan olahraga, lengkap dengan fitur transaksi.", tech: ["Laravel", "Vue.js"], link: "https://demo-lapangan.demomixin.my.id", abbr: "SL" },
    { title: "FitGym AI", desc: "Website terintegrasi API Gemini untuk membuat jadwal workout, pemenuhan nutrisi, dan chatbot.", tech: ["ReactJS", "Gemini API"], link: "https://fitgym-ai.vercel.app/", abbr: "FG" },
    { title: "S-Class (Binus)", desc: "Landing page program Computer Science Binus University.", tech: ["HTML", "Tailwind"], link: "https://s-classbinus.vercel.app/", abbr: "SC" },
    { title: "Sistem Penjadwalan", desc: "Aplikasi web dengan multi-role user untuk mengatur dan mengelola jadwal appointment pendeta.", tech: ["Laravel", "Blade"], abbr: "SP" },
    { title: "Software House PM", desc: "Platform project management untuk mengelola project software house dan kolaborasi tim.", tech: ["Laravel", "Next.js"], abbr: "PM" },
    { title: "Aplikasi Kasir", desc: "Desktop application untuk sistem kasir yang memudahkan transaksi penjualan dan inventory.", tech: ["C# .NET", "SQL Server"], abbr: "AK" },
    { title: "Backend Ecommerce", desc: "Backend untuk website ecommerce dengan fitur lengkap produk, cart, dan transaksi.", tech: ["NestJS"], abbr: "BE" },
    { title: "Dashboard Komik", desc: "Dashboard untuk mengelola data website komik, termasuk katalog, chapter, dan author.", tech: ["Laravel", "Vue.js"], abbr: "DK" },
    { title: "BSLC CMS", desc: "Website dashboard organisasi BSLC untuk mengelola data landing page, elearning, dan nindyamaya.", tech: ["Laravel", "Vue.js"], link: "https://cms.bslc.or.id", abbr: "BC" },
    { title: "BSLC Elearning", desc: "Website platform belajar yang menyediakan modul, video recording, dan forum berbagi.", tech: ["Vue.js", "Tailwind"], link: "https://bslc-elearning.vercel.app", abbr: "EL" },
    { title: "BSLC Landing Page", desc: "Website landing page organisasi BSLC untuk memperkenalkan organisasi dan program.", tech: ["Vue.js", "Tailwind"], link: "https://bslc-landingpage.vercel.app", abbr: "BL" },
    { title: "BSLC Nindyamaya", desc: "Website dashboard mentoring untuk memfasilitasi interaksi tutor dan tutee program mentoring.", tech: ["Vue.js", "Tailwind"], link: "https://bslc-nindyamaya.vercel.app", abbr: "NM" },
];

const html = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wiko Laygunata - Software Engineer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        background: '#0a0a0a',
                        surface: '#121212',
                        surface2: '#1a1a1a',
                        border: '#27272a',
                        muted: '#a1a1aa',
                        primary: '#ffffff',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: theme('colors.background');
            color: theme('colors.primary');
        }
        ::selection {
            background: rgba(255, 255, 255, 0.9);
            color: #000;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
            background: #27272a;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3f3f46;
        }
        
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .noise {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 50;
            opacity: 0.035;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .glass-nav {
            background: rgba(10, 10, 10, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .bento-card {
            background: #121212;
            border: 1px solid #27272a;
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        .bento-card:hover {
            border-color: #3f3f46;
            background: #151515;
        }

        .text-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .nav-link {
            color: #a1a1aa;
            transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
            color: #ffffff;
        }

        .grid-bg {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            mask-image: radial-gradient(circle at center, black, transparent 80%);
            -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
        }
    </style>
</head>
<body class="antialiased">
    <div class="noise"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#home" class="text-xl font-bold tracking-tighter flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center text-sm">WL</span>
            </a>
            <div class="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#mixinlabs" class="nav-link">Mixinlabs</a>
            </div>
            <a href="#contact" class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-colors">
                Let's Talk
            </a>
            
            <!-- Mobile Menu Button -->
            <button class="md:hidden text-white p-2" id="mobile-menu-btn">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-surface border-b border-border px-6 py-4 space-y-4">
            <a href="#about" class="block text-muted hover:text-white">About</a>
            <a href="#skills" class="block text-muted hover:text-white">Skills</a>
            <a href="#projects" class="block text-muted hover:text-white">Projects</a>
            <a href="#mixinlabs" class="block text-muted hover:text-white">Mixinlabs</a>
            <a href="#contact" class="block text-white">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div class="absolute inset-0 z-0 flex items-center justify-center">
            <div class="absolute w-full h-full grid-bg"></div>
            <div class="w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div class="max-w-3xl mx-auto text-center z-10 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted mb-8 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for new opportunities
            </div>
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Hi, I'm <span class="text-gradient">Wiko Laygunata</span>
            </h1>
            <p class="text-lg md:text-xl text-muted font-light max-w-2xl mx-auto mb-6">
                Computer Science Student & Full Stack Developer building robust, scalable digital solutions.
            </p>
            <p class="text-sm text-muted/50 mb-12 font-mono">
                // Saya manusia biasa, makan nasi 🍚
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#projects" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium bg-white text-black hover:bg-gray-200 transition-colors">
                    View My Work
                </a>
                <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium border border-border hover:bg-surface transition-colors">
                    Contact Me
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 reveal tracking-tight">About Me</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Bio -->
            <div class="bento-card p-8 md:col-span-2 reveal">
                <h3 class="text-xl font-semibold mb-6">Who I Am</h3>
                <div class="space-y-4 text-muted leading-relaxed font-light">
                    <p>
                        Halo! Saya Wiko Laygunata, mahasiswa Computer Science di Binus University Kemanggisan (2024-2028). Saya berasal dari Pontianak dan memiliki passion yang kuat di bidang software development.
                    </p>
                    <p>
                        Saya berpengalaman sebagai Full Stack Developer dengan fokus pada web development. Saya senang membangun solusi digital yang dapat memecahkan masalah nyata dan memberikan value yang jelas kepada pengguna.
                    </p>
                </div>
            </div>
            
            <!-- Achievement -->
            <div class="bento-card p-8 bg-gradient-to-br from-surface to-surface2 flex flex-col justify-center reveal">
                <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <span class="text-xl">🏆</span>
                </div>
                <h3 class="text-5xl font-bold mb-3 tracking-tighter">1st</h3>
                <p class="text-muted text-sm font-medium">Juara 1 LKS Nasional</p>
                <p class="text-muted/60 text-xs mt-1">IT Software Solutions for Business (2022)</p>
            </div>

            <!-- Experience -->
            <div class="bento-card p-8 md:col-span-1 reveal">
                <h3 class="text-xl font-semibold mb-8">Experience</h3>
                <div class="relative pl-5 border-l border-border space-y-8">
                    <div class="relative">
                        <div class="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-background"></div>
                        <h4 class="font-medium text-white mb-1">Full Stack Developer</h4>
                        <p class="text-sm text-muted mb-2">Grha Digital Pontianak</p>
                        <p class="text-xs text-muted/60 font-mono">Mar - Jun 2024</p>
                    </div>
                </div>
            </div>

            <!-- Education -->
            <div class="bento-card p-8 md:col-span-2 reveal">
                <h3 class="text-xl font-semibold mb-8">Education</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div class="relative pl-5 border-l border-border">
                        <div class="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-background"></div>
                        <h4 class="font-medium text-white mb-1">Binus University</h4>
                        <p class="text-sm text-muted mb-2">Computer Science</p>
                        <p class="text-xs text-muted/60 font-mono">2024 - 2028</p>
                    </div>
                    <div class="relative pl-5 border-l border-border">
                        <div class="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-border ring-4 ring-background"></div>
                        <h4 class="font-medium text-white mb-1">SMK Immanuel Pontianak</h4>
                        <p class="text-sm text-muted mb-2">Software Engineering</p>
                        <p class="text-xs text-muted/60 font-mono">Graduated 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 px-6 max-w-7xl mx-auto border-t border-border">
        <div class="flex flex-col md:flex-row gap-16">
            <div class="md:w-1/3 reveal">
                <h2 class="text-3xl font-bold mb-6 tracking-tight">Tech Stack</h2>
                <p class="text-muted font-light leading-relaxed">Teknologi dan alat yang saya gunakan untuk membangun aplikasi yang scalable dan modern.</p>
            </div>
            <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div class="reveal">
                    <h3 class="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Web Development</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Laravel</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Vue.js</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Next.js</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">React</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">NestJS</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">MySQL</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Tailwind CSS</span>
                    </div>
                </div>
                <div class="reveal" style="transition-delay: 100ms">
                    <h3 class="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Desktop & Mobile</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">C# .NET</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">SQL Server</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Kotlin</span>
                        <span class="px-3 py-1.5 bg-surface2 border border-border rounded-lg text-sm">Android</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-6 max-w-7xl mx-auto border-t border-border">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
            <div>
                <h2 class="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
                <p class="text-muted font-light">Beberapa project yang telah saya kerjakan.</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${projects.map((p, i) => `
            <div class="bento-card group flex flex-col reveal" style="transition-delay: ${(i % 3) * 100}ms">
                <!-- Sleek Placeholder instead of slop image -->
                <div class="h-48 bg-surface2 border-b border-border rounded-t-[20px] flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                    <h4 class="text-7xl font-black text-white/5 tracking-tighter select-none group-hover:scale-110 group-hover:text-white/10 transition-all duration-500">${p.abbr}</h4>
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-semibold mb-3 group-hover:text-white transition-colors">${p.title}</h3>
                    <p class="text-muted text-sm font-light flex-grow mb-6 leading-relaxed">${p.desc}</p>
                    <div class="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <div class="flex flex-wrap gap-2">
                            ${p.tech.map(t => `<span class="text-xs font-medium text-muted/80 bg-white/5 px-2 py-1 rounded">${t}</span>`).join('')}
                        </div>
                        ${p.link ? `
                        <a href="${p.link}" target="_blank" class="text-white bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
    </section>

    <!-- Mixinlabs Section -->
    <section id="mixinlabs" class="py-24 px-6 max-w-7xl mx-auto border-t border-border">
        <div class="bento-card p-8 md:p-14 relative overflow-hidden reveal">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div class="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-medium mb-8">
                        Co-Founder & Full Stack Developer
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Mixinlabs</h2>
                    <p class="text-muted font-light leading-relaxed mb-8">
                        Software house yang berfokus pada inovasi dan solusi digital yang berdampak nyata. Kami percaya bahwa transformasi teknologi menjadi kunci utama bagi bisnis untuk tetap kompetitif di era modern.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="https://mixinlabs.com" target="_blank" class="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                            Visit Mixinlabs
                        </a>
                        <a href="https://binus.ac.id/entrepreneur/2025/02/13/mixinlabs-digital-computer-science/" target="_blank" class="border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-surface transition-colors flex items-center gap-2">
                            <span>Featured on BINUS</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-surface border border-border p-6 rounded-2xl hover:bg-surface2 transition-colors">
                        <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        </div>
                        <h4 class="font-medium mb-2">Web Development</h4>
                        <p class="text-sm text-muted font-light">Aplikasi web modern & responsif</p>
                    </div>
                    <div class="bg-surface border border-border p-6 rounded-2xl hover:bg-surface2 transition-colors">
                        <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                        </div>
                        <h4 class="font-medium mb-2">Mobile Apps</h4>
                        <p class="text-sm text-muted font-light">Aplikasi iOS & Android</p>
                    </div>
                    <div class="bg-surface border border-border p-6 rounded-2xl hover:bg-surface2 transition-colors">
                        <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <h4 class="font-medium mb-2">Automation</h4>
                        <p class="text-sm text-muted font-light">Otomasi proses bisnis</p>
                    </div>
                    <div class="bg-surface border border-border p-6 rounded-2xl hover:bg-surface2 transition-colors">
                        <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
                        </div>
                        <h4 class="font-medium mb-2">Consultation</h4>
                        <p class="text-sm text-muted font-light">Konsultasi digitalisasi</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer / Contact -->
    <footer id="contact" class="border-t border-border bg-surface2/50 mt-24">
        <div class="max-w-7xl mx-auto px-6 py-24">
            <div class="grid md:grid-cols-2 gap-16 mb-24 reveal">
                <div>
                    <h2 class="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">Let's build<br><span class="text-muted">something great.</span></h2>
                    <p class="text-muted font-light max-w-sm mb-10 text-lg">
                        Terbuka untuk project freelance, internship, atau sekadar diskusi tentang teknologi.
                    </p>
                    <a href="mailto:wikolaygunata@gmail.com" class="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        wikolaygunata@gmail.com
                    </a>
                </div>
                
                <div class="flex md:justify-end md:items-end">
                    <div class="space-y-6 text-right w-full md:w-auto">
                        <h4 class="font-semibold mb-6 text-xs uppercase tracking-widest text-muted text-left md:text-right">Social Profiles</h4>
                        <a href="https://www.linkedin.com/in/wikolaygunata" target="_blank" class="block text-2xl font-medium text-muted hover:text-white transition-colors flex justify-between md:justify-end gap-8 items-center border-b border-border/50 pb-4">
                            LinkedIn <span class="text-sm">↗</span>
                        </a>
                        <a href="https://github.com/wikolaygunata" target="_blank" class="block text-2xl font-medium text-muted hover:text-white transition-colors flex justify-between md:justify-end gap-8 items-center border-b border-border/50 pb-4">
                            GitHub <span class="text-sm">↗</span>
                        </a>
                        <a href="https://instagram.com/wikolaygunataa" target="_blank" class="block text-2xl font-medium text-muted hover:text-white transition-colors flex justify-between md:justify-end gap-8 items-center border-b border-border/50 pb-4">
                            Instagram <span class="text-sm">↗</span>
                        </a>
                        <a href="https://wikolaygunata.medium.com/" target="_blank" class="block text-2xl font-medium text-muted hover:text-white transition-colors flex justify-between md:justify-end gap-8 items-center border-b border-border/50 pb-4">
                            Medium <span class="text-sm">↗</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted font-light">
                <p>&copy; <span id="year"></span> Wiko Laygunata. All rights reserved.</p>
                <div class="mt-4 md:mt-0">
                    <a href="#home" class="hover:text-white transition-colors flex items-center gap-2">
                        Back to top
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        
        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Reveal animations
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const revealObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        // Nav active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>`;

fs.writeFileSync('c:\\laragon\\www\\mixinlab\\porto-pribadi\\index.html', html);
console.log('HTML written successfully.');
