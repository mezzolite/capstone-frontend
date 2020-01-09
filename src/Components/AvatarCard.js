import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  clicked: {
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor: 'red'
  }
}));

export default function AvatarCard({avatar, setAvatar}) {
  const classes = useStyles();

  const handleClick = (event) => {
    if(!event.target.className.includes(classes.clicked)){
        event.target.className = classes.large && classes.clicked
    } 
    setAvatar(avatar.id)
  }

  return (
    <div className={classes.root}>
      <Avatar onClick={handleClick} alt={avatar.name} src={avatar.image} className={classes.large} />
    </div>
  );
}