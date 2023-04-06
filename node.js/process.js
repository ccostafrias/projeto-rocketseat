// Lista de argumentos
// console.log(process.argv)


const [firstName, lastName] = [process.argv[2], process.argv[3]]

console.log(`Meu nome é ${firstName} ${lastName}`)