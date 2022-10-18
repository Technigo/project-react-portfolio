import React, { /* useState, */ useEffect } from 'react';

const FetchInfo = () => {
  /* const [info, setInfo] = useState({}) */

  const APIKey = 'Access token for github API development'

  const APIURL = `https://api.github.com/users/${APIKey}/repos`

  const fetchAPI = () => {
    fetch(APIURL)
      .then((res) => (res.json))
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => console.log('no errors'))
  }

  useEffect(() => {
    fetchAPI()
  }, []);

  return (
    <div>Im the Header component</div>
  )
}
export default FetchInfo;

/* key="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" */