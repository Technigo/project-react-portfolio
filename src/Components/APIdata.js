import React, { useState, useEffect } from 'react';

const [gitData, setGitData] = useState([]);

const fetchData = () => {
  fetch('https://api.github.com/users/petrasson/repos')
    .then((res) => res.json())
    .then((data) => setGitData(data))
    .catch((error) => console.error('error', error))
    .finally(() => console.log('data', gitData))
}
useEffect(() => { fetchData() }, []);


