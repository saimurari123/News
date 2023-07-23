import React from 'react'

function api() {
    const fetch = require('node-fetch');

const url = 'https://numbersapi.p.rapidapi.com/5/21/date?fragment=true&json=true';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2c850267a2mshd8d2b649a96744ep16da70jsna8bac2116a2f',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  }
};

  return (
    <div></div>
  )
}

export default api