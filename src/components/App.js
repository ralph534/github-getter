import React from 'react';
import PropTypes from 'prop-types';




class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       username: 'ralph534',
       userData: [],
       userRepo: [],
       perPage: 5
     }
   }


  render() {
    return(
      <div>
      <h1>{this.state.username}</h1>
      <h1>{this.state.username}</h1>
      <h1>{this.state.username}</h1>
      </div>
    )
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

App.defaultProps = {
  clientId: 'd6563bd6f4399c37cb7f',
  clientSecret: '07d45d0631e680b075580f46e12533885bffb5de'
}





export default App;
