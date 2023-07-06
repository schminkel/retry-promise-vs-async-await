function promiseAsyncAwait() {

  console.log('\n### run promiseAsyncAwait function')

  async function retryDoSomething() {
    let message
    for (var i = 0; i < 5; i++) {
      console.log(i)
      try {
        message = await doSomething()
        console.log('This is in the then: ' + message)
        break
      } catch (err) {
        console.log('This is in the catch: ' + err)
      }
    }
    return message
  }
  retryDoSomething()

  console.log('This is after the async await')
}