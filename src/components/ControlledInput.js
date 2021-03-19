export function ControlledInput({value, setValue}) {
  return <input type="text" value={value} onChange={({target}) => setValue(target.value)}/>
}