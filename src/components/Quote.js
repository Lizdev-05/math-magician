/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import './Quote.css'

const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();
  const colors = ["#ffff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7"];

  const getQuotes = () => {
    fetch('https://random-math-quote-api.herokuapp.com/')
    .then((res) => res.json())
  .then((data) => {
    setQuotes(data)
  });
  };

  useEffect(() => {
    getQuotes();
  }, [])
  
  useEffect(() => {
      textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  }, [quotes])
  return(
    <>
      <div className='quote'>
      <p ref={textRef}>{quotes.quote}</p>
      <p className='author'>{quotes.author}</p>
    <div>
          <button className='btns quote-btn' onClick={getQuotes}>Get Quotes</button>
          <a href={`https://twitter.com/intent/tweet?text=${quotes.quote}`} target='_blank'
            rel='noopener noreferrer'
          className='btns'>Tweet</a>
        </div>
        </div>
    </>
  );
}
export default Quote;
