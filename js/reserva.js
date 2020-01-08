var Reserva = function (horario, cantPersonas, precioPersona, codigoDescuento){
    this.horario = horario,
    this.cantPersonas = cantPersonas,
    this.precioPersona = precioPersona,
    this.codigoDescuento = codigoDescuento
}

/*2) Desarrollar la funcionalidad que calcule el precio base de una reserva
El precio base de una reserva es igual a la cantidad de personas por el precio por persona.*/

Reserva.prototype.precioBase = function (){
    return this.cantPersonas * this.precioPersona;
}
 /*
 3) Desarrollar la funcionalidad que calcule el precio total de una reserva
La reserva debe ser capaz de responder el precio final:

precio final = precio base + adicionales - descuentos*/

Reserva.prototype.precioTotalReserva = function () { 
    let precioBase = this.precioBase();
    let descuentos = this.descuentos(precioBase);
    let adicionales = this.adicionales(precioBase);
    return precioBase + adicionales - descuentos;
}

// Funcion que calcula el descuento

Reserva.prototype.descuentos = function(precioBase){
    return this.descuentosCantPersonas(precioBase) + this.descuentosPorCodigo(precioBase);
}

/*Descuento por grupos grandes: 
si la cantidad de personas de la reserva está entre 4 y 6 personas, se agrega un 5 % de descuento.
Para grupos entre de 7 y 8 personas un 10 % de descuento 
y para grupos de más de 8 personas un 15 % de descuento.*/
Reserva.prototype.descuentosCantPersonas = function(precioBase){
    let descuento = 0;

    if (this.cantPersonas >= 4 && this.cantPersonas <= 6){
        descuento = 0.05;
    }else if (this.cantPersonas >= 7 && this.cantPersonas <=8){
        descuento = 0.10;
    }else if (this.cantPersonas > 8){
        descuento = 0.15;
    }
    return descuento * precioBase;
}

/*Descuento por código:
Descuento por código: algunas reservas pueden tener un código de descuento asociado.
Si no tienen ninguno, no se les otorga ningún descuento. Los códigos son:
DES15: obtiene un 15% de descuento.
DES200: obtiene $200 de descuento.
DES1: obtiene de descuento el valor equivalente al precio de una persona.*/
Reserva.prototype.descuentosPorCodigo = function(precioBase){
    let descuento = 0;

    if (this.codigoDescuento === "DES15"){
        descuento = precioBase * 0.15;
    } else if (this.codigoDescuento === "DES200"){
        descuento = 200;
    } else if (this.codigoDescuento === "DES1"){
        descuento = this.precioPersona;
    }
    return descuento;
}

// Funcion que calculo los adicionales
Reserva.prototype.adicionales = function(precioBase){
    return this.adicionalPorHorario(precioBase) + this.adicionalPorFinDeSemana(precioBase);
}

//Funcion reserva por Horario
/*Adicional por horario: las franjas horarias de 13 a 14 y de 20 a 21 horas son muy concurridas. 
Se agrega un adicional del 5% si la reserva fue hecha para un horario dentro de esos rangos.*/
Reserva.prototype.adicionalPorHorario = function(precioBase){
    let adicionalMedioDia = this.horario.getHours()===13 || this.horario.getHours()===14 && this.horario.getMinutes()===0;
    let adicionalNoche = this.horario.getHours()===20 || this.horario.getHours()===21 && this.horario.getMinutes()===0;
    if (adicionalMedioDia || adicionalNoche ){
        return precioBase * 0.05;

    }
    return 0;
}

//Funcion reserva por fin de semana
/*Adicional por fin de semana: si la reserva fue realizada para alguno de los días del fin de semana 
(viernes, sábado o domingo)se le agrega un adicional del 10%.*/
Reserva.prototype.adicionalPorFinDeSemana = function(precioBase){
    let diaFinDeSemana = this.horario.getDay()===0 || this.horario.getDay()===5 || this.horario.getDay()===6;
    if (diaFinDeSemana){
        return precioBase * 0.10;
    }
    return 0;
}
