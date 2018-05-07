import Navigation from '../../components/Navigation';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
  this.setState({ value });
};

render() {
  const { classes } = this.props;
  const { value } = this.state;

  return (
    <div className={classes.root}>
<Tabs
  value={value}
  onChange={this.handleChange}
  classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
>
<Tab
  disableRipple
  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  label="全部订单"
    />
    <Tab
  disableRipple
  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  label="等待支付"
    />
    <Tab
  disableRipple
  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  label="支付成功"
    />
    <Tab
  disableRipple
  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  label="支付关闭"
    />
    <Tab
  disableRipple
  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  label="等待付款"
    />
    </Tabs>

    <Typography className={classes.typography}>Ant Design UI powered by Material-UI</Typography>
  </div>
);
}
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);
// export default class OrderListPage extends React.Component{
//
//
//   render(){
//     return (
//       <Navigation/>
//     )
//   }
// }
