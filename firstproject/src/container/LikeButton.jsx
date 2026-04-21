import { useState } from 'react'

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>👍 Like Button</h1>

      <button onClick={handleLike}>
        Like ❤️
      </button>

      <h2>Likes: {likes}</h2>
    </div>
  );
}

export default LikeButton;