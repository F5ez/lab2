// scripts/exercise.js
let appliedStyles = [];

document.addEventListener('DOMContentLoaded', () => {
    const overlay  = document.getElementById('exerciseOverlay');
    const closeBtn = document.getElementById('exerciseCloseBtn');

    overlay.classList.remove('hidden');

    const closeExerciseModal = () => overlay.classList.add('hidden');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeExerciseModal);
    }

    overlay.addEventListener('click', e => {
        if (!e.target.closest('.modal')) {
            closeExerciseModal();
        }
    });
});

const questions = [
    {
        text: "Як зробити пульсацію кубика?",
        options: [
            "opacity: 0.5;",
            "transform: scale(1.2);",
            "transition: all 1s;",
            "animation: pulse 1s infinite;"
        ],
        correct: "animation: pulse 1s infinite;"
    },{
        text: "Щоб змінити колір нашого кубика, потрібно додати:",
        options: [
            "height: 100px;",
            "background: green;",
            "border-radius: 50%;",
            "position: static;"
        ],
        correct: "background: green;"
    },
    {
        text: "Що потрібно додати, щоб кубик піднявся вгору на сторінці?",
        options: [
            "left: 50px;",
            "top: 50px;",
            "bottom: 50px;",
            "right: 50px;"
        ],
        correct: "bottom: 50px;"
    },
    {
        text: "Що потрібно додати, щоб кубик змістився праворуч на сторінці?",
        options: [
            "transform: scale(1.5);",
            "right: 100px;",
            "padding-left: 100px;",
            "margin-left: 100px;"
        ],
        correct: "margin-left: 100px;"
    },
    {
        text: "Що потрібно додати, щоб зробити кути кубика округлими?",
        options: [
            "border: 2px solid black;",
            "transform: rotate(45deg);",
            "border-radius: 50%;",
            "padding: 50px;"
        ],
        correct: "border-radius: 50%;"
    },
    {
        text: "Що потрібно додати, щоб зробити кубик напівпрозорим?",
        options: [
            "visibility: hidden;",
            "display: none;",
            "color: transparent;",
            "opacity: 0.5;"
        ],
        correct: "opacity: 0.5;"
    },
    {
        text: "Що потрібно додати, щоб додати чорну рамку навколо кубика?",
        options: [
            "box-shadow: 0 0 10px black;",
            "outline: none;",
            "background: black;",
            "border: 2px solid black;"
        ],
        correct: "border: 2px solid black;"
    }, {
        text: "Який тег використовується для створення заголовку першого рівня в HTML?",
        options: [
            "<p>",
            "<title>",
            "<h1>",
            "<header>"
        ],
        correct: "<h1>"
    },
    {
        text: "Який селектор CSS вибирає всі елементи з класом 'box'?",
        options: [
            "#box",
            ".box",
            "box",
            "*box"
        ],
        correct: ".box"
    },
    {
        text: "Що означає властивість `box-sizing: border-box;`?",
        options: [
            "Елемент ігнорує padding",
            "Padding не враховується в ширині",
            "Ширина включає padding і border",
            "Box стане квадратом"
        ],
        correct: "Ширина включає padding і border"
    },
    {
        text: "Який метод JavaScript використовується для додавання обробника подій?",
        options: [
            "getElementById()",
            "querySelector()",
            "addEventListener()",
            "createElement()"
        ],
        correct: "addEventListener()"
    },
    {
        text: "Що таке `media queries` в CSS?",
        options: [
            "Анімація елементів",
            "Запити до бази даних",
            "Запити стилів до пристроїв",
            "Створення модальних вікон"
        ],
        correct: "Запити стилів до пристроїв"
    },
    {
        text: "Який тег використовується для вставки відео?",
        options: [
            "<media>",
            "<movie>",
            "<video>",
            "<player>"
        ],
        correct: "<video>"
    },
    {
        text: "Яка властивість відповідає за анімацію між двома станами?",
        options: [
            "transform",
            "transition",
            "position",
            "animation-name"
        ],
        correct: "transition"
    },
    {
        text: "Який атрибут використовується для адаптації зображень до різних пристроїв?",
        options: [
            "alt",
            "sizes",
            "href",
            "srcset"
        ],
        correct: "srcset"
    },
    {
        text: "Що робить функція `querySelector()`?",
        options: [
            "Створює елемент",
            "Повертає HTML як текст",
            "Вибирає перший елемент за CSS-селектором",
            "Очищає DOM"
        ],
        correct: "Вибирає перший елемент за CSS-селектором"
    },
    {
        text: "Який елемент HTML відповідає за основний зміст сторінки?",
        options: [
            "<main>",
            "<section>",
            "<article>",
            "<div>"
        ],
        correct: "<main>"
    }

];

let currentQuestionIndex = 0;

const questionEl = document.getElementById('quiz-question');
const optionsEl = document.getElementById('quiz-options');
const progressEl = document.getElementById('quiz-progress');
const feedbackEl = document.getElementById('teacher-feedback');
const feedbackText = document.getElementById('teacher-text');

const incorrectResponses = [
    "Не зовсім. Подумай ще.",
    "Можливо, варто переглянути теорію ще раз.",
    "Спробуй ще раз — майже вгадав!",
    "Не здавайся, спробуй ще!",
    "Хмм, щось пішло не так.",
    "Неправильно. Але ти на правильному шляху.",
    "Помилився — це нормально. Ще раз!",
    "Подумай логічно — відповідь поруч.",
    "Зараз не вийшло. Але вийде далі!",
    "Ох, не ця відповідь. Поглянь ще раз уважно."
];
const correctResponses = [
    "Молодець! Саме так і є.",
    "Чудова відповідь!",
    "Правильно! Гарна робота.",
    "Так тримати! Вірна відповідь.",
    "Бінго! Ти влучив у ціль."
];

const codeTemplate = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: flex-end;
      background-color: #eef;
    }
    .ground {
      width: 100%;
      height: 10px;
      background: #444;
    }
    .cube {
      width: 50px;
      height: 50px;
      background: red;
      position: absolute;
      bottom: 10px;
      left: 20px;
      {}
    }
    @keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
  </style>
</head>
<body>
  <div class="ground"></div>
  <div class="cube"></div>
</body>
</html>
`;

function renderQuestion(index) {
    const q = questions[index];
    questionEl.textContent = q.text;
    optionsEl.innerHTML = '';
    feedbackEl.classList.add('hidden');

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;

        btn.addEventListener('click', () => {
            const isCorrect = opt === q.correct;

            if (isCorrect) {
                btn.classList.add('correct');
                optionsEl.querySelectorAll('button').forEach(b => b.disabled = true);

                // Якщо це CSS-рядок — додаємо
                if (q.correct.trim().endsWith(';')) {
                    appliedStyles.push(q.correct);
                    const updatedCode = codeTemplate.replace('{}', appliedStyles.join('\n      '));
                    document.getElementById('preview-frame').srcdoc = updatedCode;
                    document.getElementById('code-block').textContent = updatedCode;
                }

                const correctIndex = Math.floor(Math.random() * correctResponses.length);
                feedbackText.textContent = correctResponses[correctIndex];
                feedbackEl.classList.remove('hidden');
                if (q.correct.includes('transform')) {
                    setTimeout(() => {
                        const iframe = document.getElementById('preview-frame');
                        const cube = iframe.contentWindow.document.querySelector('.cube');
                        if (cube) {
                            const newTransform = q.correct.split(':')[1].replace(';', '').trim();
                            cube.style.transform = newTransform;
                        }
                    }, 100);
                }

                setTimeout(() => {
                    document.getElementById('quiz-block').classList.add('fade-out');

                    setTimeout(() => {
                        currentQuestionIndex++;
                        if (currentQuestionIndex < questions.length) {
                            renderQuestion(currentQuestionIndex);
                            document.getElementById('quiz-block').classList.remove('fade-out');
                        } else {
                            document.getElementById('completionModal').classList.remove('hidden');

                        }
                    }, 500);
                }, 500);
            } else {
                btn.classList.add('incorrect');
                const randomIndex = Math.floor(Math.random() * incorrectResponses.length);
                feedbackText.textContent = incorrectResponses[randomIndex];
                feedbackEl.classList.remove('hidden');
            }
        });

        optionsEl.appendChild(btn);
    });

    progressEl.textContent = `${index + 1} / ${questions.length}`;
}

renderQuestion(currentQuestionIndex);
