import "./itemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="itemList">
      <div>
        <h1>{greeting}</h1>
      </div>
      <div>
        <p>¡¡Estamos trabajando en la página web!!</p>
      </div>
    </div>
  );
}

export default ItemListContainer;
