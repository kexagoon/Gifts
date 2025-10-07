const giftBoxes = document.querySelectorAll('.gift-box');
const anecdoteModal = document.querySelector('.anecdote-modal');
const closeButton = document.querySelector('.close-button');
const anecdoteText = document.getElementById('anecdote-text');

const anecdotes = [
    "Почему программисты всегда путают Хэллоуин и Рождество? Потому что Oct 31 == Dec 25.",
    "В чём разница между программистом и обычным человеком? Обычный человек думает, что килобайт — это тысяча байт, а программист думает, что километр — это 1024 метра.",
    "Заходит как-то в бар HTML, CSS и JavaScript. HTML говорит: 'Я буду структурировать!' CSS: 'А я буду стилизовать!' А JavaScript: 'Я приведу это всё в движение!'",
    "Как называется собака хакера? Биткойнтерьер.",
    "Почему программисты не любят природу? Потому что там слишком много багов, и нет кнопки 'отмена'.",
    "Что говорит один байт другому байту? 'Бит тебя пополам!'",
    "Какое любимое блюдо программиста? Чипсы и кола, потому что 'кодинг' без них не идёт.",
    "Программист — это человек, который решает проблему, о существовании которой вы даже не подозревали, способом, который вы не понимаете.",
    "Почему программисты такие плохие садовники? Потому что они всегда ждут, пока их код вырастет сам по себе.",
    "Два программиста разговаривают: - Я вчера так хорошо погулял на свежем воздухе! - А это как? - Скомпилировал код на улице."
];

const openedGifts = new Set();

giftBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const giftId = box.dataset.giftId;

        if (!openedGifts.has(giftId)) {
            openedGifts.add(giftId);
            box.classList.add('opened');
            box.textContent = '🎉'; // Change emoji to celebration

            const randomIndex = Math.floor(Math.random() * anecdotes.length);
            anecdoteText.textContent = anecdotes[randomIndex];
            anecdoteModal.classList.add('active');
        }
    });
});

closeButton.addEventListener('click', () => {
    anecdoteModal.classList.remove('active');
});

anecdoteModal.addEventListener('click', (e) => {
    if (e.target === anecdoteModal) {
        anecdoteModal.classList.remove('active');
    }
});
