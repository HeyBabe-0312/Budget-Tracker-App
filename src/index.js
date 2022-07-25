import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import {Provider} from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="808adc54-3f3a-41cf-8f53-92d7fb52d23a" language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);