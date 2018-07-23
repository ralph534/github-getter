import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm.js';
import axios from 'axios'



class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       username: '',
       userData: [],
       userRepo: '',
       userUrl: '',
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
      .then((res) => {    /// then with the results => (res)
        const userRepo = res.data.public_repos;
        const userUrl =  res.data.url /// creating var for users repos and nesting though the data for it
        this.setState({
            userRepo: userRepo,
            userUrl: userUrl
        });
      })
      .catch(function(error){
          console.log(error)
        })
    }  ///  <==== Targeting the username from element imput
   }


  render() {
    return(
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="">GitHub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        </div>
      </nav>
      <UserForm />
      <UserForm />
      <UserForm
       getUser={this.getUser}
      />
      {this.state.userRepo ? <p>Number of repos: {this.state.userRepo}</p> : <p>Please enter a username</p>}
      {this.state.userUrl ? <p>Number of Url: {this.state.userUrl}</p> : <p>Please enter a username</p>}
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
