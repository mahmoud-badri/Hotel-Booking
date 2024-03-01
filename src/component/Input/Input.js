


function Input(props){
    return(
    <div className="form-group">
                        <label for={props.label} className="d-flex justify-content-start">{props.text}:</label>
                        <input type={props.label} className="form-control" id={props.label} name={props.label} onChange={props.onChange} />
                        <p className="text-danger d-flex justify-content-start">{props.error}</p>
                    </div>
    )
}
export default Input

// (e) => chageUserRegister(e)              errosRegister.emailError