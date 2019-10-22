import React from 'react';
import './index.css';

function Post({ data }){
    return(
      <div id="Post">
        <div id="author">
          <div id="img">
            <img src={data.author.avatar} />
          </div>
          <div id="info">
            <h4>{data.author.name}</h4>
            <small>{data.date}</small>
          </div>
        </div>
        <div id="content">
          <p>{data.content}</p>
        </div>
        <div id="comments">
          {data.comments.map(comment => {
            return (
              <div key={comment.id} id="comment">
                <div id="img">
                  <img src={comment.author.avatar} />
                </div>
                <div id="content">
                  <b>{comment.author.name}</b> {comment.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Post;