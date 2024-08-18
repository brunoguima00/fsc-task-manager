import InputLabel from './InputLabel'
import PropTypes from 'prop-types'

const TimeSelect = (props) => {
  return (
    <div className="gap1 flex flex-col text-left">
      <InputLabel htmlFor="time"> Horário </InputLabel>

      <select
        id="time"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
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

TimeSelect.propTypes = {
  errorMessage: PropTypes.string,
}

export default TimeSelect
