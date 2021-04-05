import { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import { bookAddedToCart, fetchBooks } from '../../actions/actions';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './book-list.scss';

const BookList = ({ books, onAddedToCart }) => (
  <ul className='book-list'>
    {books.map((book) => (
      <li key={book.id}>
        <BookListItem onAddedToCart={() => onAddedToCart(book.id)} book={book} />
      </li>
    ))}
  </ul>
);

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList onAddedToCart={onAddedToCart} books={books} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
