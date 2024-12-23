import React from "react";
import DefaultError from "./DefaultError";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      const error = {
        message: "Some problem has occurred. Please try again later!",
      };
      return <DefaultError error={error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;