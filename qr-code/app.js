//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
const button = document.querySelector('button');
let inputValue = document.getElementById('qrText');
let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')

function generateQR() {
    if (inputValue.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue.value;
        imgBox.classList.add("show-img")
    } else {
        alert('Input a search term or a URL')
        inputValue.classList.add('error');
        setTimeout(()=>{
            inputValue.classList.add('error');

        },1000)
    }
    
}