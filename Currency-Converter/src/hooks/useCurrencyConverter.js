import React, { useEffect, useState } from 'react'


function useCurrencyConverter(currency) {

  const [data, setData] = useState({});

  useEffect(() => {
    let API = `fca_live_W83xKmDNSvqt4h84sRR1wJVThP1r33xfBTmuk7dX`
    let URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API}&currencies=${currency}`

    fetch(URL)
      .then((res) => res.json)
      .then((res) => setData(res[currency]));

  }, [currency])
  console.log(data);
  return data
}

export default useCurrencyConverter