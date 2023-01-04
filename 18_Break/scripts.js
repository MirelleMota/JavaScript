
let nome = 'Mirelle'
for(let i = 0; i < 10; i= i + 1) {
    if(i == 3) {
        nome = 'Maria'
    }
    if(i == 5 && nome == 'Maria') {
        console.log('O nome é Maria, pode parar')
        break
    }

    console.log(i)
}
