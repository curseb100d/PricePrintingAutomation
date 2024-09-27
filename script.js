function calculateTotal() {
    let num1 = document.querySelectorAll('.num1');
    let totalpage1 = 0;

    num1.forEach(function(input) {
        totalpage1 += parseFloat(input.value);
    });

    document.getElementById('totalpage1').innerText = totalpage1;
}

document.querySelectorAll('.num1').forEach(function(input) {
    input.addEventListener('input', calculateTotal);
});

calculateTotal();