import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm.js';
import Profile from './Profile.js'
import axios from 'axios'
import '../style.css'



class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       username: '',
       userData: '',
       userRepo: '',
       userUrl: '',
       userLoc: '',
       perPage: 5
     }
   }


   // Getting users data from GitHub
   // componentDidMount(){
   //   axios.get('https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,)
   //   .then(function(response){
   //     console.log(response)
   //   })
   //   .catch(function(error){
   //     console.log(error)
   //   })
   // }


   getUser = (e) => {
    e.preventDefault();   /// <====  Prevent the page from reloading
    const user = e.target.elements.username.value; ///  <==== Targeting the username from element imput
    if(user){
      axios.get(`https://api.github.com/users/${user}`)  /// request from Url with `${user}` back ticks
      .then((res) =>{    /// then with the results => (res)
        const userData = res.data;  /// creating var for users repos and nesting though the data for it
        // console.log(userData)
        this.setState({
            userData: userData
        });
        console.log(userData);
      })
      .catch(function(error){
          console.log(error)
        })
    }  ///  <==== Targeting the username from element imput
   }


  render() {
    return(
    <div>
      <UserForm
       getUser={this.getUser}
      />
      <Profile
      userData = {this.state.userData} />
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
