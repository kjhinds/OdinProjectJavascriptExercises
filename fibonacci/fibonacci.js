const fibonacci = function(fibIndex) {
    if (fibIndex < 0) return 'OOPS';
    let fib = 1;
    let prevFib;
    let prevprevFib;
    for (let i = 1; i < fibIndex; i++) {
        prevprevFib = prevFib | 0;
        prevFib = fib;
        fib = prevprevFib + prevFib;
    }
    return fib;
}

module.exports = fibonacci
