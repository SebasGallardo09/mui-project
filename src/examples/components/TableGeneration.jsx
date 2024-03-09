import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import DropDown from "./DropDown";
import { BasicTooltip } from "../../utils/MinComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCog } from "@fortawesome/free-solid-svg-icons";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const cabeceras = [
  { name: "nombre", value: "Nombre", type: "STRING" },
  { name: "apellidoPaterno", value: "Apellido paterno", type: "STRING" },
  { name: "apellidoMaterno", value: "Apellido materno", type: "STRING" },
  { name: "fechaNacimiento", value: "Fecha nacimiento", type: "DATE" },
  { name: "fechaRegistro", value: "Fecha registro", type: "TIMESTAMP" },
  { name: "status", value: "Estado", type: "STATUS" },
  { name: "options", value: "Acciones", type: "MENU" },
];

const opciones = [
  { name: "Ver más", icon: faEye, colorIcon: "text-blue" },
  { name: "Editar", icon: faPencil, colorIcon: "text-green" },
  { name: "Eliminar", icon: faTrash, colorIcon: "text-orange-strong" },
];

const rows = [
  { id: "1", nombre: "Erick", apellidoPaterno: "ABC", apellidoMaterno: "SANCHO", fechaNacimiento: 822031057000, fechaRegistro: 1705643857000, status: "Activo", options: opciones },
  { id: "2", nombre: "Lalo", apellidoPaterno: "PEREZ", apellidoMaterno: "GUITIERREZ", fechaNacimiento: 822031057000, fechaRegistro: 1705643857000, status: "Cancelado", options: opciones },
];

const validarTipoDato = (valor, tipoDato) => {
  if (tipoDato == "DATE") return moment(valor).format("DD-MM-YYYY");
  if (tipoDato == "TIMESTAMP") return moment(valor).format("DD-MM-YYYY hh:mm a");
  if (tipoDato == "STATUS") return (<BasicTooltip text={valor} item={ <> <p className={valor === "Activo" ? "text-success" : "text-error"}> {" "} <FontAwesomeIcon icon={faCircle} />{" "} </p> </>} />);
  if (tipoDato == "MENU") return (<DropDown colorIcon="text-info" icon={ faCog } items={ valor } />)
  return valor;
};


const buildCellHeader = (item, index) => (
  <TableCell
    key={"header-" + index}
    sx={{ color: "var(--white)", "font-weight": 0, "font-size": "1rem" }}
    align="center"
  >
    {item.value}
  </TableCell>
);

const buildBodyRow = (fila, index) => {
  return cabeceras.map((cabecera, index) => (
    <TableCell
      key={"cell-index-" + index}
      component="th"
      align="center"
      scope="row"
    >
      {validarTipoDato(fila[cabecera.name], cabecera.type)}{" "}
    </TableCell>
  ));
};

export default function TableGeneration() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-blue-dark">
            <TableRow>
              <TableCell
                sx={{
                  color: "var(--white)",
                  "font-weight": 0,
                  "font-size": "1rem",
                }}
                align="center"
              >
                #
              </TableCell>
              {cabeceras.map((item, index) => buildCellHeader(item, index))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={"row-" + index}
                id={"row-" + index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  key={"cell-indice-" + index}
                  component="th"
                  scope="row"
                >
                  {" "}
                  {index + 1}{" "}
                </TableCell>
                {buildBodyRow(row, index)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
