const Button = (props) => {
    
    
    return <>
    <a href={props.enlace} target="_blank">
        <button type="button">
            <img width="40" height="40" src={props.icon} alt={props.alt}/>
            <h3 style={{margin: 0}}>{props.name}</h3>
        </button>
    </a>        
    </>
}

/*
Sin logos
<a href={props.enlace} target="_blank">
        <button type="button">
            <h3 style={{margin: 0}}>{props.name}</h3>
        </button>
    </a>

Con logos
<a href={props.enlace} target="_blank">
        <button type="button">
            <img width="48" height="48" src={props.icon} alt={props.alt}/>
            <h3 style={{margin: 0}}>{props.name}</h3>
        </button>
    </a>
 */

export default Button;