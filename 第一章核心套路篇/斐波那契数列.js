var fib = function(n, a = 0, b = 1) {
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  return fib(n - 1, b, a + b);
};

// 测试尾递归实现的斐波那契数列函数
const n = 5; // 假设计算前 5 项的和
const result = fib2(n);
// 0 1 1 2 4
console.log(`斐波那契数列第 ${n} 项的值为：${result}`);
function fib1(n, str) {
  if (n <= 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  return fib1(n -1) + fib1(n-2)
};

// 循环求答案
function fib2(n) {
  if ( n === 0) {
    return 0
  }
  if ( n === 2 || n === 1) {
    return 1
  }
  let pre = 1, cur = 1
  for (let i = 3; i <= n; i++) {
    const sum = pre + cur
    pre = cur
    cur = sum
  }
  return  cur
}
