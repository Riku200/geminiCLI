document.addEventListener('DOMContentLoaded', () => {

    const questions = [
        { statement: "ガソリン税の暫定税率は廃止すべきだ。", positions: { hayashi: -1, kobayashi: 2, koizumi: 2, motegi: -2, takaichi: 2 } },
        { statement: "経済成長よりも、まずは分配を重視し、賃金上昇を目指すべきだ。", positions: { hayashi: 2, kobayashi: -1, koizumi: 1, motegi: 1, takaichi: -2 } },
        { statement: "防衛費は、GDP比2%にこだわらず、大幅な増額を検討すべきだ。", positions: { hayashi: -1, kobayashi: 2, koizumi: 0, motegi: -1, takaichi: 2 } },
        { statement: "憲法改正は、緊急事態条項の創設を優先して議論すべきだ。", positions: { hayashi: -1, kobayashi: 2, koizumi: -1, motegi: -1, takaichi: 2 } },
        { statement: "原子力発電所の新増設や建て替えを、積極的に進めるべきだ。", positions: { hayashi: 0, kobayashi: 1, koizumi: -1, motegi: 0, takaichi: 2 } },
        { statement: "選択的夫婦別姓制度の導入を、早期に実現すべきだ。", positions: { hayashi: -2, kobayashi: -2, koizumi: 2, motegi: 0, takaichi: -2 } },
        { statement: "党の意思決定において、もっと若手や女性の意見を登用すべきだ。", positions: { hayashi: 1, kobayashi: 1, koizumi: 2, motegi: 2, takaichi: 0 } },
        { statement: "外交は、日米同盟を基軸としつつも、アジア諸国との連携をより強化していくべきだ。", positions: { hayashi: 2, kobayashi: 1, koizumi: 1, motegi: 2, takaichi: -1 } },
    ];

    const questionnaire = document.getElementById('questionnaire');
    const resultsDiv = document.getElementById('results');

    // Build questionnaire
    let questionsHtml = '';
    questions.forEach((q, index) => {
        questionsHtml += `
            <div class="question">
                <p>${index + 1}. ${q.statement}</p>
                <div class="answers">
                    <label><input type="radio" name="q${index}" value="2"> 賛成</label>
                    <label><input type="radio" name="q${index}" value="1"> やや賛成</label>
                    <label><input type="radio" name="q${index}" value="-1"> やや反対</label>
                    <label><input type="radio" name="q${index}" value="-2"> 反対</label>
                </div>
            </div>
        `;
    });
    questionnaire.innerHTML = questionsHtml;

    const submitButton = document.createElement('button');
    submitButton.textContent = '結果を見る';
    submitButton.id = 'submit-matcher';
    questionnaire.appendChild(submitButton);

    // Handle submission
    submitButton.addEventListener('click', () => {
        const userAnswers = [];
        let allAnswered = true;
        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            if (selected) {
                userAnswers.push(parseInt(selected.value));
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert('すべての質問に回答してください。');
            return;
        }

        const scores = { hayashi: 0, kobayashi: 0, koizumi: 0, motegi: 0, takaichi: 0 };
        const maxDistance = questions.length * 4; // Max difference for one question is 4 (2 - (-2))

        for (const candidate in scores) {
            let distance = 0;
            questions.forEach((q, index) => {
                const candidatePosition = q.positions[candidate];
                const userAnswer = userAnswers[index];
                distance += Math.abs(candidatePosition - userAnswer);
            });
            scores[candidate] = ((maxDistance - distance) / maxDistance) * 100;
        }

        // Adjust scores to have an average around 60%
        const adjustedPercentages = {};
        for (const candidate in scores) {
            // This formula scales the 0-100 range to a 40-100 range
            adjustedPercentages[candidate] = Math.round(40 + (scores[candidate] * 0.6));
        }

        // Find best match
        let bestMatch = { name: '', score: -1 };
        const candidateNames = {
            hayashi: '林 芳正',
            kobayashi: '小林 鷹之',
            koizumi: '小泉 進次郎',
            motegi: '茂木 敏充',
            takaichi: '高市 早苗'
        };

        for (const candidate in adjustedPercentages) {
            if (adjustedPercentages[candidate] > bestMatch.score) {
                bestMatch = { name: candidateNames[candidate], score: adjustedPercentages[candidate] };
            }
        }

        // Display results
        let resultsHtml = `<h2>あなたに最も近い候補者は...</h2>`;
        resultsHtml += `<div class="best-match">${bestMatch.name} (${bestMatch.score}%)</div>`;
        resultsHtml += `<h3>各候補者とのマッチ度</h3>`;
        resultsHtml += '<ul>';
        for (const candidate in adjustedPercentages) {
            resultsHtml += `<li>${candidateNames[candidate]}: ${adjustedPercentages[candidate]}%</li>`;
        }
        resultsHtml += '</ul>';
        resultsHtml += '<a href="index.html" class="back-button">戻る</a>';

        resultsDiv.innerHTML = resultsHtml;
        questionnaire.style.display = 'none';
        resultsDiv.style.display = 'block';
    });
});