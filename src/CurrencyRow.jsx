const CurrencyRow = (props) => {
    const {
        currencyOptions
    } = props
    return ( 
        <div>
            <input type='number' className="input" />
            <select>
                {currencyOptions.map((option,index) => (
                    <option key={index}value={option}>{option}</option>
                ))}
                
            </select>
            
        </div>
     );
}
 
export default CurrencyRow;