import React from 'react';
import './post.css';

export const Post = (props) => (
  <div className="post">
    <div className ="post_header">
      <div>{props.owner}</div>
      <div>{props.location}</div>
    <img className="post_img" src ={props.imageUrl}/>
    <div className="post_comment">
      <div>{props.comments.map(comment => (
        <div>
        {comment.name}
        </div>
      ))}</div>
      <div>{props.comments.map(comment => (
        <div>
        {comment.text}
        </div>
      ))}</div>
      <div>{props.comments.map(comment => (
        <div>
        {comment.color}
        </div>
      ))}</div>
      <div>{props.comments.map(comment => (
        <div>
        {comment.age}
        </div>
      ))}</div>
    </div>
  </div>
</div>
);
