

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input(props){
    return(
    <div className="form-group">
                        <label for={props.label} className="d-flex justify-content-start">{props.text}:</label>
                        <input type={props.type} className="form-control" id={props.label} name={props.label} onChange={props.onChange} />
                        {(props.label=="password" || props.label=="confirmpassword") && <FontAwesomeIcon style={{"float": "right","cursor": "pointer","margin-right": "10px","margin-top": "-30px"}}
                            icon={props.icon}
                            onClick={props.onClick}
                        />}                        
                <p className="text-danger d-flex justify-content-start">{props.error}</p>
                    </div>
    )
}
export default Input

// showPassword ? faEyeSlash : faEye
//handleTogglePassword