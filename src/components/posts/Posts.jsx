import "./posts.scss";
import Post from "../post/Post";

const posts = [
  {
    id: 1,
    name: "Shreyash",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, nisi!",
    img: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    name: "Shreyash",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, nisi!",
    img: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
