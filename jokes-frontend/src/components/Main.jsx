import React from "react";
import "../assets/css/components/main.css";

const Main = () => {
    return (
        <div className="main__container">
            <div className="joke__content">
                <p>
                    A child asked his father, "How were people born?" So his father said, "Adam and
                    Eve made babies, then their babies became adults and made babies, and so on."
                    <br />
                    The child then went to his mother, asked her the same question and she told him,
                    "We were monkeys then we evolved to become like we are now."
                    <br />
                    The child ran back to his father and said, "You lied to me!" His father replied,
                    "No, your mom was talking about her side of the family."
                </p>
            </div>

            <div className="buttons__content">
                <button className="button button--secondary">This is Funny!</button>
                <button className="button button--primary">This is not funny.</button>
            </div>
        </div>
    );
};

export default Main;
