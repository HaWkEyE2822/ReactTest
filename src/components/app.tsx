import * as React from 'react';
import Header from './Header/header';
import Stories from './Stories/stories';
import Feeds from './Feeds/feeds';
import Footer from './Footer/footer';
import './app.scss';

const App = () => (
    <div>
        <Header />
        <div style={{ background: 'black', padding: '6rem 0' }}>
            <Stories />
            <Feeds />
        </div>
        <Footer />
    </div>
);

export default App;