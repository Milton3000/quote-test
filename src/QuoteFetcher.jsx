import React, { useState, useEffect } from 'react';

const QuoteFetcher = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = '/api/random'; // Using a proxy here (check package.json)
    const NUM_QUOTES = 3;
    const ERROR_MESSAGE = 'Failed to fetch quotes. Please try again later.';

    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const uniqueQuotes = new Set(); // Use a set to ensure uniqueness
        while (uniqueQuotes.size < NUM_QUOTES) {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          uniqueQuotes.add(data[0]);
        }
        setQuotes(Array.from(uniqueQuotes)); // Convert set to array
      } catch (error) {
        setError(ERROR_MESSAGE);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
