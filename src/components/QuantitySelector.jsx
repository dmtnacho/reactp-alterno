
const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="gap-4 detail__cantidad">
      <button
        onClick={handleRestar}
        className={`${cantidad === 1
          ? 'bg-purple-200 text-white border-solid border-2 border-gray'
          : 'bg-purple-300 text-black border-solid border-2 border-black'} rounded py-2 px-4 font-bold`
        }
        disabled={cantidad === 1}
      >
        -
      </button>

      <span>{cantidad}</span>
      <button
        onClick={handleSumar}
        className={cantidad === stock
          ? 'bg-purple-200 text-white border-solid border-2 border-gray rounded py-2 px-4 font-bold'
          : 'bg-purple-300 text-black border-solid border-2 border-black rounded py-2 px-4 font-bold'
        }
        disabled={cantidad === stock}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
