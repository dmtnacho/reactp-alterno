const FormattedPrice = ({ numero }) => {

    let moneyFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });

    return (
        <span>
            Precio: {moneyFormat.format(numero.price)}
        </span>
    );
};

export default FormattedPrice;