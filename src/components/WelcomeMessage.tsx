import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './WelcomeMessage.css'


export default function WelcomeMessage() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(
            () => {
                navigate('/episodes');
            },
            3200
        );
    }, []);

    return (
        <>
            <p className="welcome-message">
                Welcome to Rick and Morty Explorer!
            </p>
        </>
    );
}