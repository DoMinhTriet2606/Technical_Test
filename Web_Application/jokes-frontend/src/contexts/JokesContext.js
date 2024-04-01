import React, { createContext, useEffect, useReducer } from "react";
import { JokeReducer } from "../assets/reducers/jokeReducer";
import axiosInstance from "../utils/axiosConfig";
import Cookies from "js-cookie";

export const JokesContext = createContext();

const JokeContextProvider = ({ children }) => {
    const [jokeState, dispatch] = useReducer(JokeReducer, {
        jokeLoading: true,
        joke: null,
        jokeQuantity: 0,
    });

    useEffect(() => {
        const fetchJokeQuantity = async () => {
            try {
                const response = await axiosInstance.get("/jokes/quantity");
                const jokeQuantity = response.data.jokeQuantity;
                dispatch({ type: "SET_JOKE_QUANTITY", payload: jokeQuantity });
            } catch (error) {
                console.error("Error fetching joke quantity:", error);
            }
        };

        fetchJokeQuantity();
    }, []);

    useEffect(() => {
        if (jokeState.jokeQuantity > 0) {
            fetchRandomUniqueJoke();
        }
    }, [jokeState.jokeQuantity]);

    const fetchRandomUniqueJoke = async () => {
        if (!Cookies.get("jokeIds")) Cookies.set("jokeIds", JSON.stringify([]));

        const jokeIds = JSON.parse(Cookies.get("jokeIds"));
        if (jokeIds.length === jokeState.jokeQuantity) {
            console.log("No jokes found");
            dispatch({ type: "SET_JOKE", payload: null });
            return;
        }

        try {
            let isDuplicate = true;
            let joke;

            while (isDuplicate) {
                const response = await axiosInstance.get("/jokes/random");
                const newJoke = response.data;

                if (!jokeIds.includes(newJoke.id)) {
                    joke = newJoke;
                    isDuplicate = false;
                }
            }

            dispatch({ type: "SET_JOKE", payload: joke });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const jokeContextData = { jokeState };

    return <JokesContext.Provider value={jokeContextData}>{children}</JokesContext.Provider>;
};

export default JokeContextProvider;
