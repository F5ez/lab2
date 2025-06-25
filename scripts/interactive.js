// scripts/interactive.js

// 1. Полный набор данных по модулям
// scripts/interactive.js

// 1. Повний набір даних по модулях
const moduleInfo = {
    "html-structure": {
        title: "1. Введення в HTML",
        description: `
      <h3>Що таке HTML?</h3>
      <p>HTML (HyperText Markup Language) — це мова гіпертекстової розмітки, призначена для структуризації вмісту веб‑сторінок. Кожен HTML‑документ — це дерево елементів, де кожен тег задає свій семантичний сенс.</p>
      
      <h4>1. Шаблон документа:</h4>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Назва сторінки&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  <!-- вміст сторінки -->
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
      
      <h4>2. Семантичні теги:</h4>
      <ul>
        <li><code>&lt;header&gt;</code> — верхній блок сторінки (зазвичай логотип, заголовок, меню);</li>
        <li><code>&lt;nav&gt;</code> — блок навігації;</li>
        <li><code>&lt;main&gt;</code> — основний контент;</li>
        <li><code>&lt;section&gt;</code> — тематичні розділи;</li>
        <li><code>&lt;article&gt;</code> — самостійна стаття або контент;</li>
        <li><code>&lt;aside&gt;</code> — допоміжний контент (бокова панель, реклама);</li>
        <li><code>&lt;footer&gt;</code> — нижня частина сторінки.</li>
      </ul>
      
      <h4>3. Текстові елементи:</h4>
      <ul>
        <li>Заголовки: <code>&lt;h1&gt;…&lt;h6&gt;</code>;</li>
        <li>Абзаци: <code>&lt;p&gt;</code>;</li>
        <li>Списки: <code>&lt;ul&gt;/&lt;ol&gt;</code>, <code>&lt;li&gt;</code>;</li>
        <li>Цитати: <code>&lt;blockquote&gt;</code> і <code>&lt;q&gt;</code>;</li>
        <li>Код: <code>&lt;code&gt;</code>, <code>&lt;pre&gt;</code>.</li>
      </ul>
      
      <h4>4. Вбудовані елементи та посилання:</h4>
      <ul>
        <li><code>&lt;a href="url"&gt;</code> — посилання;</li>
        <li><code>&lt;img src="path" alt="опис"&gt;</code> — зображення;</li>
        <li><code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>;</li>
        <li>Форми: <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>.</li>
      </ul>
      
      <h4>5. Метадані та SEO:</h4>
      <ul>
        <li><code>&lt;meta name="description" content="…"&gt;</code> — опис сторінки для пошукових систем;</li>
        <li><code>&lt;meta name="keywords" content="…"&gt;</code> — ключові слова (вважається застарілим);</li>
        <li>Open Graph: <code>&lt;meta property="og:title" content="…"&gt;</code>, <code>og:image</code> тощо;</li>
        <li>Favicon: <code>&lt;link rel="icon" href="favicon.ico"&gt;</code>.</li>
      </ul>
      
      <h4>6. Доступність (ARIA):</h4>
      <p>Використовуйте атрибути <code>role</code>, <code>aria-label</code>, щоб екранні читалки коректно інтерпретували елементи.</p>
      
      <h4>Корисні посилання:</h4>
      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/HTML" target="_blank">HTML на MDN</a></li>
        <li><a href="https://validator.w3.org/" target="_blank">HTML Validator</a></li>
      </ul>
      <p><strong>Більш детально ви можете прочитати:</strong> <a href="https://uk.wikipedia.org/wiki/HTML" target="_blank">статтю про HTML на Вікіпедії</a>.</p>
    `
    },
    "css-basics": {
        title: "2. Основи CSS",
        description: `
      <h3>Що таке CSS?</h3>
      <p>CSS (Cascading Style Sheets) — це мова стилів, що визначає візуальне оформлення HTML‑елементів: кольори, шрифти, розташування, анімації тощо.</p>
      
      <h4>1. Підключення стилів:</h4>
      <ul>
        <li>Зовнішній файл: <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>;</li>
        <li>Вбудований: <code>&lt;style&gt;…&lt;/style&gt;</code> в <code>&lt;head&gt;</code>;</li>
        <li>Inline-стиль: <code>&lt;div style="color:red;"&gt;</code> — не рекомендується.</li>
      </ul>
      
      <h4>2. Селектори та специфічність:</h4>
      <pre><code>/* по тегу */ h1 { … }
/* по класу */ .btn { … }
/* по ID */    #header { … }
/* вкладені */ .nav a { … }</code></pre>
      <p>Специфічність: inline > ID > клас > тег. Рекомендується використовувати методологію BEM або SMACSS.</p>
      
      <h4>3. Box Model:</h4>
      <pre><code>element {
  margin: 1rem; /* зовнішні відступи */
  border: 1px solid #ccc;
  padding: 0.5rem; /* внутрішні відступи */
  width: 300px; /* ширина вмісту */
}</code></pre>
      <p>Задайте <code>box-sizing: border-box;</code>, щоб ширина включала padding і border.</p>
      
      <h4>4. Каскад і спадкування:</h4>
      <p>Стили наслідуються від батьків. Каскад дозволяє перевизначати правила залежно від порядку підключення.</p>
      
      <h4>5. Flexbox:</h4>
      <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
      <ul>
        <li><code>flex-direction</code> (row, column);</li>
        <li><code>justify-content</code> (start, center, space-between);</li>
        <li><code>align-items</code> (stretch, center);</li>
        <li>Елементи Flex: <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>.</li>
      </ul>
      
      <h4>6. CSS Grid:</h4>
      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}</code></pre>
      <p>Grid дозволяє створювати складні макети з рядами, стовпцями та областями.</p>
      
      <h4>7. Змінні та препроцесори:</h4>
      <p>CSS-змінні: <code>:root { --main-color: #28a745; }</code>, потім <code>color: var(--main-color);</code>. Препроцесори (SASS/LESS) полегшують роботу зі змінними, міксинами, вкладеністю.</p>
      
      <h4>8. Псевдокласи та псевдоелементи:</h4>
      <ul>
        <li><code>:hover</code>, <code>:focus</code>, <code>:active</code>;</li>
        <li><code>::before</code>, <code>::after</code> для вставки декоративного контенту.</li>
      </ul>
      h4>Корисні посилання:</h4>
      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/CSS" target="_blank">Повна та авторитетна документація від Mozilla з прикладами, поясненнями та рекомендаціями.</a></li>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/CSS/Reference" target="_blank">Швидкий довідник по всіх властивостях CSS з детальними описами і прикладами.</a></li>
      </ul>
      <p><strong>Більш детально ви можете прочитати:</strong> <a href="https://uk.wikipedia.org/wiki/HTML" target="_blank">статтю про Css на Вікіпедії</a>.</p>
    `
    },
    "js-intro": {
        title: "3. Основи JavaScript",
        description: `
      <h3>Роль JavaScript у вебі</h3>
      <p>JavaScript — це мова програмування, яка надає веб-сторінці "життя": реагує на дії користувача, змінює DOM, відправляє запити на сервер.</p>
      
      <h4>1. Підключення та виконання:</h4>
      <pre><code>&lt;script src="interactive.js" defer&gt;&lt;/script&gt;</code></pre>
      <p>Атрибут <code>defer</code> відкладає виконання скрипта до повного завантаження DOM.</p>
      
      <h4>2. Типи даних та змінні:</h4>
      <ul>
        <li><code>let</code>, <code>const</code>, <code>var</code>;</li>
        <li>Примітиви: string, number, boolean, null, undefined, symbol;</li>
        <li>Об’єкти та масиви: для організації комплексних даних.</li>
      </ul>
      
      <h4>3. Умови та цикли:</h4>
      <ul>
        <li>Умови: <code>if / else / switch</code>;</li>
        <li>Цикли: <code>for</code>, <code>while</code>, <code>forEach</code>;</li>
        <li>Функції: декларативні та стрілочні (<code>() => {…}</code>).</li>
      </ul>
      
      <h4>4. Робота з DOM:</h4>
      <pre><code>const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = 'Новий елемент';
  document.body.append(div);
});</code></pre>
      <p>Методи: <code>getElementById</code>, <code>querySelectorAll</code>, <code>appendChild</code>, <code>remove()</code>.</p>
      
      <h4>5. Асинхронність:</h4>
      <p>Приклад fetch:</p>
      <pre><code>fetch('data.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>
      
      <p>Приклад async/await:</p>
      <pre><code>async function load() {
  try {
    const res = await fetch('data.json');
    const data = await res.json();
    console.log(data);
  } catch(e) {
    console.error(e);
  }
}</code></pre>
      
      <h4>6. ES6‑модулі:</h4>
      <pre><code>// utils.js
export function sum(a, b) { return a + b; }

// main.js
import { sum } from './utils.js';
console.log(sum(2,3));</code></pre>
 <h4>Корисні посилання:</h4>
      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/JavaScript" target="_blank">Повна офіційна документація зі стандартів ECMAScript, описами методів та прикладами.</a></li>
        <li><a href="https://javascript.info/" target="_blank">Детальний посібник по сучасному JavaScript: від основ до просунутих тем.</a></li>
      </ul>
      <p><strong>Більш детально ви можете прочитати:</strong> <a href="https://uk.wikipedia.org/wiki/JavaScript" target="_blank">статтю на Вікіпедії</a>.</p>
    `
    },
    "adaptive-design": {
        title: "4. Адаптивний веб-дизайн",
        description: `
      <h3>Принципи адаптивного дизайну</h3>
      <p>Responsive design адаптує макети під різні розміри та орієнтації екранів для зручності на всіх пристроях.</p>
      
      <h4>1. Mobile‑first та Desktop‑first</h4>
      <p>Mobile‑first: пишемо стилі під мобільні, потім додаємо <code>@media (min-width)</code>. Desktop‑first — навпаки, через <code>@media (max-width)</code>.</p>
      
      <h4>2. Медія-запити:</h4>
      <pre><code>@media (min-width: 600px) {
  .sidebar { display: block; }
}
@media (max-width: 599px) {
  .sidebar { display: none; }
}</code></pre>
      
      <h4>3. Гнучкі макети і одиниці:</h4>
      <ul>
        <li><code>%</code> від батьківського елемента;</li>
        <li><code>vw</code>, <code>vh</code> від розмірів вікна;</li>
        <li><code>rem</code>, <code>em</code> від шрифтового розміру;</li>
        <li><code>clamp()</code> для адаптивних обмежень.</li>
      </ul>
      
      <h4>4. Flexbox і Grid:</h4>
      <pre><code>.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 200px;
}</code></pre>
      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}</code></pre>
      
      <h4>5. Адаптивні зображення:</h4>
      <pre><code>&lt;img 
  src="small.jpg" 
  srcset="small.jpg 600w, medium.jpg 1200w, large.jpg 2000w" 
  sizes="(max-width: 600px) 100vw, 50vw" 
  alt="Опис"&gt;</code></pre>
     <h4>Корисні посилання:</h4>

      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank">Докладний вступ у адаптивний дизайн: гнучкі макети, медіа-запити, відносні одиниці.
</a></li>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank">Детальний посібник по сучасному JavaScript: від основ до просунутих тем.</a></li>
      </ul>
      <p><strong>Більш детально ви можете прочитати:</strong> <a href="https://uk.wikipedia.org/wiki/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9_%D0%B2%D0%B5%D0%B1%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD" target="_blank">статтю  на Вікіпедії</a>.</p>
    `
    },
    "animations": {
        title: "5. Анімації та спецефекти",
        description: `
      <h3>Навіщо потрібні анімації?</h3>
      <p>Анімації покращують UX, допомагають орієнтуватися в інтерфейсі, але надмір може відволікати та гальмувати.</p>
      
      <h4>1. CSS‑переходи (<code>transition</code>):</h4>
      <pre><code>.box {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.box:hover {
  transform: translateY(-10px);
  opacity: 0.8;
}</code></pre>
      <ul>
        <li><code>transition-property</code>;</li>
        <li><code>transition-duration</code>;</li>
        <li><code>transition-timing-function</code>;</li>
        <li><code>transition-delay</code>;</li>
      </ul>
      
      <h4>2. Кадри (@keyframes):</h4>
      <pre><code>@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.element {
  animation: fadeInUp 0.6s ease-out forwards;
}</code></pre>
      <p>Параметри: <code>iteration-count</code>, <code>direction</code>, <code>fill-mode</code>, <code>delay</code>.</p>
      
      <h4>3. Продуктивність:</h4>
      <p>GPU‑прискорюються <code>transform</code> і <code>opacity</code>. Уникайте анімації <code>width</code>/<code>height</code>/<code>top</code>.</p>
      
      <h4>4. JS‑анімації (Web Animations API):</h4>
      <pre><code>const player = document.querySelector('.player');
player.animate([
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(1.2)', opacity: 0.5 },
  { transform: 'scale(1)', opacity: 1 }
], {
  duration: 1500,
  iterations: Infinity,
  easing: 'ease-in-out'
});</code></pre>
      <p>Також можна використовувати <code>requestAnimationFrame</code> і бібліотеки (GSAP, Anime.js).</p>
      
      <h4>5. Reduces motion:</h4>
      <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}</code></pre>
     <h4>Корисні посилання:</h4>

      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" target="_blank">MDN Web Docs – Використання CSS-переходів (Transitions)
</a></li>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/CSS/CSS_Animations" target="_blank">MDN Web Docs – Використання CSS-анімацій (Animations)</a></li>
      </ul>
  `
    },
    "media": {
        title: "6. Робота з аудіо та відео",
        description: `
      <h3>Основи HTML5‑медіа</h3>
      <p>Теги <code>&lt;video&gt;</code> і <code>&lt;audio&gt;</code> дозволяють вбудовувати мультимедіа без плагінів.</p>
      
      <h4>1. Приклад відео та аудіо:</h4>
      <pre><code>&lt;video controls width="640" preload="metadata"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Ваш браузер не підтримує відео.
&lt;/video&gt;</code></pre>
      <pre><code>&lt;audio controls preload="none"&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Ваш браузер не підтримує аудіо.
&lt;/audio&gt;</code></pre>
      
      <h4>2. Атрибути:</h4>
      <ul>
        <li><code>controls</code> — панель керування;</li>
        <li><code>autoplay</code> — автозапуск (обмежено на мобільних);</li>
        <li><code>loop</code> — повтор;</li>
        <li><code>muted</code> — без звуку;</li>
        <li><code>poster</code> — заставка;</li>
        <li><code>loading="lazy"</code> — лінива загрузка.</li>
      </ul>
      
      <h4>3. Субтитри:</h4>
      <pre><code>&lt;track kind="subtitles" srclang="uk" label="Українські" src="subs/uk.vtt" default&gt;</code></pre>
      <p>Це доступність для користувачів з вадами слуху.</p>
      
      <h4>4. JavaScript API:</h4>
      <pre><code>const vid = document.querySelector('video');
vid.play();           // запуск
vid.pause();          // пауза
vid.currentTime = 30; // перемотка
vid.volume = 0.3;     
vid.playbackRate = 1.5;
vid.addEventListener('ended', () => alert('Відео завершилось'));</code></pre>
      
      <h4>5. Адаптивність:</h4>
      <pre><code>video, audio {
  max-width: 100%;
  height: auto;
}</code></pre>
      <p>Використовуйте <code>srcset</code> та <code>picture</code> для адаптації.</p>
      
      <h4>6. Web Audio API:</h4>
      <pre><code>const ctx = new AudioContext();
const source = ctx.createMediaElementSource(vid);
const gainNode = ctx.createGain();
source.connect(gainNode).connect(ctx.destination);
gainNode.gain.value = 0.5;
const analyser = ctx.createAnalyser();
source.connect(analyser);
const data = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(data);
console.log(data);</code></pre>
      
      <h4>7. Формати:</h4>
      <ul>
        <li>Відео: MP4 (H.264), WebM (VP8/VP9), Ogg;</li>
        <li>Аудіо: MP3, AAC, Ogg;</li>
        <li>Рекомендується використовувати кілька джерел (<code>&lt;source&gt;</code>).</li>
      </ul>
      
      <h4>8. Доступність:</h4>
      <p>Додавайте <code>&lt;track kind="captions"&gt;</code> та текстові описи.</p>
  <h4>Корисні посилання:</h4>

      <ul>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/API/Web_Audio_API" target="_blank">Інтерактивні приклади та керівництво по створенню аудіосцен за допомогою JavaScript.

</a></li>
        <li><a href="https://www.w3schools.com/html/html5_video.asp" target="_blank">Інтерактивні приклади з «живим» кодом для швидкої перевірки.
</a></li>
      </ul>`
    }
};



document.addEventListener('DOMContentLoaded', () => {
    // Текущий открытый модуль
    let currentModule = null;

    // 1) Добавляем галочку в каждый модуль
    document.querySelectorAll('.module').forEach(mod => {
        // создаём элемент
        const tick = document.createElement('span');
        tick.className = 'checkmark';
        tick.textContent = '✓';
        // добавляем внутрь модуля
        mod.appendChild(tick);
    });

    // 2) Логика открытия модалки
    const overlay = document.getElementById('overlay');
    const modalContent = overlay.querySelector('.modal-content');
    const closeBtn = document.getElementById('closeBtn');

    document.querySelectorAll('.module').forEach(mod => {
        mod.addEventListener('click', () => {
            const info = moduleInfo[mod.id];
            if (!info) return;

            currentModule = mod;
            modalContent.innerHTML = `<h2>${info.title}</h2>${info.description}`;
            overlay.classList.remove('hidden');
            document.body.classList.add('modal-open');
        });
    });

    // 3) Функция закрытия и отметки прочитанного
    function closeModal() {
        overlay.classList.add('hidden');
        document.body.classList.remove('modal-open');
        if (currentModule) {
            currentModule.classList.add('read');
            currentModule = null;
        }
    }

    // 4) Навешиваем события закрытия
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });
});



document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        const modalContent = overlay.querySelector('.modal-content');
        const info = moduleInfo[module.id];
        if (!info) return;
        modalContent.innerHTML = `<h2>${info.title}</h2>${info.description}`;
        overlay.classList.remove('hidden');
        document.body.classList.add('modal-open');
    });
});

// 3. Закрытие модалки
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function closeModal() {
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
});
// ==== Welcome Modal (show on page load) ====
// ==== Welcome Modal (show on page load) ====
window.addEventListener('DOMContentLoaded', () => {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const welcomeCloseBtn = document.getElementById('welcomeCloseBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.location.href = 'exercise.html';
        });
    }
    // Показываем модалку при загрузке
    welcomeOverlay.classList.remove('hidden');

    // Функция закрытия
    function closeWelcome() {
        welcomeOverlay.classList.add('hidden');
    }

    // Закрытие по крестику
    welcomeCloseBtn.addEventListener('click', closeWelcome);

    // Закрытие по клику вне модалки (на сам оверлей)
    welcomeOverlay.addEventListener('click', e => {
        // если клик был именно по фону, а не по .modal или вложенным элементам
        if (e.target === welcomeOverlay) {
            closeWelcome();
        }
    });
});
// === Письмовий тест ===
document.addEventListener('DOMContentLoaded', () => {
    const textQuizBtn = document.getElementById('startWrittenQuizBtn');
    const textQuizModal = document.getElementById('textQuizModal');
    const closeTextBtn = document.getElementById('closeTextQuizBtn');
    const input = document.getElementById('textAnswer');
    const submitBtn = document.getElementById('submitTextAnswer');
    const feedback = document.getElementById('textFeedback');

    const correctAnswer = '<img>';

    textQuizBtn.addEventListener('click', () => {
        textQuizModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
        input.value = '';
        input.classList.remove('correct', 'incorrect');
        feedback.textContent = '';
    });

    closeTextBtn.addEventListener('click', () => {
        textQuizModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });

    submitBtn.addEventListener('click', () => {
        const userAnswer = input.value.trim().toLowerCase();
        if (userAnswer === '<img>') {
            input.classList.add('correct');
            input.classList.remove('incorrect');
            feedback.textContent = '✅ Правильно!';
            feedback.style.color = 'green';
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            feedback.textContent = '❌ Неправильно. Спробуй ще раз.';
            feedback.style.color = 'red';
        }
    });
});
