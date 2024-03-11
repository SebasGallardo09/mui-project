import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { consultarPais, consultarEstado, consultarMunicipio } from '../../services/Localidades.js'

const AutocompleteCompontent = () => {
  const[ pais, setPais ] = useState([])
  const[ estados, setEstados ] = useState([])
  const[ municipios, setMunicipios ] = useState([])
  const initialState = { pais:'', estado: '',  municipio: '' }
  const [ domicilio, setDomicilio] = useState(initialState)

  const loadingPais = domicilio.pais.id == undefined;
  const loadingEstado = domicilio.pais.id != undefined;
  const loadingMunicipio = domicilio.estado.id != undefined;

  useEffect(()=> {
    (async () => {
      if (loadingPais) setPais(await consultarPais())
      if (loadingEstado) setEstados(await consultarEstado(domicilio.pais.id))
      if (loadingMunicipio) setMunicipios(await consultarMunicipio(domicilio.estado.id))
    })()
  }, [,loadingPais,loadingEstado,loadingMunicipio]);


  const asignarValor = (event, newValue, reason ) => {
    const [reference] = event.target.id.split('-')
    console.log(reason)
    if (reference) validarCampo(reference, newValue)
    setDomicilio({
      ...domicilio, 
      [reference]: newValue
    })
  }

  const realizarBusquedas = (event, valor, tipo, ) => {
    (async () => {
      console.log(event, valor)
      const [reference] = event ? event.target.id.split('-') : [] // Se valida porque al corre marca error
      valor = valor != 'Selecciona una opcion' ? valor : ""
      if (reference === 'pais') setPais(await consultarPais(valor))
      if (reference === 'estado') setEstados(await consultarEstado(domicilio.pais.id, valor))
      if (reference === 'municipio') setMunicipios(await consultarMunicipio(domicilio.estado.id, valor))
    })()
  }

  const validarCampo = (reference, newValue) => {
    console.log(reference, newValue)
    const validarProceso = newValue.id !== domicilio[reference]['id']
    if (reference === 'pais' && validarProceso) {
      domicilio.estado = ''
      domicilio.municipio = ''
      setEstados([])
      setMunicipios([])
    }
    if (reference === 'estado' && validarProceso) {
      domicilio.municipio = ''
      setEstados([])
    }
  }
console.log(pais, estados, municipios)
  return <>
    <Autocomplete
        id="pais-autocomplete"
        value={domicilio.pais}
        loadingText={'Buscando paises...'}
        options={pais}
        onInputChange={realizarBusquedas}
        onChange={asignarValor}
        getOptionLabel={option => option ? option.nombre : 'Selecciona una opcion' }
        getOptionKey={option => option ? option.id : 0}
        renderInput={(params) => <TextField {...params} label="Selecciona un pais" />}
      />
      <br/>
      <Autocomplete
        id="estado-autocomplete"
        loading={loadingEstado}
        loadingText={'Buscando estados...'}
        value={domicilio.estado}
        options={estados}
        onInputChange={realizarBusquedas}
        onChange={asignarValor}
        getOptionLabel={option => option ? option.nombre : 'Selecciona una opcion' }
        getOptionKey={option => option ? option.id : 0}
        renderInput={(params) => <TextField {...params} label="Selecciona un estado" />}
      />
      <br/>
      <Autocomplete
        id="municipio-autocomplete"
        loading={loadingMunicipio}
        loadingText={'Buscando municipio...'}
        value={domicilio.municipio}
        options={municipios}
        onInputChange={realizarBusquedas}
        onChange={asignarValor}
        getOptionLabel={option => option ? option.nombre : 'Selecciona una opcion' }
        getOptionKey={option => option ? option.id : 0}
        renderInput={(params) => <TextField {...params} label="Selecciona un municipio" />}
      />
  </>;
};

export default AutocompleteCompontent;
