const { argv } = process

module.exports = (flag) => {
    const i = argv.findIndex(arg => {
        return arg === flag
    })

    return argv[i+1]
}

