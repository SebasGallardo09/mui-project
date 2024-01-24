import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MenuAppBar from "./menu/components/MenuAppBar.jsx";
import MenuSidebar from "./menu/components/MenuSidebar.jsx";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route } from "react-router-dom";
import { referenceMenu } from "./routers/ReferenceMenu.jsx";
import Principal from "./examples/components/Principal.jsx";
import "./App.css";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MenuAppBar></MenuAppBar>
      <MenuSidebar></MenuSidebar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
          <Routes>
            {referenceMenu.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={item.componenteReferencia != null ? <item.componenteReferencia item={item} /> : <div></div>}
              />
            ))}
          </Routes>
      </Box>
    </Box>
  );
};

export default App;
