import React from "react";
import "./PostComments.css";

const PostComments = (props) => {
  const { myData } = props;

  if (!myData || myData.length === 0) return <p>Nothing</p>;
  return (
    <div>
      <h4>Комментарии</h4>
      {myData.comments.map((i) => {
        return (
          <ul key={i.id} className="listComments">
            {(() => {
              switch (i.tree_level) {
                case 0:
                  return (
                    <li key={i.id} className="levelZero">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
                case 1:
                  return (
                    <li key={i.id} className="levelOne">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
                case 2:
                  return (
                    <li key={i.id} className="levelTwo">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
                case 3:
                  return (
                    <li key={i.id} className="levelThree">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
                case 4:
                  return (
                    <li key={i.id} className="levelFour">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
                default:
                  return (
                    <li key={i.id} className="levelAfterFour">
                      <p>{i.body.replace(/<[^>]+>/g, "")}</p>
                      <p>
                        <i>Написал: {i.user.login}</i>
                      </p>
                    </li>
                  );
              }
            })()}
          </ul>
        );
      })}
    </div>
  );
};

export default PostComments;
