module.exports = {
    get_crop: () => {
        const randomNum = Math.random();

        if (randomNum > 0.7) {
            return `<span for="img" aria-label="corn">🌽</span>`;
        }   else if (randomNum > 0.4) {
            return `<span for="img" aria-label="apple">🍎</span>`
        }   else {
            return `<span for="img" aria-label="aubergine">🍆</span>`
        }
    },

    get_livestock: () => {
        const randomNum = Math.random();

        if (randomNum > 0.7) {
            return `<span for="img" aria-label="cow">🐮</span>`;
        }   else if (randomNum > 0.4) {
            return `<span for="img" aria-label="pig">🐷</span>`
        }   else {
            return `<span for="img" aria-label="chicken">🐔</span>`
        }
    }
}