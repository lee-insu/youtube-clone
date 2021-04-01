import React, { Component } from 'react';

class Nav extends Component {

    formRef = React.createRef();
    submitRef = React.createRef();

    onsubmitEvent = (e) => {
        e.preventDefault();
        const search = submitRef.current.value
        console.log(search); 
    }

    render() {
        return (
            <div>
              <nav> youtube</nav>
              <form ref={formRef} onSubmit={onSubmitEvent}>
              <input ref={submitRef} type="text" name="" id=""/>    
              <button className="find-button">find</button>
              </form>   
            </div>
        );
    }
}

export default Nav;