import React from "react";

const PostsLinks = (props) => {
  const { myData } = props;
  if (!myData || myData.length === 0) return <p>Nothing</p>;
  return (
    <ul>
      {myData.posts.map((i) => {
        return (
          <li key={i.id}>
            <a href={i._links[1].href}>{i.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsLinks;
