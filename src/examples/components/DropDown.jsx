import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DropDown = (props) => {
  const {colorIcon, icon, items} = props;
  const [anchor, setAnchor] = useState(null);
  const [selected, setSelected] = useState(-1);

  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  const onMenuItemClick = (event, index) => {
    setAnchor(null);
    setSelected(index);
  };

  return (
    <Box>
      <span onClick={openMenu} >
        <FontAwesomeIcon className={colorIcon} icon={icon} />
      </span>

      <Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={closeMenu}
        keepMounted
      >
        {items.map((option, index) => (
          <MenuItem
            key={index}
            onClick={(event) => onMenuItemClick(event, index)}
            selected= {index === selected}
          > 
            <FontAwesomeIcon className={"mr-10 " + option.colorIcon} icon={option.icon}/>
            {"" + option.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default DropDown;