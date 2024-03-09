import BarraBusqueda from '../../utils/BarraBusqueda'

const Principal = (props) => {
  const { item } = props;
  return (
    <div>
      <div className="box">
        <div>
          <h1>{item.title}</h1>
        </div>
        <div><BarraBusqueda /></div>
        
        {item.componentTable}
      </div>
    </div>
  );
};

export default Principal;
