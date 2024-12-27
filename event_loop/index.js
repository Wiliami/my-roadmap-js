/* 
    1. Single threaded
    2. Asynchronous
    3. Non-blocking
    4. Concurrent
*/


function foo(b) {
    const a = 10
    return a + b + 11
} // soma de valores

function bar(x) {
    const y = 3
    return foo(x * y)
}

const baz = foo(7)

console.log(baz)