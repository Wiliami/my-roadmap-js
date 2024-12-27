const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 300)
})


minhaPromise
.then(handleFulFilledA, handleRejectedA)
.then(handleFulFilledB, handleRejectedB)
.then(handleFulFilledC, handleRejectedC)