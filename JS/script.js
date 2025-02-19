const box = document.querySelector(".box");

const btn = document.querySelector(".btn");

const qrtxt = document.querySelector (".qrtxt")

const images = document.querySelector (".images")

const img = document.querySelector(".images img")

const generateQRcode = () => {
   const qrtxtValue = qrtxt.value

if (!qrtxtValue) return;

    btn.innerText = "Gerando Codigo.....";


    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtxtValue}`;

    btn.innerText = "Gerar QRcode";
}



btn.addEventListener("click", () => {
    generateQRcode();        

}); 

qrtxt.addEventListener("keydown", (e) => {
    e.key === "Enter" ?  generateQRcode() : ""

}); 