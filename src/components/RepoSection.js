import React from 'react';
import Moment from 'react-moment';


var RepoSection = function(props){
  if (props.repitems) {
    return (
      <div>
      <div>
      Repositories:
      </div>
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>
                <div>
                  <a href={repitem.html_url} target="_blank">{repitem.name}</a> || Started <Moment from={new Date()}>{repitem.created_at}</Moment>
                </div>
                <div>
                  <i>{repitem.description}</i>
                </div>
                <div>
                 Language: {repitem.language} || Watchers: {repitem.watchers_count} || Forks: {repitem.forks_count}
                </div>
              </div>
            </li>
          )}
        </ul>
        </div>
      )
  } else { return null;}
  };


export default RepoSection;
