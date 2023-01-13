import { useEffect, useState } from "react";

export function useFetch(url, initialState) {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null);

  function getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(JSON.stringify(error));
      });
  }

  useEffect(() => {
    if (url) {
      getData(url);
    }
  }, [url]);
  return [data, error, getData, setData, setError];
}
