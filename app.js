// ============================================================
// pdf.js worker setup
// ============================================================
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ============================================================
// i18n
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
        apiKeyDesc: "Enter your Google Gemini API key to enable AI-powered analysis.",
        saveKey: "Save",
        recentBooks: []
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
        apiKeyDesc: "أدخل مفتاح Google Gemini API لتفعيل التحليل بالذكاء الاصطناعي.",
        saveKey: "حفظ",
        recentBooks: []
    }
};

// ============================================================
// GEMINI API PROMPT
// ============================================================
function buildAIPrompt(text, lang) {
    const langInstruction = lang === "ar"
        ? "IMPORTANT: Generate ALL content (summary, quiz questions, options, explanations, and audio narrative) in Arabic."
        : "IMPORTANT: Generate ALL content in English.";

    return `You are an elite AI Instructional Designer. Analyze the following text extracted from a PDF book and transform it into a structured learning module.

${langInstruction}

Instructions:
1. Content Analysis: Identify the core concepts, definitions, key ideas, and any tables/data.
2. Summary Generation: Create a structured summary. Use Markdown for tables.
3. Quiz Engineering: Generate 5–10 multiple-choice questions that test understanding, not just recall. Each question must have a detailed explanation.
4. Audio Script: Write a conversational, easy-to-listen summary script (150–300 words).

You MUST respond with ONLY valid JSON in this exact format, no extra text:
{
  "metadata": { "chapter_title": "string", "key_concepts": ["list"] },
  "structured_summary": [
    { "topic": "string", "content": "markdown_text", "has_table": false }
  ],
  "quiz": [
    {
      "question": "string",
      "options": { "A": "string", "B": "string", "C": "string", "D": "string" },
      "correct_option": "A or B or C or D",
      "explanation": "Detailed explanation"
    }
  ],
  "audio_narrative": "Conversational script for text-to-speech (150-300 words)"
}

Here is the extracted text from the book:
---
${text.substring(0, 30000)}
---`;
}

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
        // Load saved API key
        const savedKey = localStorage.getItem("gemini_api_key");
        if (!savedKey) {
            // Pre-fill with the provided key
            localStorage.setItem("gemini_api_key", "AIzaSyBFlBYhwp56Eb-Sf-LODgc8D7pmlBzEDiY");
        }

        // Load saved books from localStorage
        const savedBooks = localStorage.getItem("recentBooks");
        if (savedBooks) {
            try {
                const books = JSON.parse(savedBooks);
                I18N.en.recentBooks = books;
                I18N.ar.recentBooks = books;
            } catch (e) { }
        }

        this.applyLanguage();
        document.getElementById("listen-question-btn").addEventListener("click", () => {
            if (this.state.activeBook && this.state.activeBook.quiz) {
                const q = this.state.activeBook.quiz[this.state.currentQuizIndex];
                if (q) this.speakText(q.question);
            }
        });
        document.getElementById("play-summary-btn").addEventListener("click", () => this.toggleAudio());
    },

    // ── LANGUAGE ──────────────────────────────────────────
    toggleLanguage() {
        this.state.lang = this.state.lang === "en" ? "ar" : "en";
        document.documentElement.lang = this.state.lang;
        document.documentElement.dir = this.state.lang === "ar" ? "rtl" : "ltr";
        this.stopAudio();
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
            document.getElementById("resume-section").style.display = "block";
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
        const list = document.getElementById("recent-list");
        if (t.recentBooks.length === 0) {
            list.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:32px 0;font-weight:600">
                ${this.state.lang === "ar" ? "لم يتم رفع أي كتب بعد. ارفع أول كتاب الآن!" : "No books uploaded yet. Upload your first book!"}
            </p>`;
            return;
        }
        list.innerHTML = t.recentBooks.map((book, idx) => `
            <div class="book-item" style="cursor:pointer" onclick="app.loadSavedBook(${idx})">
                <div class="book-icon"><i class="fas fa-file-pdf"></i></div>
                <div class="book-details">
                    <h4>${book.title}</h4>
                    <div class="progress-track"><div class="progress-fill" style="width:${book.progress}%"></div></div>
                    <span class="progress-text">${book.progress}${t.progressSub}</span>
                </div>
            </div>`).join("");
    },

    loadSavedBook(idx) {
        const t = I18N[this.state.lang];
        const book = t.recentBooks[idx];
        if (book && book.data) {
            this.state.activeBook = book.data;
            this.state.currentQuizIndex = 0;
            this.state.score = 0;
            document.getElementById("resume-chapter-name").innerText = book.title;
            document.getElementById("resume-section").style.display = "block";
            this.navigateTo("study-hub");
        }
    },

    // ── API KEY MODAL ─────────────────────────────────────
    showApiKeyModal() {
        const modal = document.getElementById("apikey-modal");
        const input = document.getElementById("apikey-input");
        input.value = localStorage.getItem("gemini_api_key") || "";
        modal.style.display = "flex";
    },

    hideApiKeyModal() {
        document.getElementById("apikey-modal").style.display = "none";
    },

    saveApiKey() {
        const key = document.getElementById("apikey-input").value.trim();
        if (key) {
            localStorage.setItem("gemini_api_key", key);
            this.hideApiKeyModal();
            alert(this.state.lang === "ar" ? "✅ تم حفظ المفتاح بنجاح!" : "✅ API Key saved successfully!");
        }
    },

    // ── FILE UPLOAD ───────────────────────────────────────
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        event.target.value = "";
        const ext = file.name.toLowerCase().split(".").pop();

        if (ext === "json") {
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.metadata && data.structured_summary && data.quiz && data.audio_narrative) {
                        this.setActiveBook(data);
                    } else {
                        alert("❌ Invalid JSON structure.");
                    }
                } catch (err) { alert("❌ JSON parse error: " + err.message); }
            };
            reader.readAsText(file);

        } else if (ext === "pdf") {
            this.processPDF(file);

        } else {
            alert(this.state.lang === "ar" ? "يرجى رفع ملف PDF أو JSON" : "Please upload a PDF or JSON file");
        }
    },

    // ── PDF PROCESSING PIPELINE ───────────────────────────
    async processPDF(file) {
        const apiKey = localStorage.getItem("gemini_api_key");
        if (!apiKey) {
            this.showApiKeyModal();
            alert(this.state.lang === "ar"
                ? "يرجى إدخال مفتاح Gemini API أولاً"
                : "Please enter your Gemini API key first.");
            return;
        }

        this.showOverlay(true,
            this.state.lang === "ar" ? "جاري استخراج النص من الكتاب..." : "Extracting text from book...",
            this.state.lang === "ar" ? "الخطوة 1 من 2" : "Step 1 of 2"
        );

        try {
            // ── STEP 1: Extract text from PDF ──
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let extractedText = "";

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const pageText = content.items.map(item => item.str).join(" ");
                extractedText += pageText + "\n\n";

                // Update overlay progress
                this.updateOverlaySub(
                    this.state.lang === "ar"
                        ? `صفحة ${i} من ${pdf.numPages}`
                        : `Page ${i} of ${pdf.numPages}`
                );
            }

            if (extractedText.trim().length < 50) {
                this.showOverlay(false);
                alert(this.state.lang === "ar"
                    ? "❌ لم يتم العثور على نص كافٍ في هذا الملف. قد يكون PDF عبارة عن صور."
                    : "❌ Not enough text found. The PDF may be image-based (scanned).");
                return;
            }

            // ── STEP 2: Send to Gemini AI ──
            this.updateOverlayText(
                this.state.lang === "ar" ? "الذكاء الاصطناعي يحلل المحتوى..." : "AI is analyzing your content...",
                this.state.lang === "ar" ? "الخطوة 2 من 2 — قد يستغرق دقيقة" : "Step 2 of 2 — may take a minute"
            );

            const prompt = buildAIPrompt(extractedText, this.state.lang);
            const result = await this.callGeminiAPI(apiKey, prompt);

            if (result) {
                this.setActiveBook(result);
                this.showOverlay(false);
            } else {
                this.showOverlay(false);
                alert(this.state.lang === "ar"
                    ? "❌ فشل تحليل الكتاب. حاول مرة أخرى."
                    : "❌ Failed to analyze the book. Please try again.");
            }

        } catch (err) {
            this.showOverlay(false);
            console.error("PDF processing error:", err);
            alert("❌ Error: " + err.message);
        }
    },

    // ── GEMINI API CALL WITH AUTO-RETRY & MODEL FALLBACK ──
    async callGeminiAPI(apiKey, prompt) {
        const models = [
            "gemini-2.0-flash",
            "gemini-2.0-flash-lite",
            "gemini-1.5-flash"
        ];

        for (const model of models) {
            try {
                this.updateOverlaySub(
                    this.state.lang === "ar"
                        ? `جاري التحليل باستخدام ${model}...`
                        : `Analyzing with ${model}...`
                );

                const result = await this._callModel(apiKey, model, prompt);
                return result; // Success — return immediately

            } catch (err) {
                const isQuota = err.message.includes("quota") || err.message.includes("429") || err.message.includes("RESOURCE_EXHAUSTED");

                if (isQuota) {
                    // Extract retry delay from error if available
                    const retryMatch = err.message.match(/retry in (\d+)/i);
                    const waitSec = retryMatch ? parseInt(retryMatch[1]) + 5 : 30;

                    // If this is the last model, wait and try it one more time
                    if (model === models[models.length - 1]) {
                        this.updateOverlayText(
                            this.state.lang === "ar"
                                ? `⏳ حد الاستخدام — إعادة المحاولة خلال ${waitSec} ثانية...`
                                : `⏳ Rate limited — retrying in ${waitSec}s...`,
                            this.state.lang === "ar" ? "انتظر قليلاً..." : "Please wait..."
                        );

                        // Countdown timer on overlay
                        let remaining = waitSec;
                        const countdownInterval = setInterval(() => {
                            remaining--;
                            this.updateOverlaySub(
                                this.state.lang === "ar"
                                    ? `إعادة المحاولة خلال ${remaining} ثانية...`
                                    : `Retrying in ${remaining}s...`
                            );
                        }, 1000);

                        await new Promise(resolve => setTimeout(resolve, waitSec * 1000));
                        clearInterval(countdownInterval);

                        // Final retry
                        return await this._callModel(apiKey, models[0], prompt);
                    }
                    // Otherwise try next model
                    console.warn(`${model} quota exceeded, trying next model...`);
                    continue;
                }
                throw err; // Non-quota error — bubble up
            }
        }
        throw new Error("All AI models exhausted. Please try again later.");
    },

    async _callModel(apiKey, model, prompt) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 8192,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData?.error?.message || response.statusText;
            throw new Error(errMsg);
        }

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error("Empty response from AI");

        const cleanJson = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
        const parsed = JSON.parse(cleanJson);

        if (!parsed.metadata || !parsed.structured_summary || !parsed.quiz || !parsed.audio_narrative) {
            throw new Error("AI returned incomplete data");
        }
        return parsed;
    },

    // ── SET ACTIVE BOOK ───────────────────────────────────
    setActiveBook(data) {
        this.state.activeBook = data;
        this.state.currentQuizIndex = 0;
        this.state.score = 0;

        const title = data.metadata.chapter_title;
        const bookEntry = { title, progress: 0, data };

        // Save to both language recent books + localStorage
        I18N.en.recentBooks.unshift(bookEntry);
        I18N.ar.recentBooks = I18N.en.recentBooks; // Share the same list

        // Persist to localStorage (without the full data to save space — store last 10)
        const forStorage = I18N.en.recentBooks.slice(0, 10).map(b => ({
            title: b.title, progress: b.progress, data: b.data
        }));
        try { localStorage.setItem("recentBooks", JSON.stringify(forStorage)); } catch (e) { }

        document.getElementById("resume-chapter-name").innerText = title;
        document.getElementById("resume-section").style.display = "block";
        this.renderHome();
        this.navigateTo("study-hub");
    },

    // ── OVERLAY HELPERS ───────────────────────────────────
    showOverlay(show, text, sub) {
        const ov = document.getElementById("processing-overlay");
        if (show) {
            document.getElementById("overlay-text").innerText = text || "";
            document.getElementById("overlay-subtext").innerText = sub || "";
            ov.style.display = "flex";
        } else {
            ov.style.display = "none";
        }
    },
    updateOverlayText(text, sub) {
        document.getElementById("overlay-text").innerText = text || "";
        document.getElementById("overlay-subtext").innerText = sub || "";
    },
    updateOverlaySub(sub) {
        document.getElementById("overlay-subtext").innerText = sub || "";
    },

    // ── STUDY HUB ─────────────────────────────────────────
    renderStudyHub() {
        const data = this.state.activeBook;
        if (!data) return;
        document.getElementById("hub-chapter-title").innerText = data.metadata.chapter_title;
        let html = "";
        if (data.metadata.key_concepts && data.metadata.key_concepts.length > 0) {
            html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px">';
            data.metadata.key_concepts.forEach(c => {
                html += `<span style="background:var(--primary-light);color:var(--primary);padding:6px 14px;border-radius:100px;font-size:.9rem;font-weight:700">${c}</span>`;
            });
            html += '</div>';
        }
        data.structured_summary.forEach(item => {
            html += "<h3>" + item.topic + "</h3>";
            html += item.has_table ? marked.parse(item.content) : "<p>" + item.content + "</p>";
        });
        document.getElementById("summary-content").innerHTML = html;
        // Reset audio
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
            alert(this.state.lang === "ar" ? "لا توجد أسئلة" : "No quiz questions available.");
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
                setTimeout(() => {
                    alert(t.completedMsg + this.state.score + " / " + total);
                    // Update progress in recent books
                    const books = I18N.en.recentBooks;
                    const bookEntry = books.find(b => b.data === this.state.activeBook);
                    if (bookEntry) {
                        bookEntry.progress = Math.round((this.state.score / total) * 100);
                        try { localStorage.setItem("recentBooks", JSON.stringify(books.slice(0, 10))); } catch (e) { }
                    }
                    this.navigateTo("home");
                }, 400);
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
        document.getElementById("quiz-progress").style.width = ((this.state.currentQuizIndex + 1) / this.state.activeBook.quiz.length * 100) + "%";
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
