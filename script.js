document.addEventListener("DOMContentLoaded", function () {

    // Translation Data
    const translations = {
        en: {
            marquee_text: `<span>Member of ScaleX Lab @ IIT Hyderabad</span> <span class="ticker-dot">•</span> <span>Learning Japanese & Actively Seeking Opportunities in Japan</span> <span class="ticker-dot">•</span> <span>Open for Research & Engineering Roles</span> <span class="ticker-dot">•</span>`,
            iith_badge: `<i class="fas fa-graduation-cap"></i> IIT HYDERABAD`,
            hero_title: `Hi, I'm <span class="highlight">SAISHUBHAM</span><br>but you can call me <span class="highlight">Subbu</span>.`,
            typing_text: "Member of ScaleX Lab @ IIT Hyderabad | Perception & ML Systems Engineer.",
            hero_desc: "M.Tech Student in Department of Computer Science & Engineering at IIT Hyderabad, specializing in Autonomous Driving Perception, Computer Vision, AI/ML Systems, and Spaced Repetition Learning Engines.",
            btn_cv: "View Resume",
            btn_contact: "Contact",
            about_title: "About Me",
            about_desc: "I am pursuing M.Tech in Computer Science & Engineering at IIT Hyderabad (ScaleX Lab). My technical expertise spans Autonomous Driving Perception & Tracking (ROS2, YOLOv8, LiDAR, EKF), AI/ML, Full-Stack Web Development, Data Persistence Systems, and Spoken Japanese. I enjoy building robust end-to-end systems that solve complex real-world engineering challenges with high performance and mathematical rigor.",
            
            exp_title: "Work Experience",
            exp1_title: "Web Development and Designing Intern — Oasis Infobyte",
            exp1_desc: "Developed responsive web interfaces by improving usability across desktop and mobile platforms.",

            research_title: "Research",
            research_interests_title: "Research Interests",
            tag_perception: "Autonomous Driving Perception",
            tag_cv: "Computer Vision & LiDAR Fusion",
            tag_ml: "Machine Learning & Deep Learning",
            tag_complexity: "Complexity Theory & Algorithms",
            publications_title: "Publications",
            pub1_title: "Drowsiness Detection System: Stay Alert Stay Alive.",

            academics_title: "Academics",
            coursework_title: "Relevant Coursework",
            course1: "Spoken Japanese Basics",
            course2: "Advanced Data Structures and Algorithms",
            course3: "Foundations of Machine Learning",
            course4: "Practical Malware Analysis",
            course5: "Linear Optimization & Fraud Analytics",
            course6: "Representation Learning & Tensor Techniques",

            achievements_title: "Achievements & Athletic Excellence",
            achieve_japan: "1st Place – Japan Sports Day (2 consecutive years), demonstrating sustained cultural and athletic engagement.",
            achieve3: "Inter-IIT Track & Field Athlete – Set the best Men's 800m & 1500m records at IIT Hyderabad to date (58th Inter-IIT Sports Meet).",
            achieve1: "Gold Medalist – Men's 800m (Milan 2025 Inter-Hostel General Championship, IIT Hyderabad).",
            achieve2: "Silver Medalist – Men's 400m | 1:00.65 PB (IITH Athletics League 2025-26).",
            achieve4: 'Official IITH Athletics Profile & Results (<a href="https://athletics.iith.online/profile.html?athlete=saishubham-laisetti" target="_blank" style="color: #fb923c; font-weight: 600;">Athlete Profile</a> • <a href="https://athletics.iith.online/results.html" target="_blank" style="color: #fb923c; font-weight: 600;">Official Results</a>)',
            achieve7: 'Full Marathon Finisher – 42.195 km NMDC Hyderabad Marathon 2025 (<a href="NMDC_MARATHON_2025.pdf" id="openCert" style="color: #fb923c; font-weight: 600;">View Certificate</a>).',
            achieve_cricket: "Cricket: Gold Medalist (2026) & Runner-Up (2025) at CSE Day Cricket Tournament.",
            achieve_badminton: "Gold Medalist – Badminton, CSE Day Badminton Tournament 2026.",
            achieve_genius: "Top 30 Contestant & Highest Prize-Money Winner in Meelo Evaru Genius, competing among 1,000+ students.",
            achieve5: 'Competitive Programming: Solved 300+ problems across LeetCode & GeeksforGeeks (<a href="https://leetcode.com/u/SAISHUBHAM_LAISETTI/" target="_blank" style="color: #fb923c; font-weight: 600;">LeetCode Profile</a>).',

            projects_title: "Featured Projects",
            view_repo: "View Repository",
            view_demo: "Live Demo",

            proj0_title: "Autonomous Driving Perception & Tracking System",
            proj0_b1: "Reduced localization error ~90% by fusing camera + LiDAR with EKF, achieving 0.12–0.14 m MAE vs. 0.39–1.45 m baselines.",
            proj0_b2: "Improved tracking accuracy +26.2 pts by combining ByteTrack + EKF, reaching 93.4–94.6% MOTA under occlusion.",
            proj0_b3: "Enabled end-to-end autonomy by integrating YOLOv8, DBSCAN, LiDAR segmentation into a modular ROS2 pipeline; validated across nuScenes, Waymo Open, and Argoverse 2.",

            proj_jlpt_title: "JLPT N5 Trainer — Interactive Japanese Learning Platform",
            proj_jlpt_b1: "Improved learning retention using Leitner 5-box spaced repetition, prioritizing missed vocabulary for adaptive review.",
            proj_jlpt_b2: "Streamlined JLPT preparation through adaptive quizzes and 12-week study plans, enabling structured daily practice.",
            proj_jlpt_b3: "Enhanced learning continuity with IndexedDB persistence, retaining progress, streaks, and exam history locally.",

            proj_sec_title: "SecureWebApp — Secure Session & Authentication Web Platform",
            proj_sec_b1: "Built a PHP web app for registration/login, profile management, search, transactions, and secure sessions.",
            proj_sec_b2: "Applied security best practices: input validation, prepared SQL statements, safe session/cookie handling, and activity logging.",
            proj_sec_b3: "Containerized with Docker for reproducible setup, testing, and demonstration of secure PHP coding paradigms.",

            proj_task_title: "Distributed Task Queue System with Priority Scheduling",
            proj_task_b1: "Engineered a high-performance task queue with priority scheduling and concurrent task execution using Python's threading and queue modules.",
            proj_task_b2: "Implemented core components including worker management, task prioritization, and status tracking with O(1) task lookup.",
            proj_task_b3: "Designed for reliability with error handling, task retries, and graceful shutdown procedures.",

            proj_wgan_title: "High-Fidelity Synthetic Data Generation Using WGAN-GP",
            proj_wgan_b1: "Implemented a WGAN-GP model with gradient penalty for synthetic data generation.",
            proj_wgan_b2: "Developed evaluation framework with KDE plots and correlation analysis.",
            proj_wgan_b3: "Optimized model performance for effective data augmentation tasks.",

            por_title: "Positions of Responsibility",
            por0_title: "OCS Placement Coordinator — IIT Hyderabad",
            por0_desc: "Strengthened campus placements as OCS Placement Coordinator, coordinating recruiter–student communication for smoother operations.",
            por1_title: "Volunteer – SPIC MACAY, IIT Hyderabad Chapter",
            por1_desc: "Organized 12+ cultural events annually through SPIC MACAY, coordinating monthly programs promoting Indian arts and heritage across campus.",
            por2_title: "Anchor & Volunteer – Entrepreneurship Cell (E-Cell), IIT Hyderabad",
            por2_desc: "Drove event engagement as Anchor for E-Cell Milan 2024, managing live hosting and audience interaction to foster campus startup culture.",
            por3_title: "Member – Prayas Club, IIT Hyderabad",
            por3_desc: "Expanded educational outreach to 7+ government schools through Prayas, providing academic mentoring and career guidance to rural students.",
            por4_title: "Hostel Dining Standards Coordinator — IIT Hyderabad",
            por4_desc: "Improved dining standards for 5,700+ students by monitoring food quality, hygiene, and student feedback.",

            skills_title: "Technical Skills",
            skill1: "Languages: C++, Python, JavaScript (ES6+), PHP",
            skill2: "Autonomous Driving & Perception (ROS2, YOLOv8, LiDAR, EKF, ByteTrack, Hybrid A*)",
            skill3: "Full-Stack & Web Systems (HTML5/CSS3, IndexedDB, Web Audio/Speech API, Docker, MySQL)",
            skill4: "ML / Deep Learning & Computer Vision (PyTorch, scikit-learn, OpenCV, Hugging Face, BERT)",
            contact_title: "Contact",
            cv_modal_title: "Saishubham Laisetti — Resume"
        },
        ja: {
            marquee_text: `<span>IITハイデラバード校 ScaleX Lab 所属</span> <span class="ticker-dot">•</span> <span>日本語学習中 ＆ 日本国内・日系企業の求人を積極的に捜索中</span> <span class="ticker-dot">•</span> <span>研究・エンジニアリング職のオファー歓迎</span> <span class="ticker-dot">•</span>`,
            iith_badge: `<i class="fas fa-graduation-cap"></i> インド工科大学ハイデラバード校`,
            hero_title: `こんにちは、<span class="highlight">サイシュバム</span>です。<br>気軽に <span class="highlight">Subbu</span> とお呼びください。`,
            typing_text: "IITハイデラバード校 ScaleX Lab 所属 | 自動運転認識・MLシステムエンジニア",
            hero_desc: "インド工科大学（IIT）ハイデラバード校 コンピュータサイエンス学科 M.Tech（修士課程）在学中。自動運転認識・点群処理・AI/MLシステム・分散学習エンジンを専門としています。",
            btn_cv: "履歴書を見る",
            btn_contact: "お問い合わせ",
            about_title: "私について",
            about_desc: "現在、インド工科大学ハイデラバード校（ScaleX Lab）にてコンピュータサイエンスのM.Tech（修士課程）を履修しています。専門領域は自動運転認識・追跡（ROS2, YOLOv8, LiDAR, EKF）、AI/ML、フルスタックWeb開発、データ永続化システム、および日本語会話です。高度なパフォーマンスと数学的厳密性を備えた実世界課題のシステム構築に意欲的に取り組んでいます。",

            exp_title: "職務経歴・インターンシップ",
            exp1_title: "Web開発・デザインインターン — Oasis Infobyte",
            exp1_desc: "デスクトップおよびモバイル環境におけるUI/UX改善とレスポンシブWebインターフェースの開発に従事。",

            research_title: "研究",
            research_interests_title: "研究分野",
            tag_perception: "自動運転認識・センサーフュージョン",
            tag_cv: "コンピュータビジョン・LiDAR点群処理",
            tag_ml: "機械学習・ディープラーニング",
            tag_complexity: "計算複雑性理論・アルゴリズム",
            publications_title: "論文・発表",
            pub1_title: "居眠り検知システム: Stay Alert Stay Alive",

            academics_title: "学術・学歴",
            coursework_title: "履修科目",
            course1: "日常日本語会話の基礎",
            course2: "高度データ構造とアルゴリズム",
            course3: "機械学習の基礎",
            course4: "実践マルウェア解析",
            course5: "線形最適化・不正検知アナリティクス",
            course6: "表現学習・テンソル手法",

            achievements_title: "実績・陸上競技成績",
            achieve_japan: "ジャパン・スポーツデイ（スポーツの日記念大会）2年連続優勝 – 持続的な文化・スポーツ交流の実績。",
            achieve3: "Inter-IIT 陸上代表 – 男子800mおよび1500mでIITハイデラバード校歴代最高記録を保持（第58回 Inter-IIT スポーツ大会代表）。",
            achieve1: "男子800m 金メダリスト – Milan 2025 (IITH 学部対抗総合スポーツ大会)。",
            achieve2: "男子400m 銀メダリスト | 自己ベスト 1:00.65 (IITH アスレティクスリーグ 2025-26)。",
            achieve4: 'IITハイデラバード校 公式陸上プロフィール＆記録 (<a href="https://athletics.iith.online/profile.html?athlete=saishubham-laisetti" target="_blank" style="color: #fb923c; font-weight: 600;">選手プロフィール</a> • <a href="https://athletics.iith.online/results.html" target="_blank" style="color: #fb923c; font-weight: 600;">公式大会結果</a>)',
            achieve7: 'フルマラソン 完走 (42.195 km) – NMDC ハイデラバードマラソン 2025 (<a href="NMDC_MARATHON_2025.pdf" id="openCert" style="color: #fb923c; font-weight: 600;">認定証を見る</a>)。',
            achieve_cricket: "クリケット: CSE Day クリケット大会 優勝 (2026年) & 準優勝 (2025年)。",
            achieve_badminton: "バドミントン: CSE Day バドミントン大会 優勝 (2026年)。",
            achieve_genius: "「Meelo Evaru Genius」クイズ大会: 1,000名以上の参加者の中からTop 30入賞・最高賞金獲得。",
            achieve5: '競技プログラミング: LeetCode / GeeksforGeeks にて300以上のアルゴリズム問題を解決 (<a href="https://leetcode.com/u/SAISHUBHAM_LAISETTI/" target="_blank" style="color: #fb923c; font-weight: 600;">LeetCode</a>)。',

            projects_title: "主要プロジェクト",
            view_repo: "リポジトリを見る",
            view_demo: "ライブデモを見る",

            proj0_title: "自動運転認識・追跡システム (Autonomous Driving Perception & Tracking)",
            proj0_b1: "カメラとLiDARのEKFセンサーフュージョンにより位置誤差を約90%削減（MAE 0.12–0.14m）。",
            proj0_b2: "ByteTrackとEKFの融合により追跡精度を+26.2 pt向上させ、遮蔽環境下で93.4–94.6% MOTAを達成。",
            proj0_b3: "YOLOv8、DBSCAN、LiDARセグメンテーションを統合したモジュール型ROS2パイプラインを構築し、nuScenes / Waymo / Argoverse 2で評価検証。",

            proj_jlpt_title: "JLPT N5 トレーナー — インタラクティブ日本語学習プラットフォーム",
            proj_jlpt_b1: "ライトナー5箱型間隔反復法（Spaced Repetition）を導入し、弱点単語を効率的に定着。",
            proj_jlpt_b2: "適応型クイズと12週間学習プランにより構造化された日常学習を実現。",
            proj_jlpt_b3: "IndexedDB永続化により学習進捗、ストリーク、試験履歴をブラウザ内に保持。",

            proj_sec_title: "SecureWebApp — セキュアセッション・認証Webプラットフォーム",
            proj_sec_b1: "ユーザー登録・ログイン、プロファイル管理、決済、安全なセッション管理を備えたPHP Webアプリを開発。",
            proj_sec_b2: "入力バリデーション、プリペアドステートメント、安全なCookie処理、ログ管理などのセキュリティベストプラクティスを適用。",
            proj_sec_b3: "Dockerコンテナ化により再現可能な環境を構築し、安全なPHPコーディング手法を実証。",

            proj_task_title: "優先度スケジュール機能付き分散タスクキューシステム",
            proj_task_b1: "Pythonのthreadingおよびqueueモジュールを用いて、マルチスレッド並列実行が可能な高パフォーマンスタスクキューを構築。",
            proj_task_b2: "ワーカー管理、タスク優先順位付け、O(1)ルックアップによるステータストラッキングを実装。",
            proj_task_b3: "エラーハンドリング、再試行メカニズム、グレースフルシャットダウンによる高い信頼性を確保。",

            proj_wgan_title: "WGAN-GPを用いた高精度合成データ生成システム",
            proj_wgan_b1: "勾配罰則付きWGAN-GPモデルを実装し、高品質な合成データを生成。",
            proj_wgan_b2: "KDEプロットおよび相関分析を用いた評価フレームワークを開発。",
            proj_wgan_b3: "データ拡張タスク向けにモデルの安定性と生成精度を最適化。",

            por_title: "役職・社会貢献活動 (Positions of Responsibility)",
            por0_title: "OCS 就職・就活コーディネーター — IITハイデラバード校",
            por0_desc: "企業採用担当者と学生間のコミュニケーション調整を担当し、学内就職活動の円滑な運営に貢献。",
            por1_title: "ボランティア – SPIC MACAY (インド古典音楽・文化普及協会) IITハイデラバード支部",
            por1_desc: "年間12回以上の学内文化コンサートや伝統芸能ワークショップを企画・運営。",
            por2_title: "司会・ボランティア – 起業家精神セル (E-Cell Milan 2024), IITハイデラバード校",
            por2_desc: "E-Cell Milan 2024にてメインMC・司会を担当し、イベント進行と起業家精神の醸成に貢献。",
            por3_title: "メンバー – Prayas Club (教育支援ボランティア), IITハイデラバード校",
            por3_desc: "7校以上の公立学校に通う生徒たちへ学習指導や進路相談を提供し、地域教育支援を拡大。",
            por4_title: "学生食堂品質・衛生管理コーディネーター — IITハイデラバード校",
            por4_desc: "5,700名以上の学生が利用する学食の食事品質、衛生管理、フィードバック収集・改善に従事。",

            skills_title: "技術スキル",
            skill1: "プログラミング言語: C++, Python, JavaScript (ES6+), PHP",
            skill2: "自動運転・認識: ROS2, YOLOv8, LiDAR, EKF, ByteTrack, Hybrid A*",
            skill3: "フルスタック・Web: HTML5/CSS3, IndexedDB, Web Audio/Speech API, Docker, MySQL",
            skill4: "ML / ディープラーニング: PyTorch, scikit-learn, OpenCV, Hugging Face, BERT",
            contact_title: "お問い合わせ",
            cv_modal_title: "サイシュバム ライセッティ — 履歴書 (Resume)"
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
