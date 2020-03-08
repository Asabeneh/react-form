import React from 'react'
import PropTypes from 'prop-types'

const TextareaField = ({
  label,
  name,
  cols,
  rows,
  value,
  onChange,
  className
}) => {
  return (
    <div className={className ? className : 'form-group'}>
      {label ? <p>{label}</p> : ''}
      <textarea
        name={name}
        cols={cols}
        row={rows}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

TextareaField.defaultProps = {
  cols: 50,
  rows: 10
}

TextareaField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextareaField
