import React, { Component } from 'react';
import Navigation from './navigation'
import PageContent from './page-content'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>LifeCycle Deep Dive</h1>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}