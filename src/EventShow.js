import "./EventShow.css";
import { useState } from "react";
import concert from "./svg/concert.svg";
import expo from "./svg/expo.svg";
import festival from "./svg/festival.svg";
import launch from "./svg/launch.svg";
import political from "./svg/political.svg";
import star from "./svg/star.svg";
import seminar from "./svg/seminar.svg";

const svgMap = {
    concert,
    expo,
    festival,
    launch,
    political,
    seminar
};

function EventShow({ type, title, features }) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div className="event-show">
            <img className="event" alt={type} src={svgMap[type]} />
            <div className="card-content">
                <h3>{title}</h3>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <img
                className={`star ${liked ? 'liked' : ''}`}
                alt="star"
                src={star}
                onClick={handleLikeClick}
            />
        </div>
    );
}

export default EventShow;
