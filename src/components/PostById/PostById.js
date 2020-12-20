import React from "react";

const PostById = (props) => {
  const { myData } = props;
  if (!myData || myData.length === 0) return <p>Nothing</p>;
  return <p>{myData.title}</p>;
};

export default PostById;
