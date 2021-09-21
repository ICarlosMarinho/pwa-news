import { Component, ErrorInfo, ReactNode } from "react";

import { Container } from "./style";

interface State {
  error: boolean;
}

interface Props {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: false,
  };

  constructor(props: any) {
    super(props);
  }

  public static getDerivedStateFromError(): State {
    return { error: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info);
  }

  public render(): ReactNode {
    return this.state.error ? (
      <Container>
        <h2>
          Ocorreu um erro, tente novamente ou entre em contato com os
          desenvolvedores.
        </h2>
      </Container>
    ) : (
      this.props.children
    );
  }
}
