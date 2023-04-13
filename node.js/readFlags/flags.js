const { argv } = process

function getFlagValue(flag) {
    const i = argv.indexOf(flag) + 1

    return argv[i]
}

module.exports = getFlagValue