import React from 'react';
import '../style.css'








var Profile = function(props) {




    return(
        <div className="panel panel-dark">
          <div className="panel-heading">
            <h3 className="panel-title">{(props.userData) ? ( <h3>{props.userData.name}</h3> ) : (<p></p>   )}</h3>
          </div>
          <hr></hr>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={props.userData.avatar_url} className="thumbnail" style={{width:"100%"}}/>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      {(props.userData) ? ( <span className="badge badge-primary" role="alert">Repos: {props.userData.public_repos}</span> ) : (<p></p>   )}
                      {(props.userData) ? ( <span className="badge badge-success" role="alert">Gist: {props.userData.public_gists}</span> ) : (<p></p>   )}
                      {(props.userData) ? ( <span className="badge badge-danger" role="alert">Followers: {props.userData.followers}</span> ) : (<p></p>   )}
                      {(props.userData) ? ( <span className="badge badge-warning" role="alert">Following: {props.userData.following}</span> ) : (<p></p>   )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-group">
                      {(props.userData) ? ( <li className="list-group-item"><strong>Username:</strong> {props.userData.login}</li> ) : (<p></p> )}
                      {(props.userData) ? ( <li className="list-group-item"><strong>Location:</strong> {props.userData.location}</li> ) : (<p></p> )}
                      {(props.userData) ? ( <li className="list-group-item"><strong>Email Address:</strong> {props.userData.email}</li> ) : (<p></p> )}
                      <li>{props.repos_url}</li>

                      </ul>
                    </div>
                  </div>
                  {(props.userData) ? ( <a className="btn btn-primary" target="_blank" href={props.userData.html_url}>Visit Profile</a> ) : (<p></p> )}
                </div>
              </div>
            </div>
        </div>
    )
  }






export default Profile;
