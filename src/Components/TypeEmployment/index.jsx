import "./index.css";
const TypeEmployment=(props)=>{
    const{type}=props
    const{id,label}=type
    console.log(type)

return(
    <div className="checkbox-container">
        <input type="checkbox"/>
        <label className="labels">{label}</label>
    </div>
)
}
export default TypeEmployment