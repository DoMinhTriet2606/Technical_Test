import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import Slider from "./Slider";

describe("Footer Component", () => {
    test("renders disclaimer text", () => {
        render(<Footer />);
        const disclaimerElement = screen.getByText(
            /This website is create as part of Hlsolutions program/i
        );
        expect(disclaimerElement).toBeInTheDocument();
    });

    test("renders copyright text", () => {
        render(<Footer />);
        const copyrightElement = screen.getByText(/Copyright 2021 HLS/i);
        expect(copyrightElement).toBeInTheDocument();
    });
});

describe("Main Component", () => {
    test("renders joke text when joke is available", () => {
        const jokeText = "This is a funny joke";
        const jokeState = {
            joke: { text: jokeText },
            jokeLoading: false,
        };
        render(<Main />, {
            wrapper: ({ children }) => (
                <JokesContext.Provider value={{ jokeState }}>{children}</JokesContext.Provider>
            ),
        });
        const jokeElement = screen.getByText(jokeText);
        expect(jokeElement).toBeInTheDocument();
    });

    test("renders loading spinner when joke is loading", () => {
        const jokeState = { jokeLoading: true };
        render(<Main />, {
            wrapper: ({ children }) => (
                <JokesContext.Provider value={{ jokeState }}>{children}</JokesContext.Provider>
            ),
        });
        const loaderElement = screen.getByTestId("loader");
        expect(loaderElement).toBeInTheDocument();
    });

    // Add more tests as needed for different scenarios
});

describe("Header Component", () => {
    test("renders header logo", () => {
        render(<Header />);
        const headerLogoElement = screen.getByTestId("header-logo");
        expect(headerLogoElement).toBeInTheDocument();
    });

    test("renders user info", () => {
        render(<Header />);
        const userInfoElement = screen.getByText(/Handcrafted by Jim HSL/i);
        expect(userInfoElement).toBeInTheDocument();
    });
});

describe("Slider Component", () => {
    test("renders slider title", () => {
        render(<Slider />);
        const sliderTitleElement = screen.getByText(/A joke a day keeps the doctor away/i);
        expect(sliderTitleElement).toBeInTheDocument();
    });

    test("renders slider description", () => {
        render(<Slider />);
        const sliderDescriptionElement = screen.getByText(
            /If you joke wrong way, your teeth have to pay. \(Serious\)/i
        );
        expect(sliderDescriptionElement).toBeInTheDocument();
    });
});
