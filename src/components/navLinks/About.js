import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from './style';
import { NavLink } from 'react-router-dom'

export default function About() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }prevOpen.current = open; }, [open]);

  return (
    <div className={classes.navRoot}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.navButton}
        >_bout</Button>

        <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.menuList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <NavLink className={classes.link} to = '/about/personal-life'><MenuItem className={classes.menuItem} onClick={handleClose}>Personal Life</MenuItem></NavLink>

                    {/* <NavLink className={classes.link} to = '/about/professional-life'><MenuItem className={classes.menuItem}  onClick={handleClose}>Professional Life</MenuItem></NavLink> */}

                    {/* <NavLink className={classes.link} to = '/about/education'><MenuItem className={classes.menuItem} onClick={handleClose}>Education</MenuItem></NavLink> */}

                    <NavLink className={classes.link} to = '/about/Kikis-Coding'><MenuItem className={classes.menuItem} onClick={handleClose}>kikis-coding</MenuItem></NavLink>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}