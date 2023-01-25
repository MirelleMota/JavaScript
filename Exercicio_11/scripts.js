
let idade = 19
cnh = true

if(idade >= 18 && cnh == false) {
    console.log('Você já pode tirar sua CNH')
}
else if(idade >= 18 && cnh == true) {
    console.log('Você pode dirigir')
}
else {
    console.log('Você ainda não pode dirigir!')
}