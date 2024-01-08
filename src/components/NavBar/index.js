import "./style.scss";

function NavBar(props) {
    function handleChange(e){
        const {value} = e.target;

        props.handleCallback(value);
    }

    function handleClick(){

        props.handleCallBack();
    }

    return <div className="navGrapper">
        <input onChange={handleChange} className="input" type="text" placeholder="Buscar" />
        <button onClick={handleClick} className="button">Buscar</button>
    </div>
}

export default NavBar;
