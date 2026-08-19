document.addEventListener("DOMContentLoaded", function () {

    // Translation Data
    const translations = {
        en: {
            marquee_text: `<span>Member of ScaleX Lab @ IIT Hyderabad</span> <span class="ticker-dot">•</span> <span>Learning Japanese & Actively Seeking Opportunities in Japan</span> <span class="ticker-dot">•</span> <span>Open for Research & Engineering Roles</span> <span class="ticker-dot">•</span>`,
            iith_badge: `<i class="fas fa-graduation-cap"></i> IIT HYDERABAD`,
            hero_title: `Hi, I'm <span class="highlight">SAISHUBHAM</span><br>but you can call me <span class="highlight">Subbu</span>.`,
            typing_text: "I am a member of Scalable Algorithms for Large-Scale Data (ScaleX) Lab.",
            hero_desc: "M.Tech Student in Department of Computer Science at IIT Hyderabad, working in theoretical computer science with focus on algorithms, complexity theory, and mathematical foundations of computing.",
            btn_cv: "View Resume",
            btn_contact: "Contact",
            about_title: "About Me",
            about_desc: "I am currently pursuing M.Tech in Computer Science at IIT Hyderabad. My research interests lie in theoretical computer science, algorithm design, computational complexity, and rigorous mathematical analysis of computation models. I enjoy solving challenging problems that require deep analytical thinking and strong mathematical foundations.",
            research_title: "Research",
            research_interests_title: "Research Interests",
            tag_complexity: "Complexity Theory",
            tag_math: "Mathematical Foundations of Computing",
            tag_dim_red: "Dimensionality Reduction",
            tag_rand_algo: "Randomized Algorithms",
            publications_title: "Publications",
            pub1_title: "Drowsiness Detection System: Stay Alert Stay Alive.",
            academics_title: "Academics",
            coursework_title: "Relevant Coursework",
            course1: "Advanced Data Structures and Algorithms",
            course2: "Foundations of Machine Learning",
            course3: "Tensor: Techniques, Algorithms and Applications",
            course4: "Representation Learning",
            course5: "Linear Optimization",
            course6: "Spoken Japanese Basics",
            achievements_title: "Achievements & Athletic Excellence",

            achieve1: "Gold Medalist – Men's 800m (Milan 2025 Inter-Hostel Championship)",
            achieve2: "Silver Medalist – Men's 400m | 1:00.65 PB (IITH Athletics League 2025-26)",
            achieve3: "Inter-IIT Track & Field Athlete – 58th Inter-IIT Sports Meet (Represented IIT Hyderabad in 800m, 1500m & 4x400m Relay)",
            achieve4: 'Official IITH Athletics Profile & Results (<a href="https://athletics.iith.online/profile.html?athlete=saishubham-laisetti" target="_blank" style="color: #fb923c; font-weight: 600;">Athlete Profile</a> • <a href="https://athletics.iith.online/results.html" target="_blank" style="color: #fb923c; font-weight: 600;">Official Results</a>)',
            achieve5: 'Solved 200+ algorithmic problems across competitive programming platforms (<a href="https://leetcode.com/u/SAISHUBHAM_LAISETTI/" target="_blank" style="color: #fb923c; font-weight: 600;">LeetCode</a>)',
            achieve6: "Research Assistantship – ScaleX Lab @ IIT Hyderabad",
            achieve7: 'Full Marathon Finisher – NMDC Hyderabad Marathon 2025 (<a href="NMDC_MARATHON_2025.pdf" id="openCert" style="color: #fb923c; font-weight: 600;">View Certificate</a>)',
            projects_title: "Projects",
            proj0_title: "Autonomous Driving Perception & Tracking Stack",
            proj0_desc: "Built a modular ROS2 autonomous driving pipeline integrating YOLOv8 2D detection, LiDAR processing (RANSAC + DBSCAN), EKF sensor fusion, ByteTrack 3D tracking, and Hybrid A* motion planning evaluated across real-world benchmark datasets.",
            view_repo: "View Repository",
            proj1_title: "Random Projection Matching System",
            proj1_desc: "Built a C++ system analyzing dimensionality reduction impact on nearest neighbor matching accuracy.",
            proj2_title: "Federated Distribution Shift Study",
            proj2_desc: "Studied label and feature shift in federated medical imaging environments.",
            proj3_title: "Algorithmic Problem Solving",
            proj3_desc: "Solved graph and optimization problems using efficient C++ implementations.",
            por_title: "Positions of Responsibility",
            por1_title: "Volunteer – SPIC MACAY, IIT Hyderabad Chapter",
            por1_desc: "Contributed to the Society for the Promotion of Indian Classical Music And Culture Amongst Youth (SPIC MACAY) by coordinating cultural concerts, classical music performances, and heritage workshops across the campus.",
            por2_title: "Volunteer – Entrepreneurship Cell (E-Cell), IIT Hyderabad",
            por2_desc: "Actively supported campus entrepreneurship initiatives, startup summits, guest speaker sessions, and innovation events to promote a vibrant startup and entrepreneurial culture.",
            por3_title: "Member – Prayas Club, IIT Hyderabad",
            por3_desc: "Engaged with Prayas, a student-led social initiative at IIT Hyderabad dedicated to teaching, mentoring, and guiding underprivileged school students—particularly from government schools—to strengthen their academic foundation.",
            skills_title: "Technical Skills",
            skill1: "C++",
            skill2: "Algorithms & Data Structures",
            skill3: "Theoretical Computer Science",
            skill4: "Python",
            contact_title: "Contact"
        },
        ja: {
            marquee_text: `<span>IITハイデラバード校 ScaleX Lab 所属</span> <span class="ticker-dot">•</span> <span>日本語学習中 ＆ 日本国内・日系企業の求人を積極的に捜索中</span> <span class="ticker-dot">•</span> <span>研究・エンジニアリング職のオファー歓迎</span> <span class="ticker-dot">•</span>`,
            iith_badge: `<i class="fas fa-graduation-cap"></i> インド工科大学ハイデラバード校`,
            hero_title: `こんにちは、<span class="highlight">サイシュバム</span>です。<br>気軽に <span class="highlight">Subbu</span> とお呼びください。`,
            typing_text: "大規模データ向けスケーラブルアルゴリズム（ScaleX）研究室に所属しています。",
            hero_desc: "インド工科大学（IIT）ハイデラバード校 コンピュータサイエンス学科 M.Tech（修士課程）在学中。理論コンピュータサイエンス、アルゴリズム、計算複雑性理論、計算の数学的基礎を専攻。",
            btn_cv: "履歴書を見る",
            btn_contact: "お問い合わせ",
            about_title: "私について",
            about_desc: "現在、インド工科大学ハイデラバード校にてコンピュータサイエンスのM.Tech（修士課程）を履修しています。研究分野は理論コンピュータサイエンス、アルゴリズム設計、計算複雑性、および計算モデルの厳密な数学的解析です。深い分析力と強固な数学的基礎を要する難問の解決に情熱を注いでいます。",
            research_title: "研究",
            research_interests_title: "研究分野",
            tag_complexity: "計算複雑性理論",
            tag_math: "計算の数学的基礎",
            tag_dim_red: "次元削減",
            tag_rand_algo: "確率的アルゴリズム",
            publications_title: "論文・発表",
            pub1_title: "居眠り検知システム: Stay Alert Stay Alive",
            academics_title: "学術・学歴",
            coursework_title: "履修科目",
            course1: "高度データ構造とアルゴリズム",
            course2: "機械学習の基礎",
            course3: "テンソル: 手法・アルゴリズム・応用",
            course4: "表現学習",
            course5: "線形最適化",
            course6: "日常日本語会話の基礎",
            achievements_title: "実績・陸上競技成績",

            achieve1: "男子800m 金メダリスト – Milan 2025 (学部対抗総合スポーツ大会)",
            achieve2: "男子400m 銀メダリスト | 自己ベスト 1:00.65 (IITH アスレティクスリーグ 2025-26)",
            achieve3: "Inter-IIT 陸上競技代表 – 第58回 Inter-IIT スポーツ大会 (IITハイデラバード校代表: 800m, 1500m, 4x400mリレー)",
            achieve4: 'IITハイデラバード校 公式陸上プロフィール＆記録 (<a href="https://athletics.iith.online/profile.html?athlete=saishubham-laisetti" target="_blank" style="color: #fb923c; font-weight: 600;">選手プロフィール</a> • <a href="https://athletics.iith.online/results.html" target="_blank" style="color: #fb923c; font-weight: 600;">公式大会結果</a>)',
            achieve5: '競技プログラミングプラットフォームで200以上のアルゴリズム問題を解決 (<a href="https://leetcode.com/u/SAISHUBHAM_LAISETTI/" target="_blank" style="color: #fb923c; font-weight: 600;">LeetCode</a>)',
            achieve6: "リサーチアシスタント – IITハイデラバード校 ScaleX Lab",
            achieve7: 'フルマラソン 完走 – NMDC ハイデラバードマラソン 2025 (<a href="NMDC_MARATHON_2025.pdf" id="openCert" style="color: #fb923c; font-weight: 600;">認定証を見る</a>)',
            projects_title: "プロジェクト",



            proj0_title: "自動運転認識・追跡スタック (Autonomous Driving Perception & Tracking)",
            proj0_desc: "YOLOv8 2D物体検出、LiDAR点群処理（RANSAC + DBSCAN）、拡張カルマンフィルタ（EKF）センサーフュージョン、ByteTrack 3D物体追跡、およびHybrid A*運動計画を統合したモジュール型ROS2自動運転パイプラインを構築し、実環境ベンチマークデータセットで評価。",
            view_repo: "リポジトリを見る",
            proj1_title: "ランダム射影マッチングシステム",

            proj1_desc: "次元削減が最近傍マッチング精度に与える影響を解析するC++システムを構築。",
            proj2_title: "連合学習における分布シフトの研究",
            proj2_desc: "連合医療画像環境におけるラベルおよび特徴量の分布シフトを研究。",
            proj3_title: "アルゴリズム問題解決",
            proj3_desc: "効率的なC++実装を用いてグラフ問題および最適化問題を解決。",
            por_title: "役職・社会貢献活動 (Positions of Responsibility)",
            por1_title: "ボランティア – SPIC MACAY (インド古典音楽・文化普及協会) IITハイデラバード支部",
            por1_desc: "インドの伝統文化・古典音楽の普及を目指すSPIC MACAYにて、学内コンサートや伝統文化ワークショップの企画・運営に従事。",
            por2_title: "ボランティア – アントレプレナーシップ・セル (E-Cell), IITハイデラバード校",
            por2_desc: "学生の起業家精神の育成とスタートアップ文化の醸成に向け、起業サミット、ピッチコンテスト、講演会の運営をサポート。",
            por3_title: "メンバー – Prayas Club (教育支援ボランティア), IITハイデラバード校",
            por3_desc: "公立学校に通う恵まれない環境の生徒たちへの学習指導、教育サポート、進路指導を行う学生主導の社会貢献団体「Prayas」に参加・活動。",
            skills_title: "技術スキル",
            skill1: "C++",
            skill2: "アルゴリズムとデータ構造",
            skill3: "理論コンピュータサイエンス",
            skill4: "Python",
            contact_title: "お問い合わせ"

        }
    };

    let currentLang = localStorage.getItem("portfolio_lang") || "en";
    let typingTimeout = null;

    // Typing Effect Function
    function startTypingEffect(text) {
        const typingElement = document.querySelector(".typing");
        if (!typingElement) return;

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        typingElement.innerHTML = "";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                typingTimeout = setTimeout(typeEffect, 40);
            }
        }
        typeEffect();
    }

    // Set Language Function
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("portfolio_lang", lang);
        document.documentElement.lang = lang;

        const langBtn = document.getElementById("lang-toggle");
        const langTooltip = document.getElementById("lang-tooltip-text");
        if (langBtn) {
            langBtn.textContent = lang === "en" ? "日" : "EN";
            langBtn.setAttribute("title", lang === "en" ? "Tap button for 日本語" : "Tap button for English");
        }
        if (langTooltip) {
            langTooltip.textContent = lang === "en" ? "Tap for 日本語" : "Tap for English";
        }


        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const elementsDup = document.querySelectorAll("[data-i18n-dup]");
        elementsDup.forEach(el => {
            const key = el.getAttribute("data-i18n-dup");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Restart Typing Effect with selected language text
        if (translations[lang] && translations[lang].typing_text) {
            startTypingEffect(translations[lang].typing_text);
        }
    }

    // Language Toggle Event Listener

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", function () {
            const newLang = currentLang === "en" ? "ja" : "en";
            setLanguage(newLang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });
    }

    // Scroll Fade Animation
    const faders = document.querySelectorAll(".fade-in");
    if (faders.length > 0) {
        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.3 });

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // Skill Bars Animation
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress");

    if (skillsSection && progressBars.length > 0) {
        const skillsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute("data-width");
                    });
                }
            });
        }, { threshold: 0.5 });

        skillsObserver.observe(skillsSection);
    }

    // Research Tags Animation
    const researchSection = document.querySelector("#research");
    const tags = document.querySelectorAll(".research-tags span");

    if (researchSection && tags.length > 0) {
        const tagObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.classList.add("show");
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.5 });

        tagObserver.observe(researchSection);
    }

    // CV Modal
    const modal = document.getElementById("cvModal");
    const openBtn = document.getElementById("openCV");
    const closeBtn = document.getElementById("closeCV");

    if (modal && openBtn && closeBtn) {
        openBtn.onclick = () => modal.style.display = "flex";
        closeBtn.onclick = () => modal.style.display = "none";
    }

    // Marathon Certificate Modal (Event Delegation)
    document.addEventListener("click", function (e) {
        const openCertTarget = e.target.closest("#openCert");
        if (openCertTarget) {
            e.preventDefault();
            const certModal = document.getElementById("certModal");
            if (certModal) certModal.style.display = "flex";
            return;
        }

        const closeCertTarget = e.target.closest("#closeCert");
        if (closeCertTarget) {
            const certModal = document.getElementById("certModal");
            if (certModal) certModal.style.display = "none";
            return;
        }

        const modal = document.getElementById("cvModal");
        const certModal = document.getElementById("certModal");
        if (modal && e.target == modal) {
            modal.style.display = "none";
        }
        if (certModal && e.target == certModal) {
            certModal.style.display = "none";
        }
    });



    // Active Sidebar Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".side-nav a");

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
    }

});
