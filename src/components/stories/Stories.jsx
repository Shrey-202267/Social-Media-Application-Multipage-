import "./stories.scss";
import { AuthContext } from "../../auth/authContext";
import { useContext } from "react";

const stories = [
  {
    id: 1,
    name: "Shreyash",
    img: "https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Shreyash",
    img: "https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Shreyash",
    img: "https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Shreyash",
    img: "https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story">
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
