function clasifyPrice(coin) {
    if(coin == "Cardano" || coin == "cardano" || coin == "ADA") {
        return 1.2 
    } else if (coin == "Bitcoin" || coin == "Bitcoin" || coin == "BTC") {
        return 27368.36
    } else {
        return "No disponible"
    }
}


$(document).ready(function () {
    $('ul.ventanas li a:first').addClass('activar');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.ventanas li a').click(function () {
        $('ul.ventanas li a').removeClass('activar');
        $(this).addClass('activar');
        $('.secciones article').hide()

        var activeTab = $(this).attr("href");
        $(activeTab).show();
        return false
    });

    
    // Obtenemos los datos pasados al programa y los guardamos en un objeto.
    $("#Añadir-Moneda").submit(function () {
        let flag = false;
        // Obtenemos los datos
        let correo = $('#correo').val();
        let nombre = $('#nombre').val();
        let antiguoExchange = $('#antiguo-exchange').val();
        let nombreMoneda = $('#Nombre-moneda').val();
        let cantidad = $('#Cantidad').val();
        if (cantidad != '' && correo != '' && nombre != '' &&  antiguoExchange != '' &&  nombreMoneda != '') {
            flag = true;
        }
        const objeto = {
            correo: `${correo}`,
            nombre: `${nombre}`,
            antiguoExchange: `${antiguoExchange}`,
            nombreMoneda: `${nombreMoneda}`,
            cantidad: `${cantidad}`,
        }
        console.log("B")
        if (flag) {
            console.log("C")
            $("#confirmed-transaction").append("La transacción se ha completado con éxito.");
            const divisas = $("#divisas-tabla")[0];
            const newRowAmount = divisas.insertRow();
            newRowAmount.innerHTML = `
                <td>${objeto.nombreMoneda}</td>
                <td>${objeto.cantidad}</td>
                <td>${clasifyPrice(objeto.nombreMoneda)}</td>
            `;
        } else {
            $("#confirmed-transaction").append("Error.");
        }
    });
});


