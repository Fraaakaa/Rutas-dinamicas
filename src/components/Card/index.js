import "./style.scss"
import { Link } from "react-router-dom";

function Card(props){
    const {food} = props;
    return <Link  className="linker" to={`/comidas/${food.name}`}><div key={props.llave} className="cardGrapper">
    <h1 className="title">{food.name}</h1>
    <p className="text">{food.desc}</p>
</div></Link>
    
}

export default Card;