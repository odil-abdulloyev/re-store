import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import calculateTotal from '../../utils/calculate-total';
import './header.scss';

const Header = ({ numItems, total }) => {
  return (
    <header className='header row'>
      <Link to='/' className='logo text-dark'>
        ReStore
      </Link>
      <Link to='/cart' className='shopping-cart'>
        <i className='cart-icon fa fa-shopping-cart' />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    numItems: calculateTotal(cartItems, 'count'),
    total: calculateTotal(cartItems, 'total'),
  };
};

export default connect(mapStateToProps)(Header);
