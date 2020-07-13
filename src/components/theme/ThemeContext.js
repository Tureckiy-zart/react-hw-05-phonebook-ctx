// import React from "react";

// export const themeConfig = {
//   light: {
//     background: "white",
//     fontColor: "black",
//   },
//   dark: {
//     background: "black",
//     fontColor: "white",
//   },
// };
// export const ThemeContext = React.createContext(themeConfig.dark);
// // console.log('ThemeContext', ThemeContext)


import React, { Component, createContext } from 'react';

const Context = createContext();

export const themeConfig = {
    light: {
            background: "white",
            fontColor: "black",
          },
          dark: {
            background: "black",
            fontColor: "white",
          },
};

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  themeToggle = () => {
    this.setState(prevState => {
      if (prevState.theme === 'dark') {
        return { theme: 'light', themeCfg: themeConfig.light };
      } else {
        return { theme: 'dark', themeCfg: themeConfig.dark };
      }
    });
  };

  state = {
    theme: 'dark',
    themeCfg: themeConfig.dark,
    themeToggle: this.themeToggle,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}