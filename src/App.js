import React from 'react';
import './App.css';
import Main from './pages/main';
import Footer from './components/footer';


class App extends React.Component {
    render() {
        return (
            <div className="prime">
                <Main />
            </div>
        );
    }
}

export default App;
