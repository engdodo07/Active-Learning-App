// ============================================================
// MOCK DATA — used as default content when no file is uploaded
// ============================================================
const MOCK_DATA_AR = {
    metadata: { chapter_title: "الذكاء الاصطناعي في التعليم", key_concepts: ["تعلم الآلة", "البيانات الضخمة", "التخصيص"] },
    structured_summary: [
        { topic: "مقدمة ملهمة", content: "الذكاء الاصطناعي هو قدرة الآلات والأنظمة على محاكاة القدرات الذهنية للبشر، مثل القدرة على التعلم والاستنتاج، للارتقاء بالتجربة التعليمية.", has_table: false },
        { topic: "تطبيقات التعلم الآلي", content: "| التطبيق | الفائدة |\n|---|---|\n| التوصيات الذكية | زيادة تفاعل الطلاب بمحتوى مخصص |\n| التصحيح الآلي | توفير وقت المعلم للمهام الإبداعية |\n| المتابعة التحليلية | تحديد نقاط الضعف مبكراً |", has_table: true }
    ],
    quiz: [
        {
            question: "ما هو الهدف الرئيسي من استخدام الذكاء الاصطناعي في التعليم بشكل فعال؟",
            options: { A: "تقليل عدد المعلمين بالمدارس", B: "تخصيص تجربة التعلم لكل طالب", C: "إلغاء المدارس التقليدية", D: "تسريع وتيرة الامتحانات اليومية" },
            correct_option: "B",
            explanation: "الذكاء الاصطناعي يساعد في تقديم محتوى مخصص يناسب كل طالب، لذا (B) هي الإجابة الصحيحة. باقي الخيارات لا تمثل هدفاً تربوياً سليماً."
        },
        {
            question: "أي من الأدوات التالية لا يعتبر تطبيقاً للذكاء الاصطناعي في الفصول الدراسية؟",
            options: { A: "ألواح الكتابة العادية الخشبية", B: "أنظمة التصحيح التلقائي", C: "روبوتات المحادثة", D: "منصات التعلم التكيفي" },
            correct_option: "A",
            explanation: "ألواح الكتابة التقليدية لا تحتوي على أي خوارزميات، على عكس باقي الخيارات التي تعتمد على الذكاء الاصطناعي."
        },
        {
            question: "كيف تساهم البيانات الضخمة في تحسين العملية التعليمية؟",
            options: { A: "عن طريق تخزين ملايين الكتب فقط", B: "عبر تتبع وتحليل أنماط تعلم الطلاب", C: "من خلال استهلاك مساحة تخزين أكبر", D: "لا تساهم في التعليم" },
            correct_option: "B",
            explanation: "تحليل أنماط الطلاب يمكّن الأنظمة من توجيههم وتقديم محتوى متخصص يتوقع تحدياتهم."
        }
    ],
    audio_narrative: "أهلاً بك يا بطل في فصل الذكاء الاصطناعي في التعليم. سنتعرف على كيفية إحداث ثورة في طرق التعلم، من خلال التخصيص التلقائي للمحتوى واستخدام البيانات لتحليل أداء الطلاب وتحسين تجربتهم."
};

const MOCK_DATA_EN = {
    metadata: { chapter_title: "AI in Education", key_concepts: ["Machine Learning", "Big Data", "Personalization"] },
    structured_summary: [
        { topic: "Inspiring Introduction", content: "Artificial Intelligence is the simulation of human intelligence processes by machines and computer systems, used to elevate the educational experience.", has_table: false },
        { topic: "Machine Learning Applications", content: "| Application | Benefit |\n|---|---|\n| Smart Recommendations | Increase engagement with tailored content |\n| Automated Grading | Save teacher time for creative tasks |\n| Analytical Tracking | Identify weaknesses early |", has_table: true }
    ],
    quiz: [
        {
            question: "What is the primary goal of effectively using AI in education?",
            options: { A: "Reducing teachers in schools", B: "Personalizing the learning experience", C: "Abolishing traditional schools", D: "Accelerating daily exams" },
            correct_option: "B",
            explanation: "AI helps analyze student data to provide tailored content. Thus (B) is correct. The other options do not represent sound educational goals."
        },
        {
            question: "Which of the following is NOT an application of AI in classrooms?",
            options: { A: "Standard wooden whiteboards", B: "Accurate auto-grading systems", C: "Chatbots for instant answers", D: "Smart adaptive learning platforms" },
            correct_option: "A",
            explanation: "Standard whiteboards are traditional tools with no algorithms or machine learning, unlike the other options."
        },
        {
            question: "How does Big Data contribute to improving education?",
            options: { A: "By storing millions of books", B: "By tracking and analyzing student learning patterns", C: "By consuming more storage", D: "It doesn't contribute to education" },
            correct_option: "B",
            explanation: "Analyzing student patterns enables systems to guide students, provide specialized content, and anticipate challenges."
        }
    ],
    audio_narrative: "Welcome, Champion, to the AI in Education chapter. We will explore how to revolutionize learning through automatic content personalization and data-driven analysis of student performance to create a better educational experience."
};

// ============================================================
// i18n STRINGS — UI labels per language
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
// MAIN APP OBJECT
// ============================================================
const app = {
    // --- STATE ---
    state: {
        lang: "en",             // Current UI language
        activeBook: null,       // The currently loaded book data object
        currentQuizIndex: 0,
        score: 0,
        audioPlaying: false,
        synthInterval: null,
        utterance: null         // Keep reference to cancel cleanly
    },

    // ── INIT ──────────────────────────────────────────────────
    init() {
        // Set first book as the default active book
        this.state.activeBook = MOCK_DATA_EN;
        this.applyLanguage();
        // Wire up the listen-to-question button
        document.getElementById("listen-question-btn").addEventListener("click", () => {
            const q = this.state.activeBook.quiz[this.state.currentQuizIndex];
            if (q) this.speakText(q.question);
        });
        // Wire up play button
        document.getElementById("play-summary-btn").addEventListener("click", () => this.toggleAudio());
    },

    // ── LANGUAGE ──────────────────────────────────────────────
    toggleLanguage() {
        this.state.lang = this.state.lang === "en" ? "ar" : "en";
        document.documentElement.lang = this.state.lang;
        document.documentElement.dir = this.state.lang === "ar" ? "rtl" : "ltr";
        this.stopAudio();
        // If the active book is one of the built-in mock books, switch language variant
        if (this.state.activeBook === MOCK_DATA_EN || this.state.activeBook === MOCK_DATA_AR) {
            this.state.activeBook = this.state.lang === "en" ? MOCK_DATA_EN : MOCK_DATA_AR;
        }
        this.applyLanguage();
        // Re-render the current screen if it needs it
        if (document.getElementById("study-hub-screen").classList.contains("active")) this.renderStudyHub();
        if (document.getElementById("quiz-screen").classList.contains("active")) this.renderQuestion();
    },

    applyLanguage() {
        const t = I18N[this.state.lang];
        // Update all static labels
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (t[key] !== undefined) el.innerText = t[key];
        });
        this.renderHome();
        // Update dynamic chapter title references
        if (this.state.activeBook) {
            document.getElementById("hub-chapter-title").innerText = this.state.activeBook.metadata.chapter_title;
            document.getElementById("resume-chapter-name").innerText = this.state.activeBook.metadata.chapter_title;
        }
    },

    // ── NAVIGATION ────────────────────────────────────────────
    navigateTo(screenId) {
        this.stopAudio();
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById(`${screenId}-screen`).classList.add("active");
        window.scrollTo(0, 0);
        if (screenId === "study-hub") this.renderStudyHub();
    },

    // ── HOME SCREEN ───────────────────────────────────────────
    renderHome() {
        const t = I18N[this.state.lang];
        const list = document.getElementById("recent-list");
        list.innerHTML = t.recentBooks.map(book => `
            <div class="book-item">
                <div class="book-icon"><i class="fas fa-file-pdf"></i></div>
                <div class="book-details">
                    <h4>${book.title}</h4>
                    <div class="progress-track">
                        <div class="progress-fill" style="width:${book.progress}%"></div>
                    </div>
                    <span class="progress-text">${book.progress}${t.progressSub}</span>
                </div>
            </div>
        `).join("");
    },

    // ── FILE UPLOAD ───────────────────────────────────────────
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        event.target.value = ""; // allow re-upload of same file

        if (file.name.toLowerCase().endsWith(".json")) {
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.metadata && data.structured_summary && data.quiz && data.audio_narrative) {
                        this.loadBook(data, data.metadata.chapter_title);
                    } else {
                        this.showAlert(this.state.lang === "ar"
                            ? "❌ ملف JSON لا يحتوي على الحقول المطلوبة (metadata, structured_summary, quiz, audio_narrative)"
                            : "❌ JSON file is missing required fields (metadata, structured_summary, quiz, audio_narrative)");
                    }
                } catch (err) {
                    this.showAlert("❌ Error reading JSON: " + err.message);
                }
            };
            reader.readAsText(file);

        } else if (file.name.toLowerCase().endsWith(".pdf")) {
            // Simulated PDF processing — in a real app this calls an AI backend
            this.showProcessingOverlay(true);
            setTimeout(() => {
                this.showProcessingOverlay(false);
                // For demo, load the current language mock as the "result"
                const simulatedResult = this.state.lang === "ar" ? MOCK_DATA_AR : MOCK_DATA_EN;
                this.loadBook(simulatedResult, file.name.replace(".pdf", ""));
            }, 2000);

        } else {
            this.showAlert(this.state.lang === "ar"
                ? "يرجى رفع ملف PDF أو JSON"
                : "Please upload a PDF or JSON file");
        }
    },

    loadBook(data, titleOverride) {
        // ★ THIS is the single source of truth for switching books ★
        this.state.activeBook = data;
        this.state.currentQuizIndex = 0;
        this.state.score = 0;

        const t = I18N[this.state.lang];
        const title = titleOverride || data.metadata.chapter_title;
        t.recentBooks.unshift({ title, progress: 0 });

        this.renderHome();
        document.getElementById("resume-chapter-name").innerText = title;
        this.navigateTo("study-hub");
    },

    showProcessingOverlay(show) {
        let overlay = document.getElementById("processing-overlay");
        if (show) {
            if (!overlay) {
                overlay = document.createElement("div");
                overlay.id = "processing-overlay";
                overlay.innerHTML = `
                    <div class="overlay-box">
                        <div class="spinner"></div>
                        <p>${this.state.lang === "ar" ? "جاري تحليل الملف..." : "Analyzing file..."}</p>
                    </div>`;
                overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;";
                overlay.querySelector(".overlay-box").style.cssText = "background:white;border-radius:20px;padding:40px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px;font-family:'Cairo',sans-serif;font-size:1.1rem;font-weight:700;";
                overlay.querySelector(".spinner").style.cssText = "width:48px;height:48px;border:5px solid #E2E8F0;border-top-color:#2563EB;border-radius:50%;animation:spin 0.8s linear infinite;";
                if (!document.getElementById("spin-style")) {
                    const style = document.createElement("style");
                    style.id = "spin-style";
                    style.textContent = "@keyframes spin{to{transform:rotate(360deg)}}";
                    document.head.appendChild(style);
                }
                document.body.appendChild(overlay);
            }
        } else {
            if (overlay) overlay.remove();
        }
    },

    showAlert(msg) {
        alert(msg);
    },

    // ── STUDY HUB ─────────────────────────────────────────────
    renderStudyHub() {
        const data = this.state.activeBook;
        if (!data) return;

        document.getElementById("hub-chapter-title").innerText = data.metadata.chapter_title;

        const summaryDiv = document.getElementById("summary-content");
        let html = "";
        data.structured_summary.forEach(item => {
            html += `<h3>${item.topic}</h3>`;
            html += item.has_table ? marked.parse(item.content) : `<p>${item.content}</p>`;
        });
        summaryDiv.innerHTML = html;

        // Reset audio player visual state for new book
        const timelineProgress = document.querySelector(".timeline .progress");
        if (timelineProgress) timelineProgress.style.width = "0%";
        const playBtn = document.getElementById("play-summary-btn");
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-play directional-icon"></i>';
    },

    // ── AUDIO ─────────────────────────────────────────────────
    toggleAudio() {
        if (this.state.audioPlaying) {
            this.stopAudio();
            return;
        }

        const data = this.state.activeBook;
        if (!data || !data.audio_narrative) return;

        this.state.audioPlaying = true;
        const btn = document.getElementById("play-summary-btn");
        const progress = document.querySelector(".timeline .progress");
        btn.innerHTML = '<i class="fas fa-pause"></i>';

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel(); // Cancel any previous

            const utterance = new SpeechSynthesisUtterance(data.audio_narrative);
            utterance.lang = I18N[this.state.lang].speechLang;
            utterance.rate = 0.9;
            this.state.utterance = utterance;

            utterance.onend = () => {
                this.stopAudio();
                if (progress) progress.style.width = "100%";
            };
            utterance.onerror = () => this.stopAudio();

            window.speechSynthesis.speak(utterance);

            // Visual progress bar simulation
            let w = 0;
            const totalMs = data.audio_narrative.length * 65; // rough estimate
            const step = 100 / (totalMs / 100);
            this.state.synthInterval = setInterval(() => {
                w = Math.min(w + step, 99); // cap at 99 until onend fires
                if (progress) progress.style.width = w + "%";
            }, 100);

        } else {
            // Fallback: just animate bar without TTS
            let w = 0;
            this.state.synthInterval = setInterval(() => {
                w += 1.5;
                if (progress) progress.style.width = w + "%";
                if (w >= 100) this.stopAudio();
            }, 100);
        }
    },

    stopAudio() {
        this.state.audioPlaying = false;
        clearInterval(this.state.synthInterval);
        this.state.synthInterval = null;
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        this.state.utterance = null;
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

    // ── QUIZ ──────────────────────────────────────────────────
    startQuiz() {
        const data = this.state.activeBook;
        if (!data || !data.quiz || data.quiz.length === 0) {
            this.showAlert(this.state.lang === "ar" ? "لا توجد أسئلة في هذا الكتاب" : "No quiz questions found for this book.");
            return;
        }
        this.state.currentQuizIndex = 0;
        this.state.score = 0;
        // Hide feedback modal first
        const modal = document.getElementById("feedback-modal");
        modal.className = "feedback-modal";
        this.navigateTo("quiz");
        this.renderQuestion();
    },

    renderQuestion() {
        const data = this.state.activeBook;
        const t = I18N[this.state.lang];
        if (!data || !data.quiz) return;

        const qIndex = this.state.currentQuizIndex;
        const total = data.quiz.length;
        const questionData = data.quiz[qIndex];
        if (!questionData) return;

        // Header counters
        document.getElementById("quiz-counter").innerText = `${qIndex + 1} / ${total}`;
        document.getElementById("quiz-progress").style.width = `${(qIndex / total) * 100}%`;

        // Reset modal + next button
        document.getElementById("next-question-btn").style.display = "none";
        document.getElementById("feedback-modal").className = "feedback-modal";

        // Question text with slide-in animation
        const qTextEl = document.getElementById("quiz-question-text");
        qTextEl.innerText = questionData.question;
        qTextEl.parentElement.classList.remove("slide-in");
        void qTextEl.parentElement.offsetWidth; // force reflow
        qTextEl.parentElement.classList.add("slide-in");

        // Options
        const optContainer = document.getElementById("quiz-options");
        optContainer.innerHTML = "";
        optContainer.classList.remove("slide-in");
        void optContainer.offsetWidth;
        optContainer.classList.add("slide-in");

        Object.entries(questionData.options).forEach(([key, val], idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.style.animationDelay = `${idx * 0.08}s`;
            btn.innerHTML = `<span class="opt-letter">${key}</span><span>${val}</span>`;
            btn.addEventListener("click", () => this.handleAnswer(key, btn, questionData));
            optContainer.appendChild(btn);
        });

        // Next button handler (fresh assignment each question)
        const nextBtn = document.getElementById("next-question-btn");
        nextBtn.onclick = () => {
            if (this.state.currentQuizIndex < total - 1) {
                this.state.currentQuizIndex++;
                this.renderQuestion();
            } else {
                document.getElementById("quiz-progress").style.width = "100%";
                setTimeout(() => {
                    this.showAlert(`${t.completedMsg}${this.state.score} / ${total}`);
                    this.navigateTo("home");
                }, 400);
            }
        };
    },

    handleAnswer(selectedKey, btnElement, questionData) {
        // Block if already answered
        const buttons = document.querySelectorAll(".option-btn");
        if ([...buttons].some(b => b.classList.contains("disabled"))) return;

        // Disable all options
        buttons.forEach(b => b.classList.add("disabled"));

        const isCorrect = selectedKey === questionData.correct_option;
        const t = I18N[this.state.lang];

        if (isCorrect) {
            btnElement.classList.add("selected-correct");
            this.state.score++;
            this.showFeedback(true, t.excellent, questionData.explanation);
        } else {
            btnElement.classList.add("selected-wrong");
            // Highlight correct button after short delay
            setTimeout(() => {
                const correctBtn = [...buttons].find(b =>
                    b.querySelector(".opt-letter")?.innerText === questionData.correct_option
                );
                if (correctBtn) correctBtn.classList.add("selected-correct");
            }, 300);
            this.showFeedback(false, `${t.goodTry} (${questionData.correct_option})`, questionData.explanation);
        }

        // Show next button and update progress
        document.getElementById("next-question-btn").style.display = "flex";
        const total = this.state.activeBook.quiz.length;
        document.getElementById("quiz-progress").style.width = `${((this.state.currentQuizIndex + 1) / total) * 100}%`;
    },

    showFeedback(isCorrect, title, explanation) {
        setTimeout(() => {
            const modal = document.getElementById("feedback-modal");
            modal.className = `feedback-modal show ${isCorrect ? "correct" : "wrong"}`;
            document.getElementById("feedback-icon").innerHTML = isCorrect
                ? '<i class="fas fa-check-circle"></i>'
                : '<i class="fas fa-times-circle"></i>';
            document.getElementById("feedback-title").innerText = title;
            document.getElementById("feedback-explanation").innerText = explanation;
        }, 250);
    }
};

// ── BOOTSTRAP ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
