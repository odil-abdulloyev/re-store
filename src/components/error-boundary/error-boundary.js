import { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <ErrorIndicator /> : this.props.children;
  }
}
