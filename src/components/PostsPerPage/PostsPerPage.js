import React from "react";

const PostsPerPage = (props) => {
  const { myData } = props;
  if (!myData || myData.length === 0) return <p>Nothing</p>;
  return (
    <ul>
      {myData.posts.map((i) => {
        return <li key={i.id}>{i.title}</li>;
      })}
    </ul>
  );
};

export default PostsPerPage;
