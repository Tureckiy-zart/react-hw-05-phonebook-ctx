import React from 'react';
import ThemeContext from '../../theme/ThemeContext';

const withTheme = WrappedComponent => {
  return function withTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <WrappedComponent
            {...props}
            themeCfg={theme.themeCfg}
            theme={theme.theme}
            toggle={theme.themeToggle}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;