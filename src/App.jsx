import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import parseRoute from './lib/parse-route.js'
import EquipmentCard from './equipment-card/EquipmentCard.jsx'
// import MonsterCard from './monster-card/MonsterCard.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <EquipmentCard />;
    }
    // if (route.path === 'monster') {
    //   return <MonsterCard />;
    // }
    // if (route.path === 'sign-up') {
    //   return <SignUp />;
    // }
    // return <NotFound />;
  }

  render() {
    const { route } = this.state;
    return (
        <>
          {this.renderPage()}
        </>
    );
  }
}
