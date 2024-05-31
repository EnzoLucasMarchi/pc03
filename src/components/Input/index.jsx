export const Input = ({id, btnFor, btnClass, value, setValue})=>{
    return(
        <label htmlFor={btnFor}>
            <input className={btnClass} id={id} type="number" value={value} onChange={setValue} min="0"/>
        </label>
    )
}