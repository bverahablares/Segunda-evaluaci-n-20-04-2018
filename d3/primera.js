//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.

var w = 450;
var h = 450;

 var ciudades = [{name: 'Entre 0-14',poblac: 22492},
            {name:'Entre 15-19',poblac:10291},
            {name:'Entre 20-24',poblac:34535},
            {name:'Entre 25-29',poblac:48044},
            {name:'Entre 30-64',poblac:110689},
            {name:'Entre 64-110',poblac:2202},
           ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#AAAAAA')
    .attr('r', function(d) {
      return d.poblac/1000;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#2166ac')                      
    .text(function(d) {
      return ". " + d.name;
    });