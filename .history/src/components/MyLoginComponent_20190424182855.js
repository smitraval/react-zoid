import React from 'react';
import MyLoginZComponent

class MyLoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    getInitialState() {
        return { email: this.props.prefilledEmail };
    }

    render() {
        return (
            <form>
                <input
                    placeholder='email'
                    defaultValue={this.state.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                ></input>
                <br />
                <input
                    placeholder='password' type='password'
                    onChange={event =>
                        this.setState({ password: event.target.value })
                    }
                ></input>
                <br />
                <button
                    className='btn btn-primary'
                    onClick={() => setTimeout(() => {
                        this.props.onLogin(this.state.email);
                    }, 2000)}> Log In
        </button>
            </form>
        )
    }

}

export default MyLoginComponent;