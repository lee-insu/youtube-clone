import React, { Component } from 'react';

class Nav extends Component {
    state = {
        text:[],
    };
    
    submitRef = React.createRef();

    

    onSubmitEvent = (e) => {
        e.preventDefault();
        const newText = [this.submitRef.current.value, ...this.state.text];
        this.setState({text: newText});
        console.log(this.state.text);
        this.submitRef.current.value ='';
    };

    render() {
        return (
            <div>
              <nav> youtube</nav>
              <form onSubmit={this.onSubmitEvent}>
              <input ref={this.submitRef} />    
              <button>find</button>
              </form>   
            
            <ul>
                {this.state.text.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
            </div>
        );
    }
}

export default Nav;