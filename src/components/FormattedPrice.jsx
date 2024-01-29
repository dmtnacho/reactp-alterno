const FormattedPrice = ({ numero }) => {

    let moneyFormat = new Intl.NumberFormat('en-eu', {
        style: 'currency',
        currency: 'EUR',
    });

    return (
        <span>
            Price: {moneyFormat.format(numero.price)}
        </span>
    );
};

export default FormattedPrice;