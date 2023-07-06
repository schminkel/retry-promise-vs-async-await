function promise() {

  console.log('\n### run promise function')

  let promise = doSomething()

  for (var i = 0; i < 5; i++) {
    console.log(i)
    /**
     * For each iteration, the promise is caught if it fails
     * and doSomething() is called again. This creates a new
     * promise that is assigned to the promise variable, which
     * will be used in the next iteration of the loop.
     */
    promise = promise.catch(() => doSomething())
  }
  promise.then((message) => {
    console.log('This is in the then ' + message)
  }).catch((message) => {
    console.log('This is in the catch ' + message)
  })

  console.log('This is after the promise')
}