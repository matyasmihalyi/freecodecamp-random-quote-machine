import {Iquote} from './quoteHook'

interface CardProps {
  quote:Iquote
  quotes:Iquote[]
  randomizeQuote (quotes:Iquote[]):void
  spinIt():void
}

export const Card = ({quote, quotes, randomizeQuote, spinIt}:CardProps ) => {  

  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5" style={{zIndex: 5}}>
      <div className="card py-4 px-5 shadow " id="quote-box">
        <div className="card-body text-center">
          <p className="card-title lead" id="text">{'"' + quote.quote + '"'}</p>
          <p className="text-end" id="author">{'- ' + quote.author}</p>
          <button className="btn btn-outline-secondary btn-lg mx-1" id="new-quote" onClick={()=> {randomizeQuote(quotes); spinIt()}}>New Quote</button>
          <a rel="noreferrer" className="btn btn-secondary btn-lg mx-1" target="_blank" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.quote + '"\n-' + quote.author)}`} id="tweet-quote"><i className="ri-twitter-fill"></i></a>
          <a rel="noreferrer" className="btn btn-secondary btn-lg mx-1" target="_blank" href={`https://wa.me/?text=${encodeURIComponent('"' + quote.quote + '"\n-' + quote.author)}`} id="tweet-code"><i className="ri-whatsapp-fill"></i></a>
        </div>
      </div>
    </div>  
  )
}