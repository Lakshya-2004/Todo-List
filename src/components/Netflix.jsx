import Details from "../Api/Link.json";
import CardCalling from "./CardCalling";

export const Netflix =()=>{
    return(
    <>
  {Details.map((Elem)=>{
      return( <CardCalling key={Elem.id} Elem={Elem}/>);
    })}
  
  </>);
}
 export default Netflix;



// const Component =()=>{
//   return <p>I'm Repeating Para</p>;
// }

//  export const Component2 =()=>{
//     return <p>I'm Another Componenet from Same file
//     </p>
// }
// export default Component;