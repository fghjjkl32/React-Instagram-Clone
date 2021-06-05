import React from 'react';
import { Link } from 'react-router-dom';

class Story extends React.Component {
  render() {
    return (
      <li>
        <Link to="/">
          <img
            className="story-profile"
            alt="story-profile-1"
            src={this.props.profileImg}
          />
        </Link>
        <span className="story-ID">{this.props.nickName}</span>
        <img
          className="stroy-ring"
          alt="ring"
          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
        />
      </li>
    );
  }
}

export default Story;
