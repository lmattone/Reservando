var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
        this.horarios=this.horarios.filter((horario)=>horario !==horarioReservado)
    
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}


/*Restaurant.prototype.sumatoria = function (numeros) {
    var sumatoria = 0;
    for (var i = 0; i < this.numeros; i++) {
        sumatoria += this.numeros[i];
    }
}*/
 
var  sumatoria = function (numeros){
    let sumatoria = 0;
    numeros.forEach(element => {
    sumatoria += element;
    });
    return sumatoria;
}

var promedio = function (numeros) {
        let promedio = sumatoria(numeros) / numeros.length;
        return Math.round(promedio * 10) / 10;
}

Restaurant.prototype.obtenerPuntuacion = function () {
        if (this.calificaciones.length === 0) {
            return 0;
        } 
        return promedio(this.calificaciones);  
        
    }

/*Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
            sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;
    }
    }*/







