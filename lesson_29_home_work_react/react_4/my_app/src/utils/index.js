export function getData(url, callData) {
   fetch(url, {
      headers: {
         "Content-Type": "application/json"
      }
   })
      .then((response) => {
         // console.log(response)
         if (!response.ok) {
            throw new Error("Something went wrong")
         }

         return response.json()
      })
      .then((result) => {
         // console.log(result)
         callData(result, null)
      })
      .catch((error) => {
         // console.log(error.message)
         callData(null, error.message)
      })
}

