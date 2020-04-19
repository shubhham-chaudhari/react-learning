import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import IndividualHeader from './header';
import EditProfile from './edit-profile';
// import Main from './main';

const Individual = ({match}) => {
    return(
        <div>
            <IndividualHeader />
            <Route path={`${match.url}`} component={SubView}/>
        </div>
    )
  }
  const SubView = ({ match }) => (
    <div>
      <h3>Section: {match.params.sectionName}</h3>
    </div>
);

// class Individual extends React.Component{
    
//     render(){
//         // const url = this.props.matc
//         return(
//             <React.Fragment>
//                 <IndividualHeader/>
//                 {/* <Route path="/individual/" component={Individual} />  */}
//                 <Switch>
//                     <Route path="/individual/edit-profile" component={EditProfile}/>
//                 </Switch>
//             </React.Fragment>    
//         )
//     }
// }
export default Individual;