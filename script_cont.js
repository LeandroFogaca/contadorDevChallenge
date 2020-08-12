const body = document.querySelector('body')
const button = document.querySelector('#reiniciar')
const Data = sessionStorage.getItem('data')
const Dias = document.querySelector("#d")
const Horas = document.querySelector("#h")
const Min = document.querySelector("#m")
const Sec = document.querySelector("#s")

var data = new Date(parseInt(Data))
var now = new Date()

var diff = Data - now

var d, h, m, s

d = Math.floor((diff/(1000*60*60*24)*(-1)))

h = ((data.getHours() - 21) - now.getHours())*(-1)

m = (data.getMinutes() - now.getMinutes())*(-1)

s = (data.getSeconds() - now.getSeconds())*(-1)



Dias.innerHTML = d
Horas.innerHTML = h
Min.innerHTML = m
Sec.innerHTML = s

button.addEventListener("click", function () {    
        window.location.href = "./index.html";
});