const MOCK_DATA_AR = {
    "metadata": { "chapter_title": "الذكاء الاصطناعي في التعليم", "key_concepts": ["تعلم الآلة", "البيانات الضخمة", "التخصيص"] },
    "structured_summary": [
        { "topic": "مقدمة ملهمة", "content": "الذكاء الاصطناعي هو قدرة الآلات والأنظمة على محاكاة القدرات الذهنية للبشر ونماذج عملها، مثل القدرة على التعلم والاستنتاج ورد الفعل على أوضاع لم تبرمج في الآلة للارتقاء بالتجربة التعليمية.", "has_table": false },
        { "topic": "تطبيقات التعلم الآلي", "content": "| التطبيق | الفائدة |\n|---|---|\n| التوصيات الذكية | زيادة تفاعل الطلاب بمحتوى مخصص |\n| التصحيح الآلي | توفير وقت المعلم للمهام الإبداعية |\n| المتابعة التحليلية | تحديد نقاط الضعف مبكراً |", "has_table": true }
    ],
    "quiz": [
        {
            "question": "ما هو الهدف الرئيسي من استخدام الذكاء الاصطناعي في التعليم بشكل فعال؟",
            "options": { "A": "تقليل عدد المعلمين الأكفاء بالمدارس", "B": "تخصيص تجربة التعلم لكل طالب", "C": "إلغاء المدارس التقليدية والكتب", "D": "تسريع وتيرة الامتحانات اليومية" },
            "correct_option": "B",
            "explanation": "يساعد الذكاء الاصطناعي في تحليل بيانات الطلاب وتقديم محتوى مخصص يناسب قدرات وسرعة كل طالب، وبالتالي (B) هي الإجابة الصحيحة. باقي الخيارات لا تمثل هدفاً تربوياً سليماً."
        },
        {
            "question": "أي من الأدوات التالية لا يعتبر تطبيقاً للذكاء الاصطناعي في الفصول الدراسية؟",
            "options": { "A": "ألواح الكتابة العادية الخشبية", "B": "أنظمة التصحيح التلقائي الدقيقة", "C": "روبوتات المحادثة للإجابة فوراً", "D": "منصات التعلم التكيفي الذكية" },
            "correct_option": "A",
            "explanation": "ألواح الكتابة العادية هي أداة تقليدية لا تحتوي على أي خوارزميات أو تعلم آلة، على عكس باقي الخيارات التي تعتمد بشكل أساسي والمباشر على تقنيات الذكاء الاصطناعي الحديثة."
        },
        {
            "question": "كيف تساهم 'البيانات الضخمة' (Big Data) في تحسين سير العملية التعليمية؟",
            "options": { "A": "عن طريق تخزين ملايين الكتب فقط", "B": "عبر تتبع وتحليل أنماط تعلم الطلاب", "C": "من خلال استهلاك مساحة تخزين أكبر للمدارس", "D": "لا تساهم في التعليم بأي شكل ملحوظ" },
            "correct_option": "B",
            "explanation": "تحليل أنماط تعلم الطلاب عن طريق البيانات الضخمة يمكن المعلمين والأنظمة من توجيه الطلاب وإعطائهم المحتوى المتخصص وتوقع التحديات التي قد يواجهونها قبل حدوثها."
        }
    ],
    "audio_narrative": "أهلاً بك يا بطل في فصل الذكاء الاصطناعي في التعليم. في هذا الفصل سنتعرف على كيفية إحداث ثورة في طرق التعلم، مثل التخصيص التلقائي للمحتوى، واستخدام البيانات لتحليل أداء الطلاب."
};

const MOCK_DATA_EN = {
    "metadata": { "chapter_title": "AI in Education", "key_concepts": ["Machine Learning", "Big Data", "Personalization"] },
    "structured_summary": [
        { "topic": "Inspiring Introduction", "content": "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems, to elevate the educational experience.", "has_table": false },
        { "topic": "Machine Learning Apps", "content": "| Application | Benefit |\n|---|---|\n| Smart Recommendations | Increase engagement with tailored content |\n| Automated Grading | Save teacher time for creative tasks |\n| Analytical Tracking | Identify weaknesses early |", "has_table": true }
    ],
    "quiz": [
        {
            "question": "What is the primary goal of effectively using AI in education?",
            "options": { "A": "Reducing competent teachers in schools", "B": "Personalizing the learning experience", "C": "Abolishing traditional schools", "D": "Accelerating daily exams" },
            "correct_option": "B",
            "explanation": "AI helps analyze student data to provide tailored content that fits each student's abilities. Thus, (B) is the correct answer. The other options do not represent sound educational goals."
        },
        {
            "question": "Which of the following is NOT an application of AI in classrooms?",
            "options": { "A": "Standard wooden whiteboards", "B": "Accurate auto-grading systems", "C": "Chatbots for instant answers", "D": "Smart adaptive learning platforms" },
            "correct_option": "A",
            "explanation": "Standard whiteboards are traditional tools lacking algorithms or machine learning, unlike the other options which fundamentally rely on modern AI techniques."
        },
        {
            "question": "How does 'Big Data' contribute to improving the educational process?",
            "options": { "A": "By just storing millions of books", "B": "Through tracking and analyzing student learning patterns", "C": "By consuming more school server storage", "D": "It doesn't contribute noticeably to education" },
            "correct_option": "B",
            "explanation": "Analyzing student patterns via Big Data enables teachers and systems to guide students, provide specialized content, and anticipate challenges early."
        }
    ],
    "audio_narrative": "Welcome, Champion, to the AI in Education chapter. In this chapter, we will learn how to revolutionize learning methods, such as automatic content personalization and data usage to analyze student performance."
};

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
        speechLang: 'en-US',
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
        speechLang: 'ar-SA',
        excellent: "إجابة ممتازة!",
        goodTry: "محاولة جيدة، الإجابة الصحيحة هي",
        completedMsg: "انتهى الاختبار يا بطل! نتيجتك: ",
        recentBooks: [
            { title: "أساسيات علم البيانات", progress: 100 },
            { title: "مقدمة في الفيزياء الحديثة", progress: 40 }
        ]
    }
};

const app = {
    state: {
        lang: 'en', // default to English
        currentQuizIndex: 0,
        score: 0,
        audioPlaying: false,
        synthInterval: null
    },

    init() {
        this.applyLanguage();
        this.setupAudio();

        // Setup text-to-speech for questions
        document.getElementById('listen-question-btn').addEventListener('click', () => {
            const currentQ = this.getMockData().quiz[this.state.currentQuizIndex];
            this.speakText(currentQ.question);
        });
    },

    getMockData() {
        return this.state.lang === 'en' ? MOCK_DATA_EN : MOCK_DATA_AR;
    },

    toggleLanguage() {
        this.state.lang = this.state.lang === 'en' ? 'ar' : 'en';
        document.documentElement.lang = this.state.lang;
        document.documentElement.dir = this.state.lang === 'ar' ? 'rtl' : 'ltr';
        this.stopAudio();
        this.applyLanguage();

        // Retrigger content rendering if inside study hub or quiz
        if (document.getElementById('study-hub-screen').classList.contains('active')) {
            this.renderStudyHub();
        } else if (document.getElementById('quiz-screen').classList.contains('active')) {
            this.renderQuestion();
        }
    },

    applyLanguage() {
        const t = I18N[this.state.lang];

        // Update Static Texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerText = t[key];
        });

        // Update Dynamic Home Screen Parts
        this.renderHome();

        // We ensure study hub content follows new language as well on next visit, or immediate if active
        document.getElementById('hub-chapter-title').innerText = this.getMockData().metadata.chapter_title;
        document.getElementById('resume-chapter-name').innerText = this.getMockData().metadata.chapter_title;
    },

    navigateTo(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(`${screenId}-screen`).classList.add('active');
        window.scrollTo(0, 0);
        this.stopAudio();

        if (screenId === 'study-hub') this.renderStudyHub();
    },

    renderHome() {
        const t = I18N[this.state.lang];
        const list = document.getElementById('recent-list');
        list.innerHTML = t.recentBooks.map(book => `
            <div class="book-item">
                <div class="book-icon"><i class="fas fa-file-pdf"></i></div>
                <div class="book-details">
                    <h4>${book.title}</h4>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${book.progress}%"></div>
                    </div>
                    <span class="progress-text">${book.progress}${t.progressSub}</span>
                </div>
            </div>
        `).join('');
    },

    renderStudyHub() {
        const data = this.getMockData();
        document.getElementById('hub-chapter-title').innerText = data.metadata.chapter_title;
        document.getElementById('resume-chapter-name').innerText = data.metadata.chapter_title;

        const summaryDiv = document.getElementById('summary-content');
        let html = '';
        data.structured_summary.forEach(item => {
            html += `<h3>${item.topic}</h3>`;
            if (item.has_table) {
                html += marked.parse(item.content);
            } else {
                html += `<p>${item.content}</p>`;
            }
        });
        summaryDiv.innerHTML = html;
    },

    stopAudio() {
        this.state.audioPlaying = false;
        const btn = document.getElementById('play-summary-btn');
        btn.innerHTML = '<i class="fas fa-play directional-icon"></i>';
        clearInterval(this.state.synthInterval);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    },

    setupAudio() {
        const btn = document.getElementById('play-summary-btn');
        const progress = document.querySelector('.timeline .progress');

        btn.addEventListener('click', () => {
            if (!this.state.audioPlaying) {
                this.state.audioPlaying = true;
                btn.innerHTML = '<i class="fas fa-pause"></i>';

                if ('speechSynthesis' in window) {
                    const data = this.getMockData();
                    const utterance = new SpeechSynthesisUtterance(data.audio_narrative);
                    utterance.lang = I18N[this.state.lang].speechLang;
                    utterance.rate = 0.9;

                    utterance.onend = () => {
                        this.stopAudio();
                        progress.style.width = '100%';
                    };

                    window.speechSynthesis.speak(utterance);

                    let w = 0;
                    const duration = data.audio_narrative.length * 70;
                    const step = 100 / (duration / 100);

                    this.state.synthInterval = setInterval(() => {
                        w += step;
                        if (w > 100) w = 100;
                        progress.style.width = w + '%';
                    }, 100);

                } else {
                    let w = 0;
                    this.state.synthInterval = setInterval(() => {
                        w += 2;
                        progress.style.width = w + '%';
                        if (w >= 100) {
                            this.stopAudio();
                            progress.style.width = '100%';
                        }
                    }, 100);
                }
            } else {
                this.stopAudio();
                progress.style.width = '0%';
            }
        });
    },

    speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = I18N[this.state.lang].speechLang;
            window.speechSynthesis.speak(utterance);
        }
    },

    startQuiz() {
        this.state.currentQuizIndex = 0;
        this.state.score = 0;
        document.getElementById('feedback-modal').classList.remove('show');
        this.renderQuestion();
        this.navigateTo('quiz');
    },

    renderQuestion() {
        const data = this.getMockData();
        const t = I18N[this.state.lang];
        const qIndex = this.state.currentQuizIndex;
        const total = data.quiz.length;
        const questionData = data.quiz[qIndex];

        // Update Header
        document.getElementById('quiz-counter').innerText = `${qIndex + 1} / ${total}`;
        const targetPercent = (qIndex / total) * 100;
        document.getElementById('quiz-progress').style.width = `${targetPercent}%`;

        // Reset UI
        document.getElementById('next-question-btn').style.display = 'none';
        const modal = document.getElementById('feedback-modal');
        modal.classList.remove('show', 'correct', 'wrong');

        // Set Content
        const qText = document.getElementById('quiz-question-text');
        qText.innerText = questionData.question;

        // Trigger Animations
        qText.parentElement.classList.remove('slide-in');
        void qText.parentElement.offsetWidth; // Reflow
        qText.parentElement.classList.add('slide-in');

        const optContainer = document.getElementById('quiz-options');
        optContainer.innerHTML = '';
        optContainer.classList.remove('slide-in');
        void optContainer.offsetWidth; // Reflow
        optContainer.classList.add('slide-in');

        // Create Options
        const optionEntries = Object.entries(questionData.options);
        optionEntries.forEach(([key, val], idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="opt-letter">${key}</span> <span>${val}</span>`;
            // Add a little staggered entrance delay
            btn.style.animationDelay = `${idx * 0.1}s`;
            btn.onclick = () => this.handleAnswer(key, btn, questionData);
            optContainer.appendChild(btn);
        });

        document.getElementById('next-question-btn').onclick = () => {
            if (this.state.currentQuizIndex < total - 1) {
                this.state.currentQuizIndex++;
                this.renderQuestion();
            } else {
                document.getElementById('quiz-progress').style.width = `100%`;
                setTimeout(() => {
                    alert(`${t.completedMsg}${this.state.score} / ${total}`);
                    this.navigateTo('home');
                }, 300);
            }
        };
    },

    handleAnswer(selectedKey, btnElement, questionData) {
        // Prevent multiple answers
        const buttons = document.querySelectorAll('.option-btn');
        if ([...buttons].some(b => b.classList.contains('disabled'))) return;

        buttons.forEach(b => b.classList.add('disabled'));

        const isCorrect = selectedKey === questionData.correct_option;
        const t = I18N[this.state.lang];

        if (isCorrect) {
            btnElement.classList.add('selected-correct');
            this.state.score++;
            this.showFeedback(true, t.excellent, questionData.explanation);
        } else {
            btnElement.classList.add('selected-wrong');
            const correctBtn = Array.from(buttons).find(b => b.querySelector('.opt-letter').innerText === questionData.correct_option);
            if (correctBtn) {
                // Wait slightly before showing correct answer for better UX
                setTimeout(() => correctBtn.classList.add('selected-correct'), 300);
            }
            this.showFeedback(false, `${t.goodTry} (${questionData.correct_option})`, questionData.explanation);
        }

        document.getElementById('next-question-btn').style.display = 'flex';

        const total = this.getMockData().quiz.length;
        const progressPercent = ((this.state.currentQuizIndex + 1) / total) * 100;
        document.getElementById('quiz-progress').style.width = `${progressPercent}%`;
    },

    showFeedback(isCorrect, title, explanation) {
        const modal = document.getElementById('feedback-modal');
        // Minor delay to let the button color transition finish
        setTimeout(() => {
            modal.className = `feedback-modal show ${isCorrect ? 'correct' : 'wrong'}`;
            document.getElementById('feedback-icon').innerHTML = isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';
            document.getElementById('feedback-title').innerText = title;
            document.getElementById('feedback-explanation').innerText = explanation;
        }, 300);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
