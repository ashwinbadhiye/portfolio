import { Component, ErrorInfo, PropsWithChildren } from "react";

type State = { hasError: boolean };

/**
 * Contains render/runtime errors so a single failing section can't blank the
 * whole page. On error it renders nothing (the rest of the site stays intact)
 * and logs the error for debugging. Wrap individual sections with this.
 */
class ErrorBoundary extends Component<
  PropsWithChildren<{ name?: string }>,
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(`[ErrorBoundary${this.props.name ? `: ${this.props.name}` : ""}]`, error, info);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default ErrorBoundary;
