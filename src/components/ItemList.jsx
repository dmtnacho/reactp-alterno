import ItemCard from "./ItemCard";

const ItemList = ({ productos }) => {

  return (
    <section>

      <h2 className="text-2xl mt-2 ml-2 font-semibold textmarron">New Arrivals</h2>
      <hr />

      <div className="productos">
        {productos.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>

    </section>
  );
};

export default ItemList;