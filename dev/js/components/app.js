import React from 'react';
import DateComp from '../containers/DateComp';
import MetaTags from 'react-meta-tags';
require('../../scss/style.scss');

const App = () => (
    <div className="main">
        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
        <DateComp/>
    </div>
);

export default App;