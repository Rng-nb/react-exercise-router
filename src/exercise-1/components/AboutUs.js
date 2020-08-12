import React from 'react';
import {Link} from 'react-router-dom';
class AboutUs extends React.Component {
    render() {
        return <div style={{paddingLeft:'100px'}}>
            <h2>Company: ThoughtWorks.Local</h2>
            <h2 style={ {paddingBottom: '20px'}} >Location: Xi'an</h2>
            <h2>For more information,please</h2>
            <h2>view our 
              <Link to='/home' style={{textDecoration:"none",paddingLeft: '5px'}}>website.</Link>
            </h2>
        </div>;
    }
}

export default AboutUs;
