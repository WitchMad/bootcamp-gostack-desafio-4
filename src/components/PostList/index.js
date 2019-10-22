import React, { Component } from 'react';
import Post from '../Post';
import './index.css';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lucas Henrique",
          avatar: "https://avatars3.githubusercontent.com/u/49926606?v=4"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus nec leo in gravida. Integer mattis pretium neque, volutpat sodales dolor scelerisque et. Quisque a dolor tincidunt, consectetur magna quis, placerat turpis.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Vivamus pellentesque metus vitae ullamcorper semper. Phasellus pharetra, turpis eu dictum dapibus, purus neque ullamcorper massa, at fermentum nisl nibh eu nulla. "
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Nullam pulvinar at eros quis consectetur."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Lucas Henrique",
          avatar: "https://avatars3.githubusercontent.com/u/49926606?v=4"
        },
        date: "02 Jun 2019",
        content: "tiam consectetur dui nec odio efficitur, ac viverra lectus vestibulum. Mauris ac molestie augue. Duis imperdiet eu massa vel iaculis. Nunc consectetur est ac blandit tincidunt. ",
        comments: [
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Curabitur eget sapien fermentum elit mollis commodo. Suspendisse ut arcu nec enim luctus vehicula. Phasellus sed arcu sit amet neque dapibus pulvinar sed eget augue. Aenean dapibus fringilla nulla, a tempor dolor aliquet a."
          }
        ]
      }
    ]
  };
  render(){
    return (
      <div id="PostList">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}

export default PostList;