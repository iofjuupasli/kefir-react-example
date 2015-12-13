import React from 'react';
import ReactDOM from 'react-dom';
import KefirReact from 'kefir-react';
import Kefir from 'kefir';
import h from 'heact';

const start = new Date();

const userProperty = Kefir.fromPoll(1, () => ({
        name: 'Foo ' + (new Date() - start)
    }))
    .toProperty(() => ({
        name: 'Foo Bar'
    }));

const App = props =>
    h('div', null, props.user.name);

const Main = props =>
    h(KefirReact, {
            streams: {
                user: userProperty
            }
        },
        h(App)
    );

ReactDOM.render(
    h(Main),
    document.getElementById('app')
);
