import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  CssBaseline,
  Button
} from '@material-ui/core/';

export const styles = theme => ({
  fuck: {
    border: '1px solid red',
    margin: 'auto',
    maxWidth: 1200,
  },
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={cn(classes.fuck)}>
        <CssBaseline />


        <Button
          variant={`contained`}
          color={`primary`}
        >
          mapbox-redux-toolkit
      </Button>

      </div>
    );
  }

}

export default withStyles(styles, { withTheme: true })(App);
