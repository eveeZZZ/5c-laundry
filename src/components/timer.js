import { useState, useEffect } from 'react';
import NavbarPom from "./navbar_pomona"

const Timer = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <NavbarPom />
            <div className="timer-whole-page">
                <div className="countdown-timer-holder">
                    <div className="countdown-box-timer">
                        <h2>In Washer #1</h2>
                        <div className="count-time">
                            <h3>{formatTime()}</h3>
                        </div>
                    </div>
                </div>
                <h2> ⚠️ Remember to clean out the lint in the dryers! ⚠️</h2>
            </div>
        </div>
    )
};

export default Timer
