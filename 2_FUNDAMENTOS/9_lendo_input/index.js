const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})

readline.question('Qual sua linguagem favorita?', (language) => {
    if(language === "Portugol"){
        console.log("Você é noob!!!")
    }else{
        console.log(`A minha linguagem preferida é: ${language}`)
    }
    readline.close()
})

