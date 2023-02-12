// копирование скидочного купона
document.body.onclick = (event) => {
    const discount = event.target;
    if (discount.classList.contains('discount-button')) {
        navigator.clipboard.writeText('F324LDIFH5');
        alert("Успешно скопировано!");
    }
}

// отправление письмя на почту