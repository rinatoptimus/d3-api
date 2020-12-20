import React from "react";

const PostWithImage = (props) => {
  const { myData } = props;
  if (!myData || myData.length === 0) return <p>Nothing</p>;

  return (
    <ul>
      {myData.posts.map((i) => {
        return (
          <li key={i.id}>
            {i.data.media && (
              <img
                src={i.data.media.thumbnails.width_120.url}
                alt={i.data.title}
              />
            )}
            <a href={i._links[1].href}>{i.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default PostWithImage;
