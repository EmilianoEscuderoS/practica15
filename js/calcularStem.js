function calcula_angulo(){
    var efe= 3.2;
    var efex= 2.2;
    var division= (efex / efe);
    var cosminus= Math.acos(division);
    var grados = (cosminus*180)/Math.PI;
    var redon = Math.round(grados+3);
    var d=document.getElementById("resultadoA");
    d.innerHTML=cosminus+' Radianes<br><br>'+grados+' ° Grados<br><br>&TildeEqual; '+redon+' ° Grados';
    }