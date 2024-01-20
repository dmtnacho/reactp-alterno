const Boton = ({ children, className = "", onClick }) => {

  return (
    <button onClick={onClick} className={`tarjeta__boton ${className}`}>
      {children}
    </button>
  );
};

export default Boton;