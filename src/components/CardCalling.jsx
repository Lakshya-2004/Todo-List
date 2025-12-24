export const CardCalling =(data)=>
    
    {

         return(
         <div >
            <span>Name:{data.Elem.name}</span>
            <span>IMDB:{data.Elem.IMDB}</span>
            <span><a href={data.Elem.WatchNow} 
        target="_blank"><button>Watch Now</button>
        </a>
        </span>
        </div>
    );
    
    }

    export default CardCalling;