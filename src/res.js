import React, { Component, createRef } from 'react'
import './App.css'

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false
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

  handleSubmit = e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
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
      country,
      gender,
      bio,
      file,
      skills: formattedSkills
    }
    console.log(data)
  }
  render() {
    return (
      <div className='App'>
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder='First Name'
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder='Last Name'
            />
          </div>
          <div>
            <select
              name='country'
              value={this.state.country}
              onChange={this.handleChange}
            >
              <option value=''>-- select country --</option>
              <option value='Finland'>Finland</option>
              <option value='Sweden'>Sweden</option>
              <option value='Norway'>Norway</option>
              <option value='Denmark'>Denmark</option>
            </select>
          </div>
          <div>
            <label>Male</label>
            <input
              type='radio'
              name='gender'
              value='Male'
              onChange={this.handleChange}
              checked={this.state.gender === 'Male'}
            />{' '}
            <br />
            <label>Female</label>
            <input
              type='radio'
              name='gender'
              value='Female'
              onChange={this.handleChange}
              checked={this.state.gender === 'Female'}
            />{' '}
            <br />
            <label>Other</label>
            <input
              type='radio'
              name='gender'
              value='Other'
              onChange={this.handleChange}
              checked={this.state.gender === 'Other'}
            />
          </div>
          <div>
            <p>Select your skills</p>
            <input type='checkbox' name='html' onChange={this.handleChange} />
            <label>HTML</label> <br />
            <input type='checkbox' name='css' onChange={this.handleChange} />
            <label>CSS</label> <br />
            <input
              type='checkbox'
              name='javascript'
              onChange={this.handleChange}
            />
            <label>JavaScript</label> <br />
          </div>
          <div>
            <p>You bio: </p>
            <textarea
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App
