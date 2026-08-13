const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page refresh
    
    const income = document.querySelector('#Income');
    const amount = parseInt(income.value);
    const result = document.querySelector('h2');
    
    let totalTax = 0; // Declare outside the if blocks
    
    if (amount <= 1200000) {
        totalTax = 0;
    } else {
        totalTax = amount * 0.1; // 10% tax for higher amounts
    }
    
    result.textContent = `Your tax is: ₹${totalTax.toLocaleString()}`;
});