const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const guideEl = document.getElementById("guide-text");
const tunnelEl = document.getElementById("heart-tunnel");
const words = document.getElementsByClassName("word");
const wordsTwo = document.getElementsByClassName("word2");
const card = document.getElementsByClassName("card");
const imgDesc = document.getElementById("text-container");
const imgDescription = document.getElementById("img-desc");
const ebookPress = document.getElementById("book-link");
const bookContainer = document.getElementById("book-container");

const wordArray = [];
const wordArrayTwo = [];
let currentWord = 0;
let currentWord2 = 0;
let i = 0;

words[currentWord].style.opacity = 1;

const spinning = [
    {transform: "rotate(0) scale(1)"},
    {transform: "rotate(360deg) scale(0)"}
];

const timing = {
    duration: 1000,
    iterations: 1
};

const changeWord = () => {
    const cw = wordArray[currentWord];
    const nw = currentWord == words.length-1 ? wordArray[0] :wordArray[currentWord+1];

    for(let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for(let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';

        nw[0].parentElement.style.opacity = 1;

        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

const changeWordTwo = () => {
    const cw = wordArrayTwo[currentWord2];
    const nw = currentWord2 == wordsTwo.length-1 ? wordArrayTwo[0] :wordArrayTwo[currentWord2+1];

    for(let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for(let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';

        nw[0].parentElement.style.opacity = 1;

        animateLetterIn(nw, i);
    }

    currentWord2 = (currentWord2 == wordArrayTwo.length-1) ? 0 : currentWord2+1;
}

const animateLetterOut = (cw, i) => {
    setTimeout(function() {
          cw[i].className = 'letter out';
    }, i*80);
}

const animateLetterIn = (nw, i) => {
    setTimeout(function() {
          nw[i].className = 'letter in';
    }, 340+(i*80));
}

const splitLetters = (word) => {
    const content = word.innerHTML;
    word.innerHTML = '';
    const letters = [];

    for(let i = 0; i < content.length; i++){
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);

        word.appendChild(letter);

        letters.push(letter);
    }

    wordArray.push(letters);
}

const splitLettersTwo = (word) => {
    const content = word.innerHTML;
    word.innerHTML = '';
    const letters = [];

    for(let i = 0; i < content.length; i++){
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);

        word.appendChild(letter);

        letters.push(letter);
    }

    wordArrayTwo.push(letters);
}

const createHeart = () => {
    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = '💜';

    tunnelEl.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

inputEl.addEventListener("keyup", () => {
    if(inputEl.value.length > 0){
        guideEl.style.visibility = "visible";
    } else {
        guideEl.style.visibility = "hidden";
    }
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    inputEl.animate(spinning, timing);

    formEl.reset();
});

ebookPress.addEventListener("click", () => {
    bookContainer.classList.toggle("active");
})

for(let i = 0; i < card.length; i++){
    card[i].addEventListener("mouseenter", () => {
        imgDesc.style.visibility = "visible";
        if(i == 0){
            imgDescription.innerText = "The last picture I took with my dad. He promised me on this day that he would come for my graduation. It's the last thing he ever said to me in person.";
        } else if(i == 1){
            imgDescription.innerText = "This picture was taken in 2013 when the entire family drove to Kabwe to visit my Grandmother in Makululu.";
        }
        else if(i == 2){
            imgDescription.innerText = "This was in 2017 on my brothers wedding.";
        }
        else if(i == 3){
            imgDescription.innerText = "This picture was taken on my brothers grad, also in 2017.";
        }
        else if(i == 4){
            imgDescription.innerText = "This here is a picture taken back in the day when my parents were young and peng. They are still peng though, even my DAD in death im sure.";
        }
        else if(i == 5){
            imgDescription.innerText = "Another picture from back in the day. My father used to work for Zambia Airways when it was at its prime.";
        }
        else if(i == 6){
            imgDescription.innerText = "This was my graduation. I didn't like who I was in high school and this picture shows it. Anyway look how proud both my parents look.";
        }
        else if(i == 7){
            imgDescription.innerText = "This is a legendary picture of my father. There's really not much else to say about it. Not much else must be said about it.";
        }
        else if(i == 8){
            imgDescription.innerText = "My father was best dressed wherever he went. hehe.";
        }
    })
}

for(let i = 0; i < card.length; i++){
    card[i].addEventListener("mouseleave", () => {
        imgDesc.style.visibility = "hidden";
    })
}

for(let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

for(let i = 0; i < wordsTwo.length; i++) {
    splitLettersTwo(wordsTwo[i]);
}

changeWord();
changeWordTwo();
setInterval(changeWord, 2500);
setInterval(changeWordTwo, 2500);
setInterval(createHeart, 400);








