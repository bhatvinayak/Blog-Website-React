import { useEffect, useState } from "react";
const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // const abortCont = new AbortController();
    setTimeout(() => {
      fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);

    // return () => abortCont.abort();
  }, [URL]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
