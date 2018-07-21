import React from 'react';




var UserForm = function(props){


  var srchStyle = {
    margin: "20px auto",
    display: "block"


  }

    return(
      <form onSubmit={props.getUser}>
         <input style={srchStyle} type="text" name="username"/>
         <button>Submit</button>
      </form>
    )
}


export default UserForm;
