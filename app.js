// ============================================================
// DEFAULT BOOK — shown when the app first loads
// ============================================================
const DEFAULT_BOOK_EN = {
    metadata: { chapter_title: "AI in Education", key_concepts: ["Machine Learning", "Big Data", "Personalization"] },
    structured_summary: [
        { topic: "Inspiring Introduction", content: "Artificial Intelligence is the simulation of human intelligence processes by machines and computer systems, used to elevate the educational experience.", has_table: false },
        { topic: "Machine Learning Applications", content: "| Application | Benefit |\n|---|---|\n| Smart Recommendations | Increase engagement with tailored content |\n| Automated Grading | Save teacher time for creative tasks |\n| Analytical Tracking | Identify weaknesses early |", has_table: true }
    ],
    quiz: [
        { question: "What is the primary goal of effectively using AI in education?", options: { A: "Reducing teachers in schools", B: "Personalizing the learning experience", C: "Abolishing traditional schools", D: "Accelerating daily exams" }, correct_option: "B", explanation: "AI helps analyze student data to provide tailored content. Thus (B) is correct." },
        { question: "Which of the following is NOT an AI application in classrooms?", options: { A: "Standard wooden whiteboards", B: "Auto-grading systems", C: "Chatbots for answers", D: "Adaptive learning platforms" }, correct_option: "A", explanation: "Standard whiteboards are traditional tools with no algorithms." },
        { question: "How does Big Data contribute to improving education?", options: { A: "By storing millions of books", B: "By tracking student learning patterns", C: "By consuming more storage", D: "It doesn't contribute" }, correct_option: "B", explanation: "Analyzing student patterns enables personalized guidance." }
    ],
    audio_narrative: "Welcome, Champion, to the AI in Education chapter. We will explore how to revolutionize learning through automatic content personalization and data-driven analysis of student performance."
};

const DEFAULT_BOOK_AR = {
    metadata: { chapter_title: "الذكاء الاصطناعي في التعليم", key_concepts: ["تعلم الآلة", "البيانات الضخمة", "التخصيص"] },
    structured_summary: [
        { topic: "مقدمة ملهمة", content: "الذكاء الاصطناعي هو قدرة الآلات على محاكاة القدرات الذهنية للبشر للارتقاء بالتجربة التعليمية.", has_table: false },
        { topic: "تطبيقات التعلم الآلي", content: "| التطبيق | الفائدة |\n|---|---|\n| التوصيات الذكية | زيادة تفاعل الطلاب |\n| التصحيح الآلي | توفير وقت المعلم |\n| المتابعة التحليلية | تحديد نقاط الضعف مبكراً |", has_table: true }
    ],
    quiz: [
        { question: "ما هو الهدف الرئيسي من استخدام الذكاء الاصطناعي في التعليم؟", options: { A: "تقليل عدد المعلمين", B: "تخصيص تجربة التعلم لكل طالب", C: "إلغاء المدارس التقليدية", D: "تسريع الامتحانات" }, correct_option: "B", explanation: "(B) صحيحة لأن الذكاء الاصطناعي يقدم محتوى مخصص لكل طالب." },
        { question: "أي أداة ليست من تطبيقات الذكاء الاصطناعي؟", options: { A: "ألواح الكتابة الخشبية", B: "أنظمة التصحيح التلقائي", C: "روبوتات المحادثة", D: "منصات التعلم التكيفي" }, correct_option: "A", explanation: "ألواح الكتابة أدوات تقليدية بدون خوارزميات." },
        { question: "كيف تساهم البيانات الضخمة في التعليم؟", options: { A: "تخزين الكتب فقط", B: "تتبع وتحليل أنماط التعلم", C: "استهلاك مساحة أكبر", D: "لا تساهم" }, correct_option: "B", explanation: "تحليل الأنماط يمكّن من توجيه الطلاب بشكل مخصص." }
    ],
    audio_narrative: "أهلاً بك يا بطل في فصل الذكاء الاصطناعي في التعليم. سنتعرف على التخصيص التلقائي واستخدام البيانات لتحليل أداء الطلاب."
};

// ============================================================
// DEMO UPLOAD DATA — completely DIFFERENT content loaded on PDF upload
// ============================================================
const DEMO_UPLOAD_EN = {
    metadata: { chapter_title: "Cybersecurity Fundamentals", key_concepts: ["Encryption", "Firewalls", "Phishing", "Two-Factor Authentication"] },
    structured_summary: [
        { topic: "What is Cybersecurity?", content: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.", has_table: false },
        { topic: "Common Cyber Threats", content: "| Threat | Description |\n|---|---|\n| Phishing | Fake emails tricking users into revealing passwords |\n| Ransomware | Malware that locks files until a ransom is paid |\n| Man-in-the-Middle | Attacker intercepts communication between two parties |\n| SQL Injection | Malicious code inserted into database queries |", has_table: true },
        { topic: "How to Stay Safe", content: "Always use strong, unique passwords. Enable two-factor authentication (2FA) on all accounts. Keep your software updated. Never click suspicious links in emails.", has_table: false }
    ],
    quiz: [
        { question: "What is the primary purpose of encryption?", options: { A: "To make websites load faster", B: "To convert data into unreadable code for unauthorized users", C: "To delete old files automatically", D: "To increase storage space" }, correct_option: "B", explanation: "Encryption converts readable data (plaintext) into unreadable code (ciphertext) so only authorized parties with the decryption key can access it. It does NOT speed up websites or manage storage." },
        { question: "Which of the following is an example of a phishing attack?", options: { A: "A software update from your operating system", B: "A fake email pretending to be your bank asking for your password", C: "A firewall blocking suspicious traffic", D: "A strong password requirement on a website" }, correct_option: "B", explanation: "Phishing involves deceptive communications (usually emails) that impersonate trusted entities to steal credentials. A real OS update (A), firewall (C), and password rules (D) are legitimate security measures." },
        { question: "What does Two-Factor Authentication (2FA) provide?", options: { A: "Two different passwords for the same account", B: "An extra layer of security beyond just a password", C: "Automatic virus removal", D: "Faster login speeds" }, correct_option: "B", explanation: "2FA adds a second verification step (like a code sent to your phone) beyond the password. This means even if someone steals your password, they still cannot access your account without the second factor." },
        { question: "What is a firewall?", options: { A: "A physical wall that protects servers from fire", B: "A network security system that monitors and controls traffic", C: "A type of computer virus", D: "A backup storage device" }, correct_option: "B", explanation: "A firewall is a security system (hardware or software) that monitors incoming and outgoing network traffic and blocks unauthorized access based on security rules." },
        { question: "Which practice is MOST effective against ransomware?", options: { A: "Using the same password everywhere", B: "Never updating your software", C: "Regularly backing up your data", D: "Disabling your antivirus" }, correct_option: "C", explanation: "Regular backups ensure you can restore your data without paying a ransom. The other options (A, B, D) actually INCREASE your vulnerability to ransomware attacks." }
    ],
    audio_narrative: "Welcome to Cybersecurity Fundamentals! In this chapter, we'll explore how to protect yourself online. You'll learn about encryption, firewalls, phishing attacks, and two-factor authentication. Cybersecurity is essential in our digital world — understanding these concepts helps you stay safe from hackers and data breaches. Let's dive in!"
};

const DEMO_UPLOAD_AR = {
    metadata: { chapter_title: "أساسيات الأمن السيبراني", key_concepts: ["التشفير", "جدران الحماية", "التصيد الاحتيالي", "المصادقة الثنائية"] },
    structured_summary: [
        { topic: "ما هو الأمن السيبراني؟", content: "الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والبرامج من الهجمات الرقمية التي تهدف للوصول إلى المعلومات الحساسة أو تغييرها أو تدميرها.", has_table: false },
        { topic: "التهديدات السيبرانية الشائعة", content: "| التهديد | الوصف |\n|---|---|\n| التصيد الاحتيالي | رسائل مزيفة لسرقة كلمات المرور |\n| برامج الفدية | برمجيات تقفل الملفات حتى دفع فدية |\n| هجمات الوسيط | اعتراض الاتصال بين طرفين |\n| حقن SQL | إدخال أكواد خبيثة في قواعد البيانات |", has_table: true },
        { topic: "كيف تحمي نفسك؟", content: "استخدم كلمات مرور قوية وفريدة. فعّل المصادقة الثنائية على جميع حساباتك. حدّث برامجك باستمرار. لا تضغط على روابط مشبوهة في البريد الإلكتروني.", has_table: false }
    ],
    quiz: [
        { question: "ما هو الغرض الرئيسي من التشفير؟", options: { A: "تسريع تحميل المواقع", B: "تحويل البيانات إلى رموز غير مقروءة للمستخدمين غير المصرح لهم", C: "حذف الملفات القديمة تلقائياً", D: "زيادة مساحة التخزين" }, correct_option: "B", explanation: "التشفير يحوّل البيانات المقروءة إلى رموز لا يمكن فهمها إلا بمفتاح فك التشفير. لا علاقة له بسرعة المواقع أو التخزين." },
        { question: "أي مما يلي يعتبر هجوم تصيد احتيالي؟", options: { A: "تحديث نظام التشغيل", B: "بريد مزيف يتظاهر بأنه من البنك ويطلب كلمة المرور", C: "جدار حماية يمنع حركة مرور مشبوهة", D: "متطلبات كلمة مرور قوية" }, correct_option: "B", explanation: "التصيد يتضمن رسائل خادعة تنتحل صفة جهات موثوقة لسرقة بياناتك. الخيارات الأخرى إجراءات أمنية حقيقية." },
        { question: "ماذا توفر المصادقة الثنائية؟", options: { A: "كلمتي مرور مختلفتين", B: "طبقة أمان إضافية فوق كلمة المرور", C: "إزالة الفيروسات تلقائياً", D: "تسجيل دخول أسرع" }, correct_option: "B", explanation: "المصادقة الثنائية تضيف خطوة تحقق ثانية (مثل رمز يُرسل لهاتفك) فحتى لو سُرقت كلمة مرورك، لن يتمكن أحد من الدخول." },
        { question: "ما هو جدار الحماية (Firewall)؟", options: { A: "جدار مادي يحمي الخوادم من الحريق", B: "نظام أمن شبكي يراقب ويتحكم في حركة البيانات", C: "نوع من الفيروسات", D: "جهاز تخزين احتياطي" }, correct_option: "B", explanation: "جدار الحماية هو نظام أمني يراقب حركة البيانات الواردة والصادرة ويمنع الوصول غير المصرح به." },
        { question: "ما أفضل ممارسة ضد برامج الفدية؟", options: { A: "استخدام نفس كلمة المرور في كل مكان", B: "عدم تحديث البرامج أبداً", C: "عمل نسخ احتياطية منتظمة للبيانات", D: "تعطيل مضاد الفيروسات" }, correct_option: "C", explanation: "النسخ الاحتياطية المنتظمة تضمن استعادة بياناتك دون دفع فدية. الخيارات الأخرى تزيد من تعرضك للخطر." }
    ],
    audio_narrative: "أهلاً بك في فصل أساسيات الأمن السيبراني! سنتعرف على كيفية حماية نفسك من الهجمات الإلكترونية، بما في ذلك التشفير وجدران الحماية وهجمات التصيد والمصادقة الثنائية. فهم هذه المفاهيم ضروري للبقاء آمناً في عالمنا الرقمي."
};

// ============================================================
// i18n STRINGS
// ============================================================
const I18N = {
    en: {
        greetingTitle: "Welcome, Champion! 👋",
        greetingSub: "Ready for a new learning journey?",
        uploadBtn: "Upload your new book (PDF)",
        resumeTitle: "Resume where you left off",
        libraryTitle: "Your Library",
        progressSub: "% of questions completed",
        audioSummary: "Audio Summary",
        startQuiz: "Start Quiz Now",
        nextQuestion: "Next Question",
        speechLang: "en-US",
        excellent: "Excellent answer!",
        goodTry: "Good try, the correct answer is",
        completedMsg: "Quiz finished, Champion! Your score: ",
        recentBooks: [
            { title: "Data Science Fundamentals", progress: 100 },
            { title: "Introduction to Modern Physics", progress: 40 }
        ]
    },
    ar: {
        greetingTitle: "أهلاً بك يا بطل! 👋",
        greetingSub: "جاهز لرحلة تعليمية جديدة؟",
        uploadBtn: "ارفع كتابك الجديد (PDF)",
        resumeTitle: "أكمل من حيث توقفت",
        libraryTitle: "مكتبتك",
        progressSub: "% من الأسئلة مكتملة",
        audioSummary: "الملخص الصوتي",
        startQuiz: "ابدأ الاختبار الآن",
        nextQuestion: "السؤال التالي",
        speechLang: "ar-SA",
        excellent: "إجابة ممتازة!",
        goodTry: "محاولة جيدة، الإجابة الصحيحة هي",
        completedMsg: "انتهى الاختبار يا بطل! نتيجتك: ",
        recentBooks: [
            { title: "أساسيات علم البيانات", progress: 100 },
            { title: "مقدمة في الفيزياء الحديثة", progress: 40 }
        ]
    }
};

// ============================================================
// MAIN APP
// ============================================================
const app = {
    state: {
        lang: "en",
        activeBook: null,
        currentQuizIndex: 0,
        score: 0,
        audioPlaying: false,
        synthInterval: null
    },

    // ── INIT ──────────────────────────────────────────────
    init() {
        this.state.activeBook = DEFAULT_BOOK_EN;
        this.applyLanguage();

        document.getElementById("listen-question-btn").addEventListener("click", () => {
            const q = this.state.activeBook.quiz[this.state.currentQuizIndex];
            if (q) this.speakText(q.question);
        });

        document.getElementById("play-summary-btn").addEventListener("click", () => this.toggleAudio());
    },

    // ── LANGUAGE ──────────────────────────────────────────
    toggleLanguage() {
        this.state.lang = this.state.lang === "en" ? "ar" : "en";
        document.documentElement.lang = this.state.lang;
        document.documentElement.dir = this.state.lang === "ar" ? "rtl" : "ltr";
        this.stopAudio();

        // Switch built-in books with language — keep uploaded books as-is
        if (this.state.activeBook === DEFAULT_BOOK_EN || this.state.activeBook === DEFAULT_BOOK_AR) {
            this.state.activeBook = this.state.lang === "en" ? DEFAULT_BOOK_EN : DEFAULT_BOOK_AR;
        } else if (this.state.activeBook === DEMO_UPLOAD_EN || this.state.activeBook === DEMO_UPLOAD_AR) {
            this.state.activeBook = this.state.lang === "en" ? DEMO_UPLOAD_EN : DEMO_UPLOAD_AR;
        }
        // Custom JSON uploads stay as-is (no language variant)

        this.applyLanguage();
        if (document.getElementById("study-hub-screen").classList.contains("active")) this.renderStudyHub();
        if (document.getElementById("quiz-screen").classList.contains("active")) this.renderQuestion();
    },

    applyLanguage() {
        const t = I18N[this.state.lang];
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (t[key] !== undefined) el.innerText = t[key];
        });
        this.renderHome();
        if (this.state.activeBook) {
            document.getElementById("hub-chapter-title").innerText = this.state.activeBook.metadata.chapter_title;
            document.getElementById("resume-chapter-name").innerText = this.state.activeBook.metadata.chapter_title;
        }
    },

    // ── NAVIGATION ────────────────────────────────────────
    navigateTo(screenId) {
        this.stopAudio();
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById(screenId + "-screen").classList.add("active");
        window.scrollTo(0, 0);
        if (screenId === "study-hub") this.renderStudyHub();
    },

    // ── HOME ──────────────────────────────────────────────
    renderHome() {
        const t = I18N[this.state.lang];
        document.getElementById("recent-list").innerHTML = t.recentBooks.map(book => `
            <div class="book-item">
                <div class="book-icon"><i class="fas fa-file-pdf"></i></div>
                <div class="book-details">
                    <h4>${book.title}</h4>
                    <div class="progress-track"><div class="progress-fill" style="width:${book.progress}%"></div></div>
                    <span class="progress-text">${book.progress}${t.progressSub}</span>
                </div>
            </div>`).join("");
    },

    // ── FILE UPLOAD ───────────────────────────────────────
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        event.target.value = "";

        const ext = file.name.toLowerCase().split(".").pop();

        if (ext === "json") {
            // ── JSON Upload: parse and load directly ──
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.metadata && data.structured_summary && data.quiz && data.audio_narrative) {
                        this.setActiveBook(data);
                    } else {
                        alert(this.state.lang === "ar"
                            ? "❌ ملف JSON لا يحتوي على الحقول المطلوبة"
                            : "❌ JSON file missing required fields (metadata, structured_summary, quiz, audio_narrative)");
                    }
                } catch (err) {
                    alert("❌ Error reading JSON: " + err.message);
                }
            };
            reader.readAsText(file);

        } else if (ext === "pdf") {
            // ── PDF Upload: simulate AI processing, load DIFFERENT demo content ──
            this.showOverlay(true);
            setTimeout(() => {
                this.showOverlay(false);
                // Load DIFFERENT content (Cybersecurity) so user sees a visible change
                const demoData = this.state.lang === "ar" ? DEMO_UPLOAD_AR : DEMO_UPLOAD_EN;
                this.setActiveBook(demoData);
            }, 2000);

        } else {
            alert(this.state.lang === "ar" ? "يرجى رفع ملف PDF أو JSON" : "Please upload a PDF or JSON file");
        }
    },

    // ★ SINGLE function that switches the active book ★
    setActiveBook(data) {
        this.state.activeBook = data;
        this.state.currentQuizIndex = 0;
        this.state.score = 0;

        const t = I18N[this.state.lang];
        t.recentBooks.unshift({ title: data.metadata.chapter_title, progress: 0 });

        this.renderHome();
        document.getElementById("resume-chapter-name").innerText = data.metadata.chapter_title;
        this.navigateTo("study-hub");
    },

    showOverlay(show) {
        let ov = document.getElementById("processing-overlay");
        if (show && !ov) {
            ov = document.createElement("div");
            ov.id = "processing-overlay";
            ov.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center";
            ov.innerHTML = `<div style="background:#fff;border-radius:20px;padding:40px;text-align:center;font-family:'Cairo',sans-serif;font-weight:700;font-size:1.1rem">
                <div style="width:48px;height:48px;border:5px solid #E2E8F0;border-top-color:#2563EB;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 16px"></div>
                ${this.state.lang === "ar" ? "جاري تحليل الملف..." : "Analyzing file..."}</div>`;
            if (!document.getElementById("spin-css")) {
                const s = document.createElement("style"); s.id = "spin-css";
                s.textContent = "@keyframes spin{to{transform:rotate(360deg)}}";
                document.head.appendChild(s);
            }
            document.body.appendChild(ov);
        } else if (!show && ov) { ov.remove(); }
    },

    // ── STUDY HUB ─────────────────────────────────────────
    renderStudyHub() {
        const data = this.state.activeBook;
        if (!data) return;
        document.getElementById("hub-chapter-title").innerText = data.metadata.chapter_title;

        let html = "";
        data.structured_summary.forEach(item => {
            html += "<h3>" + item.topic + "</h3>";
            html += item.has_table ? marked.parse(item.content) : "<p>" + item.content + "</p>";
        });
        document.getElementById("summary-content").innerHTML = html;

        // Reset audio bar
        const bar = document.querySelector(".timeline .progress");
        if (bar) bar.style.width = "0%";
        const btn = document.getElementById("play-summary-btn");
        if (btn) btn.innerHTML = '<i class="fas fa-play directional-icon"></i>';
    },

    // ── AUDIO ─────────────────────────────────────────────
    toggleAudio() {
        if (this.state.audioPlaying) { this.stopAudio(); return; }

        const data = this.state.activeBook;
        if (!data || !data.audio_narrative) return;

        this.state.audioPlaying = true;
        const btn = document.getElementById("play-summary-btn");
        const bar = document.querySelector(".timeline .progress");
        btn.innerHTML = '<i class="fas fa-pause"></i>';

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(data.audio_narrative);
            u.lang = I18N[this.state.lang].speechLang;
            u.rate = 0.9;
            u.onend = () => { this.stopAudio(); if (bar) bar.style.width = "100%"; };
            u.onerror = () => this.stopAudio();
            window.speechSynthesis.speak(u);

            let w = 0;
            const step = 100 / (data.audio_narrative.length * 0.65);
            this.state.synthInterval = setInterval(() => {
                w = Math.min(w + step, 99);
                if (bar) bar.style.width = w + "%";
            }, 100);
        } else {
            let w = 0;
            this.state.synthInterval = setInterval(() => {
                w += 1.5; if (bar) bar.style.width = w + "%";
                if (w >= 100) this.stopAudio();
            }, 100);
        }
    },

    stopAudio() {
        this.state.audioPlaying = false;
        clearInterval(this.state.synthInterval); this.state.synthInterval = null;
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        const btn = document.getElementById("play-summary-btn");
        if (btn) btn.innerHTML = '<i class="fas fa-play directional-icon"></i>';
    },

    speakText(text) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = I18N[this.state.lang].speechLang;
            window.speechSynthesis.speak(u);
        }
    },

    // ── QUIZ ──────────────────────────────────────────────
    startQuiz() {
        const data = this.state.activeBook;
        if (!data || !data.quiz || data.quiz.length === 0) {
            alert(this.state.lang === "ar" ? "لا توجد أسئلة" : "No quiz questions found.");
            return;
        }
        this.state.currentQuizIndex = 0;
        this.state.score = 0;
        document.getElementById("feedback-modal").className = "feedback-modal";
        this.navigateTo("quiz");
        this.renderQuestion();
    },

    renderQuestion() {
        const data = this.state.activeBook;
        const t = I18N[this.state.lang];
        if (!data || !data.quiz) return;

        const idx = this.state.currentQuizIndex;
        const total = data.quiz.length;
        const q = data.quiz[idx];
        if (!q) return;

        document.getElementById("quiz-counter").innerText = (idx + 1) + " / " + total;
        document.getElementById("quiz-progress").style.width = (idx / total * 100) + "%";
        document.getElementById("next-question-btn").style.display = "none";
        document.getElementById("feedback-modal").className = "feedback-modal";

        const qEl = document.getElementById("quiz-question-text");
        qEl.innerText = q.question;
        qEl.parentElement.classList.remove("slide-in");
        void qEl.parentElement.offsetWidth;
        qEl.parentElement.classList.add("slide-in");

        const opts = document.getElementById("quiz-options");
        opts.innerHTML = "";
        opts.classList.remove("slide-in");
        void opts.offsetWidth;
        opts.classList.add("slide-in");

        Object.entries(q.options).forEach(([key, val], i) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.style.animationDelay = (i * 0.08) + "s";
            btn.innerHTML = '<span class="opt-letter">' + key + '</span><span>' + val + '</span>';
            btn.addEventListener("click", () => this.handleAnswer(key, btn, q));
            opts.appendChild(btn);
        });

        document.getElementById("next-question-btn").onclick = () => {
            if (idx < total - 1) { this.state.currentQuizIndex++; this.renderQuestion(); }
            else {
                document.getElementById("quiz-progress").style.width = "100%";
                setTimeout(() => { alert(t.completedMsg + this.state.score + " / " + total); this.navigateTo("home"); }, 400);
            }
        };
    },

    handleAnswer(key, btnEl, q) {
        const btns = document.querySelectorAll(".option-btn");
        if ([...btns].some(b => b.classList.contains("disabled"))) return;
        btns.forEach(b => b.classList.add("disabled"));

        const correct = key === q.correct_option;
        const t = I18N[this.state.lang];

        if (correct) {
            btnEl.classList.add("selected-correct");
            this.state.score++;
            this.showFeedback(true, t.excellent, q.explanation);
        } else {
            btnEl.classList.add("selected-wrong");
            setTimeout(() => {
                const cb = [...btns].find(b => b.querySelector(".opt-letter")?.innerText === q.correct_option);
                if (cb) cb.classList.add("selected-correct");
            }, 300);
            this.showFeedback(false, t.goodTry + " (" + q.correct_option + ")", q.explanation);
        }

        document.getElementById("next-question-btn").style.display = "flex";
        const total = this.state.activeBook.quiz.length;
        document.getElementById("quiz-progress").style.width = ((this.state.currentQuizIndex + 1) / total * 100) + "%";
    },

    showFeedback(ok, title, explanation) {
        setTimeout(() => {
            const m = document.getElementById("feedback-modal");
            m.className = "feedback-modal show " + (ok ? "correct" : "wrong");
            document.getElementById("feedback-icon").innerHTML = ok ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';
            document.getElementById("feedback-title").innerText = title;
            document.getElementById("feedback-explanation").innerText = explanation;
        }, 250);
    }
};

document.addEventListener("DOMContentLoaded", () => app.init());
