//import React from './build/react.js';
//import ReactDOM from './build/react-dom.js';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))