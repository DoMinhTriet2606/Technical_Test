export const JokeReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_JOKE":
            return {
                ...state,
                jokeLoading: false,
                joke: payload,
            };
        case "SET_JOKE_QUANTITY":
            return {
                ...state,
                jokeQuantity: payload,
            };
        default:
            return state;
    }
};
