import React, { useState, useEffect } from "react";

const QuoteFetcher = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchQuote = async () => {
        const response = await fetch('https://zenquotes.io/api/random');
        if (!response.ok) {
            throw new Error('Network response failed');
        }
        const data = await response.json();
        return data[0]; 
    };

    const fetchQuotesConcurrently = async () => {
        try {
          setLoading(true);
          const quotePromises = [fetchQuote(), fetchQuote(), fetchQuote()];
          const fetchedQuotes = await Promise.all(quotePromises);
          setQuotes(fetchedQuotes);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchQuotesConcurrently();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Quotes</h1>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              "{quote.q}" - {quote.a}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default QuoteFetcher;
