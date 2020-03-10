import React, { useState } from 'react'
import InputField from './shared/InputField'
import validator from 'validator'
import SelectField from './shared/SelectField'
import TextareaField from './shared/TextareaField'

const AddForm = props => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    touched: {
      firstName: false,
      lastName: false
    }
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData.skills, [name]: checked })
    } else {
      const data = { ...formData, [name]: value }
      setFormData(data)
    }
  }
  const handleBlur = e => {
    const { name } = e.target

    this.setState({
      touched: { ...formData.touched, [name]: true }
    })
  }

  const validate = () => {
    const errors = {
      firstName: '',
      lastName: '',
      email: ''
    }
    if (
      this.state.touched.firstName &&
      !validator.isLength(this.state.firstName, { min: 3, max: 12 })
    ) {
      errors.firstName = 'First name must be between 2 and 12 characters'
    }
    if (
      this.state.touched.lastName &&
      !validator.isLength(this.state.lastName, { min: 3, max: 12 })
    ) {
      errors.lastName = 'Last name must be between 2 and 12 characters'
    }
    if (this.state.touched.email && !validator.isEmail(this.state.email)) {
      errors.email = 'A valid email is required'
    }
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      bio,
      file,
      skills
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills
    }
  }

  const errors = validate()
  const options = [
    {
      value: '',
      label: '-- Select Option--'
    },
    {
      value: 'Finland',
      label: 'Finland'
    },
    {
      value: 'Sweden',
      label: 'Sweden'
    },
    {
      value: 'Norway',
      label: 'Norway'
    },
    {
      value: 'Denmark',
      label: 'Denmark'
    }
  ]

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>React Form and Form Validation</legend>
        <InputField
          type='text'
          name='firstName'
          value={this.state.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='First Name'
          error={errors.firstName}
        />
        <InputField
          type='text'
          name='lastName'
          value={this.state.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Last Name'
          error={errors.lastName}
        />
        <InputField
          type='email'
          name='email'
          value={this.state.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Email'
          error={errors.email}
        />

        <SelectField options={options} name='country' onChange={handleChange} />

        <div>
          <p>Gender</p>
          <InputField
            label='Female'
            type='radio'
            id='female'
            name='gender'
            value='Female'
            onChange={handleChange}
            checked={this.state.gender === 'Female'}
          />
          <InputField
            label='Male'
            id='male'
            type='radio'
            name='gender'
            value='Male'
            onChange={handleChange}
            checked={this.state.gender === 'Male'}
          />
          <InputField
            label='Other'
            id='other'
            type='radio'
            name='gender'
            value='Other'
            onChange={handleChange}
            checked={this.state.gender === 'Other'}
          />
        </div>

        <div>
          <p>Select your skills</p>
          <InputField
            label='HTML'
            type='checkbox'
            id='html'
            name='html'
            onChange={handleChange}
          />
          <InputField
            label='CSS'
            type='checkbox'
            id='css'
            name='css'
            onChange={handleChange}
          />
          <InputField
            label='JavaScript'
            type='checkbox'
            id='javascript'
            name='javascript'
            onChange={handleChange}
          />
          <InputField
            label='React'
            type='checkbox'
            id='react'
            name='React'
            onChange={handleChange}
          />
        </div>
        <TextareaField
          label='Bio'
          name='bio'
          value={this.state.bio}
          onChange={handleChange}
        />
        <InputField type='file' name='file' onChange={handleChange} />
        <button>Submit</button>
      </fieldset>
    </form>
  )
}

export default AddForm
