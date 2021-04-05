import { connect } from 'react-redux';
import {
  allBooksRemovedFromCart,
  bookAddedToCart,
  bookRemovedFromCart,
} from '../../actions/actions';
import calculateTotal from '../../utils/calculate-total';
import './shopping-cart-table.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className='shopping-cart-table'>
      <h2>Your order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const { id, title, count, total } = item;
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button onClick={() => onDecrease(id)} className='btn btn-outline-warning btn-sm'>
                    <i className='fa fa-minus-circle' />
                  </button>
                  <button onClick={() => onIncrease(id)} className='btn btn-outline-success btn-sm'>
                    <i className='fa fa-plus-circle' />
                  </button>
                  <button onClick={() => onDelete(id)} className='btn btn-outline-danger btn-sm'>
                    <i className='fa fa-trash-o' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='total'>Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems,
    total: calculateTotal(cartItems, 'total'),
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
