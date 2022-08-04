const countShowItems = () => {
    const arrItems = document.querySelectorAll('.showItem');
    const counterItems = arrItems.length;
    const amountItems = document.getElementById('amountItems');
    amountItems.innerHTML = `Most-Watched (${counterItems})`;
    return counterItems;
}

export default countShowItems;