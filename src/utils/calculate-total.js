const calculateTotal = (items, index) => items.reduce((total, item) => total + item[index], 0);

export default calculateTotal;
