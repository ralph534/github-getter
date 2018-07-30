import React from 'react';
import '../style.css'








var Profile = function(props) {



if(props.userData) {
    return(
        <div className="panel panel-dark">
          <div className="panel-heading">
            <h3 className="panel-title">{props.userData.name}</h3>
          </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={props.userData.avatar_url} className="thumbnail" style={{width:"100%"}}/>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <span className="badge badge-primary" role="alert">Repos: {props.userData.public_repos}</span>
                      <span className="badge badge-success" role="alert">Gist: {props.userData.public_gists}</span>
                      <span className="badge badge-danger" role="alert">Followers: {props.userData.followers}</span>
                      <span className="badge badge-warning" role="alert">Following: {props.userData.following}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-group">
                      <li className="list-group-item"><strong>Username:</strong> {props.userData.login}</li>
                      <li className="list-group-item"><strong>Location:</strong> {props.userData.location}</li>
                      <li className="list-group-item"><strong>Email Address:</strong> {props.userData.email}</li>
                      <li>{props.repos_url}</li>

                      </ul>
                    </div>
                  </div>
                   <a className="btn btn-primary" target="_blank" href={props.userData.html_url}>Visit Profile</a>
                </div>
              </div>
            </div>
        </div>
    )
  } else {return null}
  }






export default Profile;
