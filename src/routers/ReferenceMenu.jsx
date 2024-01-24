import TableGeneration from "../examples/components/TableGeneration";
import Colores from "../examples/components/Colores";
import { faUser, faHome, faPaintRoller, faCake } from "@fortawesome/free-solid-svg-icons";
import Principal from "../examples/components/Principal";


export const referenceMenu = [
  {
    path: "/",
    icon: faHome,
    title: "Inicio",
    nameMenu: "Inicio",
    componenteReferencia: null,
    componentTable: <></>,
    componentForm: <></>,
  },
  {
    path: "/tablaEjemplo",
    icon: faUser,
    title: "Tabla Ejemplo",
    nameMenu: "CRUD Ejemplo",
    componenteReferencia: Principal,
    componentTable: <TableGeneration />,
    componentForm: <></>,
  },
  {
    path: "/colores",
    icon: faPaintRoller,
    title: "Colores aplicacion",
    nameMenu: "Colores App",
    componenteReferencia: Principal,
    componentTable: <Colores />,
    componentForm: <></>,
  },
  {
    path: "/pruebaMenu",
    icon: faCake,
    title: "Prueba menu",
    nameMenu: "Prueba menu",
    componenteReferencia: Principal,
    componentTable: <Colores />,
    componentForm: <></>,
  },
];

