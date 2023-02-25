// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    isSubmit: false,
    firstname: '',
    lastname: '',
    firstnameBlur: false,
    lastnameBlur: false,
  }

  changeLastName = event => {
    this.setState({lastname: event.target.value, lastnameBlur: false})
  }

  changeName = event => {
    this.setState({firstname: event.target.value, firstnameBlur: false})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstnameBlur: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastnameBlur: true})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname === '') {
      this.setState({firstnameBlur: true})
    }
    if (lastname === '') {
      this.setState({lastnameBlur: true})
    } else {
      this.setState({isSubmit: true})
    }
  }

  submitAnother = () => {
    this.setState({isSubmit: false, firstname: '', lastname: ''})
  }

  render() {
    const {
      firstname,
      lastname,
      lastnameBlur,
      firstnameBlur,
      isSubmit,
    } = this.state
    return (
      <div>
        <div>
          <h1>Registration Form</h1>
          {isSubmit ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button type="button" onClick={this.submitAnother}>
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={this.submitForm}>
              <label htmlFor="first">FIRST NAME</label>
              <input
                id="first"
                placeholder="First name"
                value={firstname}
                onBlur={this.onBlurFirstName}
                onChange={this.changeName}
              />
              {firstnameBlur && <p>Required</p>}
              <label htmlFor="last">LAST NAME</label>
              <input
                id="last"
                value={lastname}
                placeholder="Last name"
                onBlur={this.onBlurLastName}
                onChange={this.changeLastName}
              />
              {lastnameBlur && <p>Required</p>}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
