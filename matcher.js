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

    const explanations = [
        { // シナリオ1
            title: "シナリオ 1：長期化する物価高と経済の停滞",
            choices: {
                A: "【解説】これは、まず国民生活の緊急支援を最優先し、財政出動によって経済を力強く牽引すべきだという考え方です。高市氏や小林氏の積極財政を重視する姿勢に近いです。",
                B: "【解説】これは、目先の給付金よりも、企業の力を高めることで持続的な賃上げを実現すべきだという考え方です。茂木氏や林氏が掲げる、成長と分配の好循環を重視する姿勢に近いです。",
                C: "【解説】これは、将来世代への負担を考慮し、支援を若者や現役世代に集中させて未来への投資を優先すべきだという考え方です。小林氏や小泉氏の世代交代や未来への投資を重視する姿勢に近いです。"
            }
        },
        { // シナリオ2
            title: "シナリオ 2：緊迫する国際情勢と防衛",
            choices: {
                A: "【解説】これは、対話よりもまず「力による平和」を追求し、独自の防衛力強化を急ぐべきだという考え方です。高市氏や小林氏の、防衛力を抜本的に強化し毅然と対応すべきという姿勢に近いです。",
                B: "【解説】これは、日本の独力だけでなく同盟国との連携を最大限に活用し、外交努力で事態を打開すべきだという考え方です。林氏や茂木氏の、国際協調を重視する現実的なアプローチに近いです。",
                C: "【解説】これは、防衛力強化と同時に、その根幹となる憲法の議論を加速させ、国家のあり方から見直すべきだという考え方です。小泉氏や小林氏が訴える、憲法改正議論の加速という姿勢に近いです。"
            }
        },
        { // シナリオ3
            title: "シナリオ 3：加速する人口減少と地方の衰退",
            choices: {
                A: "【解説】これは、従来型の公共事業に頼るのではなく、デジタル技術や新しい産業によって地方創生を目指すべきだという考え方です。小泉氏や小林氏の、スタートアップ支援などを重視する姿勢に近いです。",
                B: "【解説】これは、全ての地域を救うのではなく、防災やインフラ維持といった現実的な課題から着手し、拠点を絞って投資すべきだという考え方です。林氏、茂木氏、高市氏の国土強靭化などを重視する姿勢に近いです。",
                C: "【解説】これは、地方の問題を国全体の人口問題と捉え、まずは次元の違う子育て支援に集中投資すべきだという考え方です。少子化対策を最重要視する多くの候補者に共通する視点です。"
            }
        },
        { // シナリオ4
            title: "シナリオ 4：国会運営と政治改革",
            choices: {
                A: "【解説】これは、多数の力で押し切るのではなく、野党との対話を通じて幅広い合意形成を目指すべきだという融和的な政治姿勢です。特に小泉氏や林氏が重視する考え方に近いです。",
                B: "【解説】これは、イデオロギーの異なる相手と議論するよりも、政策が近い勢力と新たな協力関係を築くべきだという現実的な政界再編を視野に入れた考え方です。茂木氏や高市氏の姿勢に近いです。",
                C: "【解説】これは、議会内の交渉が行き詰まった際、国民に直接訴えかけて世論を動かすことで突破しようとする、強いリーダーシップを志向する考え方です。小林氏の姿勢などに近い部分があります。"
            }
        },
        { // シナリオ5
            title: "シナリオ 5：未来への投資と財源の確保",
            choices: {
                A: "【解説】これは、増税や新たな借金を避けるため、まずは徹底した行政改革で財源を生み出すべきだという財政規律を重視する考え方です。林氏、小泉氏、茂木氏の姿勢に近いです。",
                B: "【解説】これは、未来への投資は将来世代への貢献であり、そのための借金（国債発行）はためらうべきではないという積極財政の考え方です。高市氏や小林氏の姿勢に近いです。",
                C: "【解説】これは、財政規律を守りつつ、受益者や負担能力のある層に新たな税負担を求めることで財源を確保すべきだという、分配をより重視した考え方です。"
            }
        }
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
    const detailedResultsContainer = document.getElementById('detailed-results-container');
    const detailedResults = document.getElementById('detailed-results');

    // --- FUNCTIONS --- //

    function startDiagnostic() {
        currentQuestionIndex = 0;
        userAnswers = [];
        startScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        detailedResultsContainer.classList.add('hidden'); // Hide details on start
        questionScreen.classList.remove('hidden');
        displayQuestion();
    }

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionContent.classList.remove('fade-out');

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
        }, 300);
    }

    function showResults() {
        progressBar.style.width = `100%`;
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        resultBars.innerHTML = '';
        detailedResults.innerHTML = ''; // Clear previous details

        // Calculate and display overall match bars
        const results = candidates.map(candidate => {
            const score = candidate.profile.reduce((acc, val, index) => {
                return acc + (val === userAnswers[index] ? 1 : 0);
            }, 0);
            const matchPercentage = (score / questions.length) * 100;
            return { name: candidate.name, percentage: matchPercentage };
        });

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
            setTimeout(() => {
                resultItem.querySelector('.bar').style.width = `${result.percentage}%`;
            }, 100);
        });

        // Generate and display detailed explanations
        explanations.forEach((explanation, index) => {
            const userAnswer = userAnswers[index];
            const explanationItem = document.createElement('div');
            explanationItem.className = 'explanation-item';

            const question = questions[index]; // Get the corresponding question object
            let choicesHtml = '';
            for (const choice in explanation.choices) {
                const isSelected = choice === userAnswer;
                const originalChoice = question.choices.find(c => c.value === choice);

                choicesHtml += `
                    <div class="choice-explanation ${isSelected ? 'selected' : ''}">
                        <p class="choice-text"><strong>選択肢 ${choice}:</strong> ${originalChoice.text}</p>
                        <p class="explanation-text">${explanation.choices[choice]}</p>
                    </div>
                `;
            }

            explanationItem.innerHTML = `
                <h4>${explanation.title}</h4>
                <p class="user-answer">あなたが選んだ回答： ${userAnswer}</p>
                ${choicesHtml}
            `;
            detailedResults.appendChild(explanationItem);
        });
        
        detailedResultsContainer.classList.remove('hidden');
    }

    function retryDiagnostic() {
        resultScreen.classList.add('hidden');
        detailedResultsContainer.classList.add('hidden'); // Also hide details on retry
        startScreen.classList.remove('hidden');
    }

    // --- EVENT LISTENERS --- //
    startBtn.addEventListener('click', startDiagnostic);
    retryBtn.addEventListener('click', retryDiagnostic);
});