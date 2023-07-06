function doSomething() {
  return new Promise((resolve, reject) => {
    // simulate a time consuming function
    setTimeout(() => {
      // do some tricky math
      
      let a = 1 + 1
      
      if (a == 2) {
        console.log('doSomething success ✅')
        resolve('Success doing something')
      } else {
        console.log('doSomething failed ❌ ...retrying')
        reject('Failed to do something')
      }
    }, 1500);
  })
}