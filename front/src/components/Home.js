import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Calendar from "./Calendar";

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/posts/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts</div>
    );
    return (
      <div className="container">
        <Calendar />
        <h4 className="center">Home</h4>

        <p>{postList}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
