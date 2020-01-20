import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconStyle: {
    color: '#73956F'
  },
  menuItemStyle: {
    backgroundColor: '#F9EBE0',
    fontFamily: 'Manuale, serif',
    fontSize: 18
  },
  menu: {
    backgroundColor: '#F9EBE0'
  }

}));

export default function SimpleMenu({logOut, toggleAccount}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logOut()

  };

  const handleMyAccount = () => {
    toggleAccount()
    setAnchorEl(null);
  }

  const handleClose = () =>{
    setAnchorEl(null);
  }





  return (
    <div className="menu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuRoundedIcon className={classes.iconStyle} fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItemStyle} onClick={handleMyAccount}>My account</MenuItem>
        <MenuItem className={classes.menuItemStyle} onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}