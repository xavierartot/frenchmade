import React from 'react';
import { Button } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="container d-flex flex-column flex-md-row justify-content-start">
          <p>Home</p>
          <Button>Xav</Button>
        </div>
      </div>
    );
  }
}
export default Home;
