const hobbies = document.getElementById('hobbies-container');
const awards = document.getElementById('awards');
const books = document.getElementById('books');
const education = document.getElementById('education');
const aboutme = document.getElementById('aboutme')
const btn1 = document.getElementById('a');
const btn2 = document.getElementById('aw');
const btn3 = document.getElementById('h');
const btn4 = document.getElementById('e');
const btn5 = document.getElementById('b');
const theName = document.getElementById('name');
const image = document.getElementById('image');
let index = 0;

const hobbyimage = {
    0 : {
        name: 'Football',
        imgSrc :'football.jpg',
    },
    1: {
        
        name: 'YouTube',
        imgSrc :'youtube.png',
    },
    2 : {
        name: 'Chess',
        imgSrc :'chess.png',
    },
    3 : {
        name: 'Coding',
        imgSrc :'coding.png',
    }
} 
setInterval(()=>{
    console.log('hey')
    theName.textContent = hobbyimage[index].name;
    image.src = `images/${hobbyimage[index].imgSrc}`;
    if(index > 2){
        index = 0;

    }
    else{
        index++; 
    }
},2000)
btn1.addEventListener('click' , e => {

    e.preventDefault()
    hobbies.style.display = 'none'; 
    awards.style.display = 'none'; 
    books.style.display = 'none';
    education.style.display = 'none'; 
    aboutme.style.display = 'block'; 
})
btn2.addEventListener('click' , e => {
    e.preventDefault()
    hobbies.style.display = 'none'; 
    awards.style.display = 'block'; 
    books.style.display = 'none';
    education.style.display = 'none';
    aboutme.style.display = 'none';  
})
btn3.addEventListener('click' , e => {
    e.preventDefault()
    hobbies.style.display = 'block'; 
    awards.style.display = 'none'; 
    books.style.display = 'none';
    education.style.display = 'none'; 
    aboutme.style.display = 'none'; 
})
btn4.addEventListener('click' , e => {
    e.preventDefault()
    hobbies.style.display = 'none'; 
    awards.style.display = 'none'; 
    books.style.display = 'none';
    education.style.display = 'block'; 
    aboutme.style.display = 'none'; 
})
btn5.addEventListener('click' , e => {
    console.log('here')
    e.preventDefault();
    hobbies.style.display = 'none'; 
    awards.style.display = 'none'; 
    books.style.display = 'block';
    education.style.display = 'none'; 
    aboutme.style.display = 'none'; 
})