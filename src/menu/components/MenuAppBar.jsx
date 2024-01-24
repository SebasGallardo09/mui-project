import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export default function MenuAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{  backgroundColor: "var(--blue-dark)", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Administrador clientes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
