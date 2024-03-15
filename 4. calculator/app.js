let seven = document.querySelector('.seven-btn');
let eight = document.querySelector('.eight-btn');
let nine = document.querySelector('.nine-btn');
let multiple = document.querySelector('.multi-btn');
let displayBtn = document.querySelector('.display-btn');
let eql = document.querySelector('.eql-btn');
let del = document.querySelector('.de-btn');
let acBtn = document.querySelector('.ac-btn');

acBtn.addEventListener('click',()=>{
    displayBtn.value = '';
})

seven.addEventListener('click',()=>{
    displayBtn.value += seven.value;
})

eight.addEventListener('click',()=>{
    displayBtn.value += eight.value;
})

nine.addEventListener('click',()=>{
    displayBtn.value += nine.value;
})

multiple.addEventListener('click',()=>{
    displayBtn.value += multiple.value;
})


eql.addEventListener('click',()=>{
    displayBtn.value = eval(displayBtn.value);
})

del.addEventListener('click', ()=>{
    displayBtn.value = displayBtn.value.toString().slice(0,-1);
})