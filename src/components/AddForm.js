import React, { Component } from 'react'
import InputField from './shared/InputField'
import validator from 'validator'
import SelectField from './shared/SelectField'
import TextareaField from './shared/TextareaField'

class AddForm extends Component {
  state = {
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

  handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked }
      })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = e => {
    const { name } = e.target

    this.setState({
      touched: { ...this.state.touched, [name]: true }
    })

    console.log('Blurring')
  }

  validate = () => {
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

  handleSubmit = e => {
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
    console.log(data)
  }
  render() {
    const errors = this.validate()
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
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>React Form and Form Validation</legend>
          <InputField
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder='First Name'
            error={errors.firstName}
          />
          <InputField
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder='Last Name'
            error={errors.lastName}
          />
          <InputField
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder='Email'
            error={errors.email}
          />

          <SelectField
            options={options}
            name='country'
            onChange={this.handleChange}
          />

          <div>
            <p>Gender</p>
            <InputField
              label='Female'
              type='radio'
              id='female'
              name='gender'
              value='Female'
              onChange={this.handleChange}
              checked={this.state.gender === 'Female'}
            />
            <InputField
              label='Male'
              id='male'
              type='radio'
              name='gender'
              value='Male'
              onChange={this.handleChange}
              checked={this.state.gender === 'Male'}
            />
            <InputField
              label='Other'
              id='other'
              type='radio'
              name='gender'
              value='Other'
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <InputField
              label='CSS'
              type='checkbox'
              id='css'
              name='css'
              onChange={this.handleChange}
            />
            <InputField
              label='JavaScript'
              type='checkbox'
              id='javascript'
              name='javascript'
              onChange={this.handleChange}
            />
            <InputField
              label='React'
              type='checkbox'
              id='react'
              name='React'
              onChange={this.handleChange}
            />
          </div>
          <TextareaField
            label='Bio'
            name='bio'
            value={this.state.bio}
            onChange={this.handleChange}
          />
          <InputField type='file' name='file' onChange={this.handleChange} />
          <button>Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default AddForm
