import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
    popoverStyle: {
        padding: theme.spacing(2),
        backgroundColor: '#F9EBE0',
        color: '#73956F'
    },
    doneStyle: {
        color: '#FF8A78'
    }
  }));

const ActionCard = ({action}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const doneButtonClick = () => {
        
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div className="action-card" >
            <li aria-describedby={id} onClick={handleClick}>{action.title}
                <p>Reward: {action.reward} points</p>
            </li>
            <button><DoneOutlineRoundedIcon className={classes.doneStyle}/></button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={classes.popoverStyle}>
                    <p>{action.description}</p>
                    <a href={action.link} target="_blank" rel="noopener noreferrer">Action Info Here</a>

                </div>
            </Popover>
        </div>
    )


}

export default ActionCard