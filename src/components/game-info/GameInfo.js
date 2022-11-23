import styled from 'styled-components';
import classes from './GameInfo.module.css';

function GameInfo() {
  return (
    // TODO: once i have the svg path done for the play now button/link in the header, use here as well
    <div className={classes.mainInfo}>
      <h2 className={classes.blackText}>Lorem Ipsum 23/11/2022</h2>
      <div>
        <p>Lorem Ipsum</p>
        <p className={classes.yellowText}>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}

export default GameInfo;
