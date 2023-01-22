import { Component } from "react";
import { Link } from "react-router-dom";

import { Props, State, ErrorInfo } from "./types";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Sorry.. there was an error.
          <p>
            Go back to <Link to="/">Main Page</Link>
          </p>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
