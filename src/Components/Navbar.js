import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({

  mainnavbar:{
    display:"flex",
    padding:" 0px 120px",
    textAlign:'center',
    alignItems:'center',
    justifyContent:'space-between'
  },

  nav:{
    listStyle:"none",
    display:"flex",
    marginLeft:'120px'
  },

  navmenu:{
    padding:'20px',
    textDecoration:'none'
  },

  navtext:{
    textDecoration:"none",
    color:'#18181B',
    fontStyle:'normal',
    fontSize:'16px',
    fontWeight:'600'

  }
}));

function Navbar() {
  const classes = useStyle();
  return (
    <div className={classes.mainnavbar}>
      <h4>Logo</h4>
      <div>
        <nav className={classes.navbar}>
          <ul className={classes.nav}>
            <li className={classes.navmenu}>
              <Link to="/" className={classes.navtext}>Home</Link>
            </li>

            <li className={classes.navmenu}>
              <Link to="/service" className={classes.navtext}>Service Page</Link>
            </li>

            <li className={classes.navmenu}>
              <Link to="/contactus" className={classes.navtext}> Contact Us</Link>
            </li>

            <li className={classes.navmenu}>
              <Link to="/careerpage" className={classes.navtext}>Career</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
