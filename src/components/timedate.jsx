 import { useEffect,useState } from "react";
 
 export const time_date=()=>{ 
    
    const [datetime, setDate] = useState("");
     useEffect(() => {
       const interval = setInterval(() => {
      const now = new Date();
      setDate(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
    }, 1000);;
       return () => clearInterval(interval);
     }, []);
 
return datetime;

};
 
