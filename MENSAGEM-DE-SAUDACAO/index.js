let data = new Date()

let hora = data.getHours()
let minutos = data.getMinutes()

let saudacao;

if(hora <= 11) {
    saudacao = "Bom dia!"
} else if (hora <= 17) {
    saudacao = "Boa tarde!"
}else {
    
}