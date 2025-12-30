import React from "react";
import PostCreateForm from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post </h1>
      <PostCreateForm />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
