import Card from "../Card";
import "./style.scss";

function List(props) {
  return <div className="containerGrapper">
    {props.food.map((comida, llave) =>{
        return <Card key={llave} food={comida}/>
    })}
     
    
  </div>;
}

export default List;
