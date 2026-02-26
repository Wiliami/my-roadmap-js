function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

// doSomething(successCallback, failureCallback);


async function myPromise() {
  try {
    const response = await fetch('http://localhost:3000/api/users')

    if(!response.ok) {
      failureCallback()
    }

    return successCallback()

  } catch (err) {
    console.error('Internal server error:', err)
  }
}



console.log(myPromise())