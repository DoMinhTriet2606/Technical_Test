import React, { useContext } from "react";
import "../assets/css/components/main.css";
import { JokesContext } from "../contexts/JokesContext";
import Loader from "./common/Loader";
import Swal from "sweetalert2";

const Main = () => {
    const {
        jokeState: { joke, jokeLoading },
        fetchRandomUniqueJoke,
        voteJoke,
    } = useContext(JokesContext);
    console.log(joke);

    const handleVote = async (event) => {
        if (joke) {
            const message = await voteJoke(joke.id, event.target.name);
            Swal.fire({
                icon: "success",
                title: message,
                text: "Let's see another joke",
                showConfirmButton: false,
                timer: 1500,
            });
            fetchRandomUniqueJoke();
        } else {
            Swal.fire({
                icon: "warning",
                title: "No more jokes",
                text: "Sorry, there are no more jokes available to vote.",
                confirmButtonText: "OK",
            });
        }
    };

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
                <button className="button button--secondary" name="like" onClick={handleVote}>
                    This is Funny!
                </button>
                <button className="button button--primary" name="dislike" onClick={handleVote}>
                    This is not funny.
                </button>
            </div>
        </div>
    );
};

export default Main;
