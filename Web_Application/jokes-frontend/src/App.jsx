import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import JokeContextProvider from "./contexts/JokesContext";

function App() {
    return (
        <>
            <Header />
            <Slider />
            <JokeContextProvider>
                <Main />
            </JokeContextProvider>
            <Footer />
        </>
    );
}

export default App;
