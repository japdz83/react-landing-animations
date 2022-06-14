import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
