import App, { Container } from 'next/app'
import React from 'react'
import styled from 'styled-components'
import Header from "../src/Header";
import { TransitionGroup, CSSTransition } from "react-transition-group"

// import Content from "../temp/Content";

export default class MyApp extends App {

  render () {
    const {Component, pageProps} = this.props
    const location = {key: this.props.router.route}
    return <Container>
      <Header />
      {/* <Content {...pageProps}/> */}
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Component {...pageProps} />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </Container>
  }
}


const Wrapper = styled.div`
.fade-enter {
    opacity: 0.01;
}

.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
}

div.transition-group {
  position: relative;
}
section.route-section {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
`;