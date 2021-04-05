import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import BookstoreService from './services/bookstore-service';
import store from './store';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import { BrowserRouter } from 'react-router-dom';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
