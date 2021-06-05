import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
import Feed from '../Components/Feed/Feed';
import { Link } from 'react-router-dom';
import { INFO } from '../Components/Footer/FooterInfomation';
import Follow from '../Components/aside/Follow';
import Story from '../Components/Story/Story';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      resize: '',
      followList: [],
      storyList: [],
    };
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    fetch('http://localhost:3001/data/feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });

    fetch('http://localhost:3001/data/follow.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          followList: data,
        });
      });

    fetch('http://localhost:3001/data/story.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyList: data,
        });
      });

    document.querySelector('#main-right').style.left = `${
      167 + window.innerWidth / 2
    }px`;
  }

  handleResize = () => {
    this.setState({
      resize: `${167 + window.innerWidth / 2}px`,
    });
  };

  render() {
    const { feedList, followList, storyList } = this.state;
    return (
      <>
        <div className="main">
          <Nav />
          <main>
            <section id="main-section">
              <div id="main-left">
                <div className="story">
                  <div className="story-image">
                    <ul>
                      {storyList.map(content => {
                        return (
                          <Story
                            profileImg={content.profileImg}
                            nickName={content.nickName}
                            key={content.id}
                          />
                        );
                      })}
                    </ul>
                  </div>
                  <button type="button" className="story-arrow">
                    <div className="story-arrow-image"></div>
                  </button>
                </div>
                {feedList.map(comment => {
                  return (
                    <Feed
                      key={comment.id}
                      author={comment.author}
                      likeCount={comment.likeCount}
                      title={comment.title}
                      commentCount={comment.commentCount}
                      img={comment.img}
                      profileImg={comment.profileImg}
                      comments={comment.comments}
                      pastTime={comment.pastTime}
                    />
                  );
                })}
              </div>
              <div id="main-right" style={{ left: this.state.resize }}>
                <div className="main-right-profile">
                  <div className="main-right-profile-image">
                    <img
                      alt="profile-me"
                      src="images/geonwoojeon/images/profile/me.jpeg"
                    />
                  </div>
                  <div className="main-right-profile-nickname">
                    raing_8
                    <div className="main-right-profile-name">전건우</div>
                  </div>
                  <div className="main-right-profile-transform">전환</div>
                </div>
                <div className="main-right-push">
                  <p>회원님들 위한 추천</p>
                  <span>모두 보기</span>
                </div>
                {followList.map(content => {
                  return (
                    <Follow
                      profileImg={content.profileImg}
                      nickName={content.nickName}
                      key={content.id}
                    />
                  );
                })}

                <ul className="main-right-terms">
                  {INFO.map(el => {
                    return <li key={el.id}>{el.content}</li>;
                  })}
                </ul>
                <div className="main-right-terms-bottom">
                  © 2021 INSTAGRAM FROM FACEBOOK
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
