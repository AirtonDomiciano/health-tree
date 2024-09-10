/* eslint-disable jsx-a11y/anchor-is-valid */
const renderItem = (item) => {
  return (
    <div>
      <a href="#">
        <img src={require("../assets/postos.jpg")} alt="Postos de Saude" />
        <span>{item.nome}</span>
      </a>

      {item.Children.length > 0 && (
        <ul>
          {item.Children.map((child) => (
            <li key={child.id}>
              {child.nome}
              {renderItem(child)} {/* recursive call */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default renderItem;
