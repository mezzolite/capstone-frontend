import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
    },
    paper: {
        position: 'absolute',
        backgroundColor: "#393E41",
        color: '#FF8A78',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontFamily: 'Manuale, serif', 
        outline: 0
      }
  }));

const ActionCard = ({action, addActionToUser, addRewardToPoints, getUserInfo}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);



    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
      const handleModalClose = () => {
        setOpen(false);
      };

    const doneButtonClick = () => {
        setOpen(true)
        addRewardToPoints(action.reward)
        addActionToUser(action.id)
        getUserInfo()
    }

    const popoverOpen = Boolean(anchorEl);
    const id = popoverOpen ? 'simple-popover' : undefined;

    return(
        <div className="action-card" >
            <li aria-describedby={id} onClick={handleClick}>
                {action.title}
                <p>Reward: {action.reward} XP</p>
            </li>
            <button onClick={doneButtonClick}>
                   Click to collect reward when done: <DoneOutlineRoundedIcon className={classes.doneStyle}/>
            </button>
            <Popover
                id={id}
                open={popoverOpen}
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
                    <Link id="action-link" className={classes.linkStyle} href={action.link} target="_blank" rel="noopener noreferrer">Complete action here </Link>

                </div>
            </Popover>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleModalClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p className="reward-description">You've completed action:
                        <p className="inner-reward-action">{action.title}</p>
                    </p>
                    <p className="reward-description">Your reward of {action.reward} XP has been added to your account!</p>
                </div>
            </Modal>
        
        </div>
    )


}

export default React.memo(ActionCard)