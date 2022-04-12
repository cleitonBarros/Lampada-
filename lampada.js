const btnTurnOn = document.getElementById('turnOn')
const btnTurnOff= document.getElementById('turnOff')
const imgScreen =document.getElementById('lamp')

function isLampBroken(){
    return imgScreen.src.indexOf('quebrada') > -1

}


btnTurnOn.addEventListener('click', () => {

    if(!isLampBroken()){
  if(btnTurnOn.textContent === "Ligar"){
    imgScreen.src ='./img/ligada.jpg'
    btnTurnOn.innerHTML = "Desligar"
  }else if(btnTurnOn.textContent === "Desligar"){
    imgScreen.src ='./img/desligada.jpg'
    btnTurnOn.innerHTML = "Ligar"
  }
}
})

imgScreen.addEventListener('mouseover', () => {
    if(!isLampBroken()){
        
        imgScreen.src ='./img/ligada.jpg'
    }
})
imgScreen.addEventListener('mouseout', () => {
    if(!isLampBroken()){
        
        imgScreen.src ='./img/desligada.jpg'
    }
})
imgScreen.addEventListener('dblclick', () => {
    imgScreen.src ='./img/quebrada.jpg'

})