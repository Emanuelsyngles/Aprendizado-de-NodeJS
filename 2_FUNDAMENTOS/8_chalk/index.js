import chalk from 'chalk'

const nota = 9

if(nota >= 7){
    console.log(chalk.green.bold("Aluno aprovado! :)"))
}else{
    console.log(chalk.red.bold("Você vai precisar de recuperação. :("))
}