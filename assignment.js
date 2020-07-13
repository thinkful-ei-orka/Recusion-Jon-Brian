function countingSheep(sheep) {
    // Base case
    if (sheep === 0) {
        console.log('All sheep jumped over the fence')
        return;
    }

    // General case
    console.log(`${sheep}: Another sheep jumps over the fence`);
    countingSheep(sheep - 1);
};

function powerCalculator(n, x) {
    if (x == 1) {
        return n
    }
    return n * powerCalculator(n, (x - 1))
}

function reverseString(str) {
    //base
    if (str === '') {
        return '';
    }

    // General case
    const newChar = str[0];
    return reverseString(str.slice(1)) + newChar;

}

function triangluarNumber(n) {
    if (n == 1) {
        return 1
    }
    return n + triangluarNumber(n - 1)
}
