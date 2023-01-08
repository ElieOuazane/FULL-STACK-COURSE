import { useEffect, useState } from "react";
import { getData } from "../utils";

export function useFetch(url) {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)


   function fetchData(url) {
      getData(url, (result, error) => {
         if (error) {
            setError(error)
         } else {
            setData(result)
         }
      })
   }

   useEffect(() => {
      if (url) {
         fetchData(url)
      }
   }, [url])

   return [data, error, fetchData]
}