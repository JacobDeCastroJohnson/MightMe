import React from 'react';
import ATeamMember from './ATeamMember.jsx';

class ATEAM extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA

  }

  render() {
    return (
      <div>
        <h1> Test from ATEAM level</h1>
        <ATeamMember />
      </div>
    )
  }
}
export default ATEAM;