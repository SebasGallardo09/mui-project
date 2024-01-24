const Principal = (props) => {
  const { item } = props;
  console.log(props);
  return (
    <div>
      <div className="box">
        <div>
          <h1>{item.title}</h1>
        </div>
        {item.componentTable}
      </div>
    </div>
  );
};

export default Principal;
