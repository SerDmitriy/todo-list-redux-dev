import React from 'react'
import './registration.css'

import { Input, Button } from '@material-ui/core'

class Registration extends React.Component {
	render() {
		return (
			<form id='registration'>
				<h4>Enter your registration information.</h4>

				<div className='bold-text'>Input your First name</div>
				<Input placeholder='First name' className='registration__input'></Input>
				<div className='bold-text'>Input your email</div>
				<Input placeholder='example@mail.com' className='registration__input'></Input>
				<div className='bold-text'>Input your password</div>
				<Input placeholder='password' className='registration__input'></Input>
				<br />
				<Button variant='contained' color='default' className='registration__btn'>
					Register
				</Button>
				<br />
				<a href='/'>Home page</a>
				<br />
			</form>
		)
	}
}

export default Registration
