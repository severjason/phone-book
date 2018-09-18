import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Routes from './routes';
import { store } from './store';
import { mainTheme } from './styles/themes';
import GlobalStyles from './styles/global';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
html {
  font-size: 14px;
}

body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  min-width: 300px;
}
`;

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
