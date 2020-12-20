import React from "react";

const AllPosts = (props) => {
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

export default AllPosts;
