
const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="gap-4 detail__cantidad">
      <span>Quantity</span>
      <button
        onClick={handleRestar}
        className={`${cantidad === 1
          ? 'bg-gray-400 text-white border-solid border-1 border-gray-400'
          : 'bg-amber-950 text-white border-solid border-1 border-amber-950'} rounded-full py-2 px-4 font-bold`
        }
        disabled={cantidad === 1}
      >
        -
      </button>

      <span>{cantidad}</span>
      <button
        onClick={handleSumar}
        className={cantidad === stock
          ? 'bg-gray-400 text-white border-solid border-1 border-gray rounded-full py-2 px-4 font-bold'
          : 'bg-amber-950 text-white border-solid border-1 border-amber-950 rounded-full py-2 px-4 font-bold'
        }
        disabled={cantidad === stock}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
