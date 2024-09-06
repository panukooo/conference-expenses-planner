import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigator from './components/ConferenceMain'; 
import {Provider} from 'react-redux';
import store from './store';
import ConferenceMain from './components/ConferenceMain';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ConferenceMain />
    </Provider>
  </StrictMode>
)
