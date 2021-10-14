import { useEffect, useState } from "react";

export interface Iquote {
  quote: string, 
  author: string
} 

export const useFetchQuote = () => {

  const [quotes, setQuotes] = useState<Iquote[]>([]);
  const [quote, setQuote] = useState<Iquote>();

  const randomizeQuote = (quotes:Iquote[]) => {
    let index = Math.floor(Math.random() * (quotes.length + 1));
    setQuote(quotes[index]);
  }
  
  useEffect(()=>{
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(res => res.json())
    .then((data) => {
      setQuotes(data.quotes);
      randomizeQuote(data.quotes);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, []);

  return {quotes, quote, randomizeQuote}
}