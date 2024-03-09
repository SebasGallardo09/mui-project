import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function BarraBusqueda() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div sx={{width:'90%'}}>
        <FormControl variant="filled" fullWidth  sx={{ m: 1, width:'90%'}}>
          <InputLabel htmlFor="outlineInput-search"> Buscar... </InputLabel>
          <OutlinedInput
            sx={{width:'90%'}}
            id="outlineInput-search"
            label="search"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <FontAwesomeIcon icon={faSearch} />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Box>
  );
}
