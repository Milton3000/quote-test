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

})

}
