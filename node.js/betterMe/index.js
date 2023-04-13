const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
]


const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else  {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`

    Resumo das aprendizagens:

    ${questions[0]}
    ${answers[0]}

    ${questions[1]}
    ${answers[1]}
    
    ${questions[2]}
    ${answers[2]}

    ${questions[3]}
    ${answers[3]}

    `)
})
