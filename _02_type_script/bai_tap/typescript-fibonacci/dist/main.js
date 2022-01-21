function getFibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    return getFibonacci(n - 1) + getFibonacci(n - 2);
}
let n = 20;
let sum = 0;
console.log("Dãy " + n + " số Fibonacci đầu tiên: ");
for (let i = 1; i <= n; i++) {
    console.log(getFibonacci(i) + " ");
    sum += getFibonacci(i);
}
console.log("Tổng " + n + " số Fibonacci đầu tiên là: " + sum);
//# sourceMappingURL=main.js.map