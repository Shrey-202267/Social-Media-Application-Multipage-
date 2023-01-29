import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../auth/authContext";

const comments = [
  {
    id: 1,
    name: "Shreyash",
    userId: 1,
    profilepic:
      "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error culpa, voluptate harum temporibus dolor.",
  },
  {
    id: 2,
    name: "Shreyash",
    userId: 2,
    profilepic:
      "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error culpa, voluptate harum temporibus dolor.",
  },
];

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilepic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.des}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
