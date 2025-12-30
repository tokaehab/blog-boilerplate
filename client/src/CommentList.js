import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    if (comment.status === "Pending") {
      return <li key={comment.id}>Pending</li>;
    } else if (comment.status === "Rejected") {
      return <li key={comment.id}>Rejected</li>;
    }
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
