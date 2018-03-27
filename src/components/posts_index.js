import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  // runs right away
componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
        return (
            <li className="list-group-item" key={post.id} >{post.title}</li>
        )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          {/* using Link tag from react-router-dom */}
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h2>Post Index</h2>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);