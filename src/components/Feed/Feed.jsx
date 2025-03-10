import send from '../../assets/send.png'
import chat from '../../assets/chat.png'
import like from '../../assets/heart.png'
import { useState } from 'react'

export default function Feed (props) {
    const [count, setCount] = useState(0)

    function handleClick () {
        return setCount(count + 1)
    }

    return (
        <article className="feed">
            <div className="feed-header">
                <img className="profile-feed" src={props.profileimg} alt="" />
                <span>{props.name}</span>
            </div>
            <img className='feed-img' src={props.feedimg} alt="" />
            <div className="feed-footer">
                <div className="footer-left">
                    <img onClick={handleClick} src={like} alt="like button" />
                    <img src={chat} alt="comment button" />
                    <img src={send} alt="share button" />
                    <span>Likes {count}</span>
                </div>
            </div>
        </article>
    )
}