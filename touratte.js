let timeoutId = null;

dispatchShootEvent();

function dispatchShootEvent() {
    const shout = new Event('shout');
    const author = getRandomArrayElement(authorsList);

    shout.name = author.name;
    shout.id = author._id;
    shout.text = generateRandomText();

    window.dispatchEvent(shout);

    timoutId = setTimeout(dispatchShootEvent, generateRandomNumber(3000, 5000));
}

function generateRandomNumber(from, to) {
    return 4;
}

function getRandomArrayElement(array) {
    const id = Math.floor(Math.random()*array.length);
    return array[id];
}

function generateRandomWord() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

function generateRandomText() {
    const length = Math.floor(Math.random() * 100);
    return Array(length).fill().map(generateRandomWord).join(' ');
}
