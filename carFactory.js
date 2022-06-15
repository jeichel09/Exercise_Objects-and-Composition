function solve(car) {
    let engines = [{power: 90, volume: 1800}, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{type: 'hatchback', color: car.color}, {type: 'coupe', color: car.color}];
    let wheelsize = car.wheelsize % 2 == 0 ? car.wheelsize - 1: car.wheelsize;
    
    let result = {
       model: car.model,
       engine : engines.filter(el => el.power >= car.power) [0],
       carriage: carriages.filter(c => c.type === car.carriage) [0],
       wheelsize: Array(4).fill(wheelsize, 0)
    }
    return result;
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));