/*const form = document.getElementById('form');
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
})*/
function formsumbit(){
    const ax = document.getElementById('AX');
    const bx = document.getElementById('BX');
    const cx = document.getElementById('CX');
    const dx = document.getElementById('DX');
    
    var orders = document.getElementsByName('orders');
    var orders2 = document.getElementsByName('orders2');
    var ordersValue;
    var ordersValue2;
    for(let i=0; i<orders.length; i++){
        if(orders[i].checked){
            document.getElementById('wynik').innerHTML = "wybrano " + orders[i].value;
            ordersValue = orders[i].value;
        }
    }
    for(let i=0; i<orders2.length; i++){
        if(orders2[i].checked){
            document.getElementById('wynik2').innerHTML = "wybrano " + orders2[i].value;
            ordersValue2 = orders2[i].value;
        }

    }    
}