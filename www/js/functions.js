/* global parseInt */

$(document).ready(function () {
    $(document).on('click', '.myBtn', function () {
        var newLinha = $("<tr>");
        var colss = "";
        
        var octeto0 = $(this).parent().parent().find('.ipclass').text().split('.')[0];
        var octeto1 = $(this).parent().parent().find('.ipclass').text().split('.')[1];
        var octeto2 = $(this).parent().parent().find('.ipclass').text().split('.')[2];
        var octeto3 = $(this).parent().parent().find('.ipclass').text().split('.')[3];
        var ipCompleto = octeto0+'.'+octeto1+'.'+octeto2+'.'+octeto3;
        $("#myModal").modal();
        
        
        var decimal = octeto0+'.'+octeto1+'.'+octeto2+'.'+octeto3;
        var binario0 = parseInt( octeto0, 10 ).toString( 2 );
        var binario1 = parseInt( octeto1, 10 ).toString( 2 );
        var binario2 = parseInt( octeto2, 10 ).toString( 2 );
        var binario3 = parseInt( octeto3, 10 ).toString( 2 );
        
        
        function ipReservadoClasseA(){
            var reservadoA;
            if(octeto0 == 10){
                reservadoA = "IP reservado por rede";
            }else{
                reservadoA = "Ip não reservado";
            }return reservadoA;
        }
        
        function ipReservadoClasseB(){
            var reservadoB;
            if((octeto0 == 172) && (octeto1 >= 16 && octeto1 <= 31) && (octeto3 > 0)){
                reservadoB = "IP reservado";
            }else{
                reservadoB = "Ip não reservado";
            }return reservadoB;
        }
        
        function ipReservadoClasseC(){
            var reservadoC;
            if((octeto0 == 192) && (octeto1 == 168)){
                reservadoC = "IP reservado";
            }else{
                reservadoC = "Ip não reservado";
            }return reservadoC;
        }
     
        if((octeto0 <= 0 || octeto0 > 255)){
                colss += '<thead>';
                colss += '<tr>';
                colss += '<th>IP Inválido!</td>';
                colss += '</tr>';

                newLinha.html(colss);
                $(".classe").html(newLinha);
                return false;
        }else if(octeto1 < 0 || octeto1 > 255){
                colss += '<thead>';
                colss += '<tr>';
                colss += '<th>IP Inválido!</td>';
                colss += '</tr>';

                newLinha.html(colss);
                $(".classe").html(newLinha);
                return false;
        }else if(octeto2 < 0 || octeto2 > 255){
                colss += '<thead>';
                colss += '<tr>';
                colss += '<th>IP Inválido!</td>';
                colss += '</tr>';

                newLinha.html(colss);
                $(".classe").html(newLinha);
                return false;
        }else if(octeto3 < 0 || octeto3 > 255){
                colss += '<thead>';
                colss += '<tr>';
                colss += '<th>IP Inválido!</td>';
                colss += '</tr>';

                newLinha.html(colss);
                $(".classe").html(newLinha);
                return false;
        }else if ((octeto0 >= 192) && (octeto0 <= 223)) {
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP Digitado:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.'+octeto3+' /24</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP em Binário:</th><td>'+binario0+'.'+binario1+'.'+binario2+'.'+binario3+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Classe:</th><td>Tipo C</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Máscara de Rede:</th><td>255.255.255.0</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Rede:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.0</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço Inicial utilizável da Rede:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.1</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Endereço Final utilizável da Rede</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.254</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Broadcast:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.255</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Tipo de IP:</th><td>'+ipReservadoClasseC()+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';
            
            newLinha.html(colss);
            $(".classe").html(newLinha);
            return false;
        }else if ((octeto0 >= 128) && (octeto0 <= 191)) {
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP Digitado:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.'+octeto3+' /16</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP em Binário:</th><td>'+binario0+'.'+binario1+'.'+binario2+'.'+binario3+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Classe:</th><td>Tipo B</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Máscara de Rede:</th><td>255.255.0.0</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Rede:</th><td>'+octeto0+'.'+octeto1+'.0.0</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço Inicial utilizável da Rede:</th><td>'+octeto0+'.'+octeto1+'.0.1</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Endereço Final utilizável da Rede</th><td>'+octeto0+'.'+octeto1+'.255.254</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Broadcast:</th><td>'+octeto0+'.'+octeto1+'.255.255</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Tipo de IP:</th><td>'+ipReservadoClasseB()+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';
            
            newLinha.html(colss);
            $(".classe").html(newLinha);
            return false;
        }else if ((octeto0 >= 1) && (octeto0 <= 126)) {
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP Digitado:</th><td>'+octeto0+'.'+octeto1+'.'+octeto2+'.'+octeto3+' /8</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>IP em Binário:</th><td>'+binario0+'.'+binario1+'.'+binario2+'.'+binario3+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Classe:</th><td>Tipo A</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Máscara de Rede:</th><td>255.0.0.0</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Rede:</th><td>'+octeto0+'.0.0.0</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço Inicial utilizável da Rede:</th><td>'+octeto0+'.0.0.1</td><td><a href="#"><i class="fa fa-check"></a></i></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<thead>';
            colss += '<tr>';
            colss += '<th>Endereço Final utilizável da Rede</th><td>'+octeto0+'.255.255.254</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</thead>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Endereço de Broadcast:</th><td>'+octeto0+'.255.255.255</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';
            colss += '<tbody>';
            colss += '<tr>';
            colss += '<th>Tipo de IP:</th><td>'+ipReservadoClasseA()+'</td><td><a href="#"><i class="fa fa-check"></i></a></td>';
            colss += '</tr>';
            colss += '</tbody>';

            newLinha.html(colss);
            $(".classe").html(newLinha);
            return false;
        } 
            
    });
});

$('input[name=firstName]').focus();

jQuery(function ($) {
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
});

(function ($) {
    AddTableRow = function () {


        var currentTime = new Date();
        var date = new Date();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hour = date.getHours();

        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var date = day + "/" + month + "/" + year + " | " + hour + ":" + minutes + ":" + seconds;
        var data = $('[name=exibeDataAtual]').val(date);
        var ip = $(".ip_address").val();
        var newRow = $("<tr>");
        var cols = "";

        cols += $;
        cols += $(".ip_adress").innerHTML = '<td class="ipclass">' + ip + '</td>';
        cols += $('[name=exibeDataAtual]').val(date).innerHTML = '<td >' + date + '</td>';
        cols += '<td><a href="#" class="myBtn"><i class="fa fa-pencil-square-o " aria-hidden="true"></i></a></td>';
        cols += '<td>';
        cols += '<button type="button" onclick="RemoveTableRow(this)" class="btn btn-danger">Excluir</button>';
        cols += '</td>';

        newRow.append(cols);
        $(".products-table").append(newRow);
        return false;

    };
})(jQuery);

RemoveTableRow = function (handler) {
    var tr = $(handler).closest('tr');

    tr.fadeOut(400, function () {
        tr.remove();
    });

    return false;
};



