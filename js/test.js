
var expect = chai.expect;
// test para ver si funcion correctamente la funcion ReservarHorario(horario)

describe ('Reservar Horario', () =>{
    
  it('Probar que al seleccionar horario lo quite del listado',() =>{
    var restaurant1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
    var cantHorario = restaurant1.horarios.length;
    restaurant1.reservarHorario("13:00")
    expect(restaurant1.horarios.length).to.be.equal(cantHorario -1);
  })
  it ('Probar seleccionar un horario que no existe en el listado y que el listado se mantenga igual', () =>{
    var restaurant1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
    var cantHorario = restaurant1.horarios.length;
    restaurant1.reservarHorario("14:00")
    expect(restaurant1.horarios.length).to.be.equal(cantHorario);
  })
  it('Probar cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual',() =>{
    var restaurant1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
    var cantHorario = restaurant1.horarios.length;
    restaurant1.reservarHorario();
    expect(restaurant1.horarios.length).to.be.equal(cantHorario);
  })

});

describe ('Obtener Puntuación',() =>{
it('Probar que se calcule correctamente la puntuación',() =>{
  var restaurant2 = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
  expect(restaurant2.obtenerPuntuacion()).to.be.equal(6.6);
})


it('Probar cuando no tiene calificaciones que no tenga puntuación', () =>{
  var restaurant1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
  var cantCalificaciones = restaurant1.calificaciones.length;
  restaurant1.obtenerPuntuacion();
  expect(restaurant1.calificaciones.length).to.be.equal(cantCalificaciones);


})

});

describe ('Calificar',()=>{
  it('Probar que incluya correctamente una nueva calificación',()=>{
    var restaurant1 = new Restaurant (3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
    var puntuacion = restaurant1.calificaciones.length;
    restaurant1.calificar(8);
    expect(restaurant1.calificaciones.length).to.be.equal(puntuacion+1);
  })

  it('Probar que no tome como validos números negativos',()=>{
    var restaurant1 = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
    var puntuacion = restaurant1.calificaciones.length;
    restaurant1.calificar(-3);
    expect(restaurant1.calificaciones.length).to.be.equal(puntuacion);
  })

  it('Probar que no tome como validos Strings', () => {
    var restaurant1 = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
    var puntuacion = restaurant1.calificaciones.length;
    restaurant1.calificar("");
    expect(restaurant1.calificaciones.length).to.be.equal(puntuacion);
  })

  it('Probar que no adicione una calificacion sino se califica', () => {
    var restaurant1 = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
    var puntuacion = restaurant1.calificaciones.length;
    restaurant1.calificar();
    expect(restaurant1.calificaciones.length).to.be.equal(puntuacion);
  })

});

describe ('BuscarRestaurant',()=>{
  it('Probar que encuentre los restaurantes existentes',()=>{
    expect(listado.buscarRestaurante(24).id).to.be.equal(24);
  
  })

  it('Probar que informe que un restaurant no existe', () => {
    expect(listado.buscarRestaurante(30)).to.be.equal("No se ha encontrado ningún restaurant");
  })

});

describe ('obtenerRestaurantes',()=>{
  it('Probar que funciona correctamente cuando no se realiza selección alguna',()=>{
    expect(listado.obtenerRestaurantes(null, null, null).length).to.be.equal(24);
  });

  it('Probar que funciona correctamente utilizando los filtros de ciudad, rubro y horario', ()=> {
    expect(listado.obtenerRestaurantes('Pasta', 'Berlín', '12:00').length).to.be.equal(1);
  });

  it('Probar que encuentre correctamente los restaurantes existentes colocando rubro', () => {
    expect(listado.obtenerRestaurantes("Asiática",null, null).length).to.equal(3);

  })

  it('Probar que encuentre los restaurantes existentes colocando ciudad', () => {
    expect(listado.obtenerRestaurantes(null, "Berlín",null).length).to.be.equal(5);

  })

  it('Probar que encuentre los restaurantes existentes colocando horario', () => {
    expect(listado.obtenerRestaurantes(null, null, '19:00').length).to.be.equal(6);

  })

});

//Test unitario funcionalidad Reserva
describe ('Reserva',()=>{
  it ('Probar que calcule correctamente el Precio Base de la reserva',()=>{
    var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
    expect(reserva1.precioBase()).to.be.equal(2800);
  })

  it ('Probar que calcule correctamente el Precio Final de la reserva',()=>{
    var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
    expect(reserva2.precioTotalReserva()).to.be.equal(100);
  })

});





