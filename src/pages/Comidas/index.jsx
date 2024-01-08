import { useParams } from "react-router-dom";
import { useEffect } from "react";
import data from "../../data/startups.json"



function Comidas(props){
    const {name} = useParams();

    return <div>
        {data.map((a, key) =>{
            return <div key={key}>
             {a.name.toLowerCase() == name.toLowerCase() &&
        
             <>
                  <h1>{a.name}</h1>
                  <p>{a.desc}</p>
             </> 
             }
             </div>
        })}
        </div>
}

export default Comidas;