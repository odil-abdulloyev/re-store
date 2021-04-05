import { Route, Switch } from 'react-router';
import Header from '../header/header';
import Cart from '../pages/cart/cart';
import Home from '../pages/home/home';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={210} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/' component={Cart} />
      </Switch>
    </main>
  );
};

export default App;
