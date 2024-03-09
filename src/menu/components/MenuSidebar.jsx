import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { referenceMenu } from "../../routers/ReferenceMenu";
import { Link } from "react-router-dom";
import logo from '../../assets/logo_01.png'
const drawerWidth = 240;
const style = {
  'marginLeft': '20%',
  marginTop: '10px',
  height: '60px',
}
export default function MenuSidebar() {

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "var(--blue-dark)",
          color: "var(--white)",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    ><Toolbar>
     <img style={style} src={logo}></img>
          </Toolbar>
      <List>
        {referenceMenu.map((item, index) => (
          <ListItem
            key={index + "-" + item.path}
            button
            component={Link}
            to={item.path}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "var(--white)" }}>
                <FontAwesomeIcon icon={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.nameMenu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
