import { useEffect, useState } from "react";
import "./RandomQuote.css";

const FetchQuotes = () => {
  const [quote, setQuote] = useState({
    text: "Loading...",
    author: "",
  });

  const fetchNewQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote({
        text: data.quote,
        author: data.author,
      });
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({
        text: "Failed to fetch quote. Please try again.",
        author: "",
      });
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">~ {quote.author}</div>
          <button 
            onClick={fetchNewQuote}
            className="button1"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchQuotes;