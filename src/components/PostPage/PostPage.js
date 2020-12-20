import React from "react";

const PostPage = (props) => {
  const { myData } = props;

  if (!myData || myData.length === 0) return <p>Nothing</p>;
  return (
    <div>
      <h4>{myData.title}</h4>
      <small>Просмотров: {myData.views_count}</small>
      <p>
        <img
          src={myData.data.link.thumbnails.width_330.url}
          alt={myData.data.title}
        />
      </p>
      <p>{myData.data.text.replace(/<[^>]+>/g, "")}</p>
      <p>Написал: {myData.user.login}</p>
      <p>Теги: {myData.tags.join(", ")}</p>
    </div>
  );
};

export default PostPage;
