function formsumbit(){
    var option = document.querySelector(".select option:checked");
    if(option.value=='move'){
        alert('wybrano move')
        move()
        //function move()
    }
    else if(option.value=='change'){
        alert('wybrano change')
        change()
        return false;
        //function change();
    }
    return false;
}


function move(){
    const ax = document.getElementById('AX');
    const bx = document.getElementById('BX');
    const cx = document.getElementById('CX');
    const dx = document.getElementById('DX');

     var orders = document.querySelector('input[name="orders"]:checked').value;
     var orders2 = document.querySelector('input[name="orders2"]:checked').value;

    document.getElementById('wyswietlWynik').innerHTML ="Początkowe AX :" + ax.value;
    document.getElementById('wyswietlWynik2').innerHTML = "Początkowe BX :" + bx.value;
    document.getElementById('wyswietlWynik3').innerHTML = "Początkowe CX :" + cx.value;
    document.getElementById('wyswietlWynik4').innerHTML = "Początkowe DX :" + dx.value;

    if((orders == 'AX') && (orders2 == 'AX')){
        ax.value = ax.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'AX') && (orders2 =='BX')){
        bx.value = ax.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'AX') && (orders2 =='CX')){
        cx.value = ax.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'AX') && (orders2 == 'DX')){
        dx.value = ax.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'BX') && (orders2 == 'AX')){
        ax.value = bx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'BX') && (orders2 =='BX')){
        bx.value = bx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'BX') && (orders2 =='CX')){
        cx.value = bx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'BX') && (orders2 == 'DX')){
        dx.value = bx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'CX') && (orders2 == 'AX')){
        ax.value = cx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'CX') && (orders2 =='BX')){
        bx.value = cx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'CX') && (orders2 =='CX')){
        cx.value = cx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'CX') && (orders2 == 'DX')){
        dx.value = cx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'DX') && (orders2 == 'AX')){
        ax.value = dx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'DX') && (orders2 =='BX')){
        bx.value = dx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'DX') && (orders2 =='CX')){
        cx.value = dx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'DX') && (orders2 == 'DX')){
        dx.value = dx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else{
        alert("błąd");
        return false;
    }
        return false;

}
function change(){
    const ax = document.getElementById('AX');
    const bx = document.getElementById('BX');
    const cx = document.getElementById('CX');
    const dx = document.getElementById('DX');

    var orders = document.querySelector('input[name="orders"]:checked').value;
    var orders2 = document.querySelector('input[name="orders2"]:checked').value;

    document.getElementById('wyswietlWynik').innerHTML ="Początkowe AX :" + ax.value;
    document.getElementById('wyswietlWynik2').innerHTML = "Początkowe BX :" + bx.value;
    document.getElementById('wyswietlWynik3').innerHTML = "Początkowe CX :" + cx.value;
    document.getElementById('wyswietlWynik4').innerHTML = "Początkowe DX :" + dx.value;

    if((orders == 'AX') && (orders2 == 'AX')){
        ax.value = ax.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value        
    }
    else if((orders == 'AX') && (orders2 =='BX')){
        var zmienna = ax.value;
        ax.value = bx.value;
        bx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'AX') && (orders2 =='CX')){
        var zmienna = ax.value;
        ax.value = cx.value;
        cx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'AX') && (orders2 == 'DX')){
        var zmienna = ax.value;
        ax.value = dx.value;
        dx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + ax.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'BX') && (orders2 == 'AX')){
        var zmienna = bx.value;
        bx.value = ax.value;
        ax.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'BX') && (orders2 =='BX')){
        bx.value = bx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'BX') && (orders2 =='CX')){
        var zmienna = bx.value;
        bx.value = cx.value;
        cx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'BX') && (orders2 == 'DX')){
        var zmienna = bx.value;
        bx.value = dx.value;
        dx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + bx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'CX') && (orders2 == 'AX')){
        var zmienna = cx.value;
        cx.value = ax.value;
        ax.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'CX') && (orders2 =='BX')){
        var zmienna = cx.value;
        cx.value = bx.value;
        bx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'CX') && (orders2 =='CX')){
        cx.value = cx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'CX') && (orders2 == 'DX')){
        var zmienna = cx.value;
        cx.value = dx.value;
        dx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + cx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else if((orders == 'DX') && (orders2 == 'AX')){
        var zmienna = dx.value;
        dx.value = ax.value
        ax.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + ax.value
    }
    else if((orders == 'DX') && (orders2 =='BX')){
        var zmienna = dx.value;
        dx.value = bx.value;
        bx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + bx.value
    }
    else if((orders == 'DX') && (orders2 =='CX')){
        var zmienna = dx.value;
        dx.value = cx.value;
        cx.value = zmienna;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + cx.value
    }
    else if ((orders == 'DX') && (orders2 == 'DX')){
        dx.value = dx.value;
        document.getElementById('wynik').innerHTML = "Wynik " + orders + " : " + dx.value;
        document.getElementById('wynik2').innerHTML = "Wynik " + orders2 + " : " + dx.value
    }
    else{
        alert("błąd");
        return false;
    }
    return false;
}

function resetuj(){
    document.getElementById('wynik').innerHTML = "";
    document.getElementById('wynik2').innerHTML = "";
    document.getElementById('wyswietlWynik').innerHTML = "";
    document.getElementById('wyswietlWynik2').innerHTML = "";
    document.getElementById('wyswietlWynik3').innerHTML = "";
    document.getElementById('wyswietlWynik4').innerHTML = "";
    alert('Zresetowano dane')
}