document.addEventListener("DOMContentLoaded", function () {
    
    const inputsCantidad = document.querySelectorAll('.cantidad');
    const totalAll = document.querySelector('.total');
    
    inputsCantidad.forEach(input => {
        actualizarTotales();
    });

    function actualizarTotales(event) {
        let total = 0;

        inputsCantidad.forEach(input => {
            const quantity = parseInt(input.value, 10);
            const row = input.closest('tr');
            const price = parseFloat(row.querySelector('.price').innerText.replace('$', ''));
            const subtotal = price * quantity;

            total += subtotal;

            row.querySelector('.total-carrito').innerText = `$${subtotal.toFixed(2)}`;
        });
        
        totalAll.innerText = 'TOTAL A PAGAR = $' + total;
    }


    inputsCantidad.forEach(input => {
        input.addEventListener('change', actualizarTotales);
    });

    function actualizarTotales(event) {
        let total = 0;

        inputsCantidad.forEach(input => {
            const quantity = parseInt(input.value, 10);
            const row = input.closest('tr');
            const price = parseFloat(row.querySelector('.price').innerText.replace('$', ''));
            const subtotal = price * quantity;

            total += subtotal;

            row.querySelector('.total-carrito').innerText = `$${subtotal.toFixed(2)}`;
        });
        
        totalAll.innerText = 'TOTAL A PAGAR = $' + total;
    }
});