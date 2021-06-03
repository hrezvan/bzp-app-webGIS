import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import './locateBtn.scss';
import '../../Style.scss'; 

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[500],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function LocateBTN() {
  const classes = useStyles();

  return (
    <div id='locatebtn'>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        تعیین موقعیت
      </ColorButton>
    </div>
  );
}
