function calculate() {
    const inputValue = display.value;
    
    // Check if the input contains a percentage sign
    if (inputValue.includes('%')) {
        // Remove the percentage sign
        const numericValue = parseFloat(inputValue.replace('%', '')) / 100;
        display.value = numericValue;
    } else {
        // Evaluate the expression using eval() as before
        display.value = eval(inputValue);
    }
}
