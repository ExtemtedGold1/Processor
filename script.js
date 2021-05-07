const form = document.getElementById('form');
form.addEventListener('submit', () => {
    const ax = document.getElementById('AX');
    const bx = document.getElementById('BX');
    const cx = document.getElementById('CX');
    const dx = document.getElementById('DX');
    alert(ax.value +" " + bx.value + " " + cx.value + " " + dx.value)


    var orders = document.getElementsByName('orders');
    for(i=0; i<orders.length; i++){
        if(orders[i].checked){
            document.getElementById('wynik').innerHTML = orders[i].value;
            break;
        }
    }

})