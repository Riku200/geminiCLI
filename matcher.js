document.addEventListener('DOMContentLoaded', () => {

    // --- DATA --- //
    const questions = [
        {
            scenario: "長引く物価高で国民の生活は苦しくなり、企業の倒産も増え続けています。専門家からは「このままではスタグフレーション（不況とインフレの同時進行）に陥る」との警告も出ています。総理大臣として、あなたはこの複合的な経済危機にどう立ち向かいますか？",
            choices: [
                { text: "【緊急支援と積極財政】 まずは国民の生活を守ることが最優先だ。国の借金が一時的に増えるとしても、大規模な給付金や減税を行い、同時にGX（グリーントランスフォーメーション）や防衛といった成長分野に集中的に財政出動して、経済の好循環を力ずくで生み出す。", value: "A" },
                { text: "【構造改革と賃上げ促進】 小手先の給付金では根本的な解決にならない。企業の設備投資を促す大胆な減税（即時償却など）や規制緩和を進め、企業の「稼ぐ力」を強化する。それによって持続的な賃上げを実現し、経済を内側から強くする。", value: "B" },
                { text: "【現役世代への集中投資】 将来へのツケを増やすべきではない。支援策は本当に困っている中間層や子育て世帯に絞り込む。それよりも、将来の成長の担い手である若者やスタートアップ企業への支援を手厚くし、社会全体の活力を高めることに資源を集中させる。", value: "C" }
            ]
        },
        {
            scenario: "ある朝、近隣の独裁国家が、日本の排他的経済水域（EEZ）内に弾道ミサイルを発射したとの緊急報告が入りました。幸い被害はありませんでしたが、国民の不安は一気に高まっています。この挑発行為に対し、あなたはどのような姿勢で臨みますか？",
            choices: [
                { text: "【毅然とした対応と防衛力強化】 断固として抗議し、即座に独自の追加制裁を発動する。同時に、防衛費のさらなる増額や「反撃能力」の運用体制の整備を急ぎ、「力による平和」を追求する強い意志を国内外に示すべきだ。", value: "A" },
                { text: "【同盟国との連携と外交努力】 最も重要なのは日米同盟の抑止力を最大限に活用することだ。直ちに同盟国や友好国と連携し、国連などの場で国際社会と協調して、相手国に外交的な圧力をかける。対話の可能性も粘り強く探り続ける。", value: "B" },
                { text: "【憲法改正と国民的議論】 このような事態に対応するためには、自衛隊の存在を憲法に明記し、緊急事態条項を創設する必要性を国民に広く訴える好機だ。防衛力の強化と並行して、憲法改正に向けた野党との議論を本格化させる。", value: "C" }
            ]
        },
        {
            scenario: "最新の人口推計で、地方の人口減少が予測を上回るペースで進んでいることが判明。「このままでは多くの地域が維持できなくなる」という危機感が広がっています。国の未来を左右するこの問題に、あなたはどこから着手しますか？",
            choices: [
                { text: "【デジタルと新しい発想で地方を活性化】 従来型の公共事業では限界だ。地方の大学や企業に大胆に投資し、スタートアップやDX（デジタルトランスフォーメーション）を推進する。若者が地方でも都会と同じように挑戦できる環境を整え、新しい産業を創出する。", value: "A" },
                { text: "【現実的なインフラ維持と選択と集中】 全ての地域を等しく救うことは不可能だ。まずは防災・減災のためのインフラ強靭化に重点を置き、国民の命を守ることを最優先する。その上で、拠点となる中核都市に投資を集中させ、広域での連携を強化する。", value: "B" },
                { text: "【子育て支援の抜本的強化】 地方の問題は、国全体の子どもが減っていることの裏返しだ。まずは次元の違う子育て支援策（現金給付、保育・教育の無償化など）に国費を集中投下する。子どもが増えれば、将来的に地方も活性化するはずだ。", value: "C" }
            ]
        },
        {
            scenario: "あなたが「総理の覚悟」として掲げた重要法案が、国会で野党の強い反対にあい、審議がストップしてしまいました。支持率も低下し始め、メディアからは「リーダーシップの欠如」と批判されています。この状況をどう打開しますか？",
            choices: [
                { text: "【対話による合意形成】 今は多数決で強引に押し通すべき時ではない。一度立ち止まり、野党との協議の場を設ける。法案の一部修正も視野に入れ、誠実に対話を重ねることで、国民が納得できる合意点を見つけ出す努力をすべきだ。", value: "A" },
                { text: "【新たな連携と政界再編】 議論の合わない野党と時間をかけるより、基本的な政策や価値観が近い他の政党に連携を呼びかける。新たな連立の枠組みを構築し、安定した政治基盤を再確立した上で、法案の成立を目指す。", value: "B" },
                { text: "【国民への直接の訴えと世論の後押し】 国会の議論は行き詰まっている。ならば、国民に直接この法案の必要性を訴え、世論を味方につけるべきだ。国民の強い支持を背景にすれば、野党も反対しにくくなるはずだ。これこそが真の国民政党の姿だ。", value: "C" }
            ]
        },
        {
            scenario: "AI、宇宙、次世代エネルギーなど、未来の日本の競争力を左右する先端技術への大規模な国家投資プロジェクトを計画しています。しかし、そのためには数兆円規模の新たな財源が必要です。あなたはこの財源をどう確保しますか？",
            choices: [
                { text: "【徹底した歳出改革と既存予算の組み替え】 新たな国債発行や増税は国民に負担を強いることになる。まずは行政改革を断行し、既存の歳出を徹底的に見直す。大胆に予算を組み替え、未来への投資のための財源を生み出す。", value: "A" },
                { text: "【未来のための国債発行】 未来の世代も豊かにするための投資なのだから、その負担を現在の世代だけで負うべきではない。未来のための投資に限定した建設国債を積極的に発行し、スピード感をもってプロジェクトを進めるべきだ。", value: "B" },
                { text: "【新たな税制の導入（成長分野への課税）】 財政規律は維持すべきだ。そこで、このプロジェクトによって大きな利益を得ることが期待される大企業や富裕層を対象とした、新たな目的税（デジタル課税や富裕層への時限的な課税など）を創設し、財源とする。", value: "C" }
            ]
        }
    ];

    const candidates = [
        { name: "林 芳正", profile: ["B", "B", "B", "A", "A"] },
        { name: "小林 鷹之", profile: ["C", "A", "A", "C", "B"] },
        { name: "小泉 進次郎", profile: ["C", "C", "A", "A", "A"] },
        { name: "茂木 敏充", profile: ["B", "B", "B", "B", "A"] },
        { name: "高市 早苗", profile: ["A", "A", "B", "B", "B"] }
    ];

    // --- STATE --- //
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // --- DOM ELEMENTS --- //
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');

    const startBtn = document.getElementById('start-btn');
    const retryBtn = document.getElementById('retry-btn');

    const questionContent = document.getElementById('question-content');
    const questionNumber = document.getElementById('question-number');
    const questionScenario = document.getElementById('question-scenario');
    const questionChoices = document.getElementById('question-choices');
    const resultBars = document.getElementById('result-bars');
    const progressBar = document.getElementById('progress-bar');

    // --- FUNCTIONS --- //

    function startDiagnostic() {
        currentQuestionIndex = 0;
        userAnswers = [];
        startScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        displayQuestion();
    }

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionContent.classList.remove('fade-out');

        // Update progress bar
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        questionNumber.textContent = `シナリオ ${currentQuestionIndex + 1} / ${questions.length}`;
        questionScenario.textContent = question.scenario;
        questionChoices.innerHTML = '';

        question.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'btn';
            button.innerHTML = `<span class="choice-label">${choice.value}.</span>${choice.text}`;
            button.onclick = () => selectAnswer(choice.value);
            questionChoices.appendChild(button);
        });
    }

    function selectAnswer(value) {
        userAnswers.push(value);
        questionContent.classList.add('fade-out');

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                showResults();
            }
        }, 300); // Wait for fade-out animation
    }

    function showResults() {
        progressBar.style.width = `100%`;
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        resultBars.innerHTML = '';

        const results = candidates.map(candidate => {
            const score = candidate.profile.reduce((acc, val, index) => {
                return acc + (val === userAnswers[index] ? 1 : 0);
            }, 0);
            const matchPercentage = (score / questions.length) * 100;
            return { name: candidate.name, percentage: matchPercentage };
        });

        // Sort by percentage descending
        results.sort((a, b) => b.percentage - a.percentage);

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            resultItem.innerHTML = `
                <div class="result-label">
                    <span class="candidate-name">${result.name}</span>
                    <span class="match-percentage">${result.percentage.toFixed(0)}%</span>
                </div>
                <div class="bar-container">
                    <div class="bar"></div>
                </div>
            `;
            resultBars.appendChild(resultItem);
            
            // Animate bar width
            setTimeout(() => {
                const bar = resultItem.querySelector('.bar');
                bar.style.width = `${result.percentage}%`;
            }, 100); // Small delay to ensure animation triggers
        });
    }

    function retryDiagnostic() {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }

    // --- EVENT LISTENERS --- //
    startBtn.addEventListener('click', startDiagnostic);
    retryBtn.addEventListener('click', retryDiagnostic);
});
