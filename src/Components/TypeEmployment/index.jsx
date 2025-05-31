import "./index.css";
const TypeEmployment=(props)=>{
    const{type,employmentfilter}=props
    const{id,label}=type
    // console.log(label)
    const checkboxinput=(event)=>{
        console.log(event.target.value)
        employmentfilter(event.target.value)
    }

return(
    <div className="checkbox-container">
        <input type="checkbox" value={label} onChange={checkboxinput}/>
        <label className="labels">{label}</label>
    </div>
)
}
export default TypeEmployment