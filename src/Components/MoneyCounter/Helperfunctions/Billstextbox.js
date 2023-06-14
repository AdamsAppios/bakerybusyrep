const Billstextbox = ({moneyval, handleChange, state}) => {
    const handleBlur = (e) => {
        if (e.target.value == "")
            handleChange({ type: e.target.name, value: 0 })
    }
    
    const handleFocus = (e) => {
        if (e.target.value != "")
            handleChange({ type: e.target.name, value: "" })    
    }

    return ( 
    <> 
        <tr>
            <td>
                <span class="input-group-text" id="inputGroup-sizing-sm">{moneyval}</span></td>
            <td>
                <input
                    type="number"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    id={`ch${moneyval}`}
                    name={`ch${moneyval}`}
                    onChange={(e)=>handleChange({type:`ch${moneyval}`, value: parseInt(e.target.value)})}
                    onBlur={handleBlur} 
                    onFocus={handleFocus}
                    value={state[`val${moneyval}`]}
                />
            </td>
        </tr>
   </>)
}

export default Billstextbox