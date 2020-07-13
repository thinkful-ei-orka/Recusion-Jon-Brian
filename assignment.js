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

function stringSplitter(str, separator) {
    //base
    if (str === '') {
        return [''];
    }

    const char = str.charAt(0);
    if (char === !separator) {
        newVar = stringSplitter(str.slice(1), separator)
        newVar[0] = char + newVar[0]

        return newVar;

    }

    if (char === separator) {
        withSep = stringSplitter(str.slice(1), separator)
        withSep = ['', ...withSep]

        return withSep;
    }




    stringSplitter('02/20/2020')
}

function fibonacci(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }

    const fib1 = fibonacci(n - 1)
    const fib2 = fibonacci(n - 2)
    return fib1 + fib2
}

function fibonacciSequence(n) {
    for (let i = 1; i <= n; i++) {
        console.log(fibonacci(i))
    }
}

