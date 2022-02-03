import React, { useState } from 'react';
import video from '../data/video'

function Buttons() {
    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)

    function handleLikes() {
        setLikes(likes + 1)
    }
    function handleDislikes() {
        setDislikes(dislikes + 1)
    }

    return <div>
        <button onClick={handleLikes}>{likes} 👍</button>
        <button onClick={handleDislikes}>{dislikes} 👎</button>
    </div>;
}

export default Buttons;
