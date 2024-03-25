const style = {
  height: 20,
  margin: 4,
  //backgroundColor: '#00000000',
  backgroundColor: '#00000022',
  borderStyle:'none',

}
const Select = ({onChange, value, options}) => {
  return (
    <select style={style} value={value} onChange={onChange}>
      {options.map(o => 
          <option key={o.id} value={o.id}> {o.name} </option>
      )}
    </select>
  )
}
export default Select
