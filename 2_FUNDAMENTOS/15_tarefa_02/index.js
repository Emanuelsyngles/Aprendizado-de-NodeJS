const inquirer = require('inquirer')

inquirer.prompt([
    {
        name:'name',
        message: 'Qual o seu nome? '
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?'
    }
]).then((answers) => {
    const response = (`O nome do usuário é ${answers.name} e sua idade é de ${answers.idade}`)
    console.log(chalk.bgYellow.black(response))
})

.catch((err) => console.log(err))