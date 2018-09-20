import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { store } from './store';
import { mainTheme } from './styles/themes';
import GlobalStyles from './styles/global';
import registerServiceWorker from './registerServiceWorker';

/*// @ts-ignore
import { whyDidYouUpdate } from 'why-did-you-update';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}*/

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
                <GlobalStyles>
                    <Routes/>
                </GlobalStyles>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
