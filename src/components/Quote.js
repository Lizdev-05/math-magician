/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './Quote.css'

const Quote = () => {
  const [quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
  .then((data) => {
   let randomNum = Math.floor(Math.random() * data.length)
    setQuotes(data[randomNum]);
  });
  };

  useEffect(() => {
    getQuotes();
   }, [])
  return(
    <>
      <div className='quote'>
      <p>{quotes.text}</p>
      <p className='author'>{quotes.author}</p>
    <div>
        <button className='btn' onClick={getQuotes}>Get Quotes</button>
        </div>
        </div>
    </>
  );
}
export default Quote;
