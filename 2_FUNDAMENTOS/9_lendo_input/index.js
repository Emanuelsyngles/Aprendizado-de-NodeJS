const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})

readline.question('Qual sua linguagem favorita?', (language) => {
    if(language === "Javascript"){
        console.log("Parabéns por ter bom gosto!")
    }else{
        console.log("Isso nme é linguagem.")
    }
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})

