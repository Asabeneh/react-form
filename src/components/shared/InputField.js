import React from 'react'
import PropTypes from 'prop-types'

// const styles = {
//   width: '100%',
//   height: 45
// }

const InputField = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  checked,
  className
}) => {
  if (type === 'radio') {
    return (
      <div className={className ? className : 'form-group'}>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {error && <small style={{ color: 'red' }}>{error}</small>}
      </div>
    )
  } else if (type === 'checkbox') {
    return (
      <div className={className ? className : 'form-group'}>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
        />
        {label && <label htmlFor={name}>{label}</label>}
        {error && <small style={{ color: 'red' }}>{error}</small>}
      </div>
    )
  }

  return (
    <div className={className ? className : 'form-group'}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        
      />
      <br />
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  )
}
InputField.defaultProps = {
  type: 'text',
  placeholder: ''
}
InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputField
