let qrCode = document.querySelector('.qr-input');
let btn = document.querySelector('.btn');
let qrBox = document.querySelector('.qr-box');
let qrImage = document.querySelector('.qr-image');


btn.addEventListener('click', function(){
   let test = qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  qrCode.value;
   console.log(test);
});