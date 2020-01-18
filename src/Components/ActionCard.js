import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
    popoverStyle: {
        padding: theme.spacing(2),
        backgroundColor: '#F9EBE0',
        color: '#73956F',
        fontSize: 20,
        fontFamily: 'Manuale, serif'
    },
    doneStyle: {
        color: '#FF8A78'
    },
    linkStyle: {
        textTransform: 'uppercase',
        color: '#393E41',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
  }));

const ActionCard = ({action, addActionToUser}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const doneButtonClick = () => {
        addActionToUser(action.id)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div className="action-card" >
            <li aria-describedby={id} onClick={handleClick}>{action.title}
                <p>Reward: {action.reward} points</p>
            </li>
            <button onClick={doneButtonClick}>
                   Click to collect reward when done: <DoneOutlineRoundedIcon className={classes.doneStyle}/>
            </button>
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
                    <p className="description">{action.description}</p>
                    <Link className={classes.linkStyle} href={action.link} target="_blank" rel="noopener noreferrer">Complete action here </Link>

                </div>
            </Popover>
        </div>
    )


}

export default ActionCard