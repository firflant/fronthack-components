import React from 'react'
import PropTypes from 'prop-types'
import withFormControl from './FormControl'

const Select = ({
  name,
  value,
  required,
  setValue,
  options,
}) =>
  <select
    className='form__input'
    name={name}
    value={value}
    onChange={e => setValue(name, e.target.value, required)}
  >
    {(!value || !required) && <option value='' disabled={required}>{required ? 'Select' : 'All'}</option>}
    {options.map((item, index) =>
      <option
        key={index}
        value={(typeof item === 'string') ? item : item.value}
      >{(typeof item === 'string') ? item : item.label}</option>
    )}
  </select>

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ])),
}

export default withFormControl(Select)