import React, { useContext } from "react";
import "../assets/css/components/main.css";
import { JokesContext } from "../contexts/JokesContext";
import Loader from "./common/Loader";

const Main = () => {
    const {
        jokeState: { joke, jokeLoading },
    } = useContext(JokesContext);
    console.log(joke);

    let jokeContent = null;
    if (jokeLoading) jokeContent = <Loader />;
    else if (joke !== null) jokeContent = <p>{joke.text}</p>;
    else
        jokeContent = (
            <p className="flex">That's all the jokes for today! Come back another day!</p>
        );
    return (
        <div className="main__container">
            <div className="joke__content">{jokeContent}</div>

            <div className="buttons__content">
                <button className="button button--secondary">This is Funny!</button>
                <button className="button button--primary">This is not funny.</button>
            </div>
        </div>
    );
};

export default Main;
