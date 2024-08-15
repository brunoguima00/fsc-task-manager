import InputLabel from './InputLabel'

const TimeSelect = (props) => {
  return (
    <div className="gap1 flex flex-col text-left">
      <InputLabel htmlFor="time"> Horário </InputLabel>

      <select
        id="time"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {props.errorMessage && (
        <p className="text-left text-xs text-red-600">{props.errorMessage}</p>
      )}
    </div>
  )
}

export default TimeSelect
