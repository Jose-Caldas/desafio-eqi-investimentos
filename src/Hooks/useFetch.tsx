import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: RequestInfo | URL, options: RequestInit | undefined) => {
      let response;
      let data;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        data = await response.json();
        if (!response.ok) throw new Error(data.message);
      } catch (error) {
        data = null;
        console.log(error);
      } finally {
        setData(data);
        setLoading(false);
        return { response, data };
      }
    },
    []
  );

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
