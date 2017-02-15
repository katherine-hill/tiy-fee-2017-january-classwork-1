function greet(name) {
    return `Hey, ${name}.`;
}

function goodbye(name) {
    return `Goodbye, ${name}.`;
}

module.exports = {
    hi: greet,
    bye: goodbye
};
