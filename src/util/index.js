export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const isEmptyArray = (array) => array.length < 1;

export const getTotalQuantity = (array) => {
    return array.reduce((total, product) => total + product.quantity, 0);
}

export const getTotalPrice = (array) => {
    return array.reduce((total, product) => total + product.price * product.quantity, 0);
}

export const currencyFormat = (number) => {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'KZT',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const formattedValue = formatter.format(number);
    const parts = formattedValue.split('.');

    const result = parts.length > 1 ? `${parts[0].replace(/\./g, ' ')} ${parts[1]}` : parts[0];

    return result.replace('KZT', '₸');
}


