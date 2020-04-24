var map1 = new Map();
map1.set('Honda', 'Honda Civic 5D');
map1.set('Mitsubishi', 'Mitsubishi Eclipse Cross');
map1.set('Ford', 'Ford Fiesta 3-х дверная');

var map2 = new Map([
    [25000, 'Honda'],
    [40000, 'Mitsubishi'],
    [5499, 'Ford'],
]);

var map3 = new Map();
map3.set(14, 'Honda');
map3.set(6, 'Mitsubishi');
map3.set(21, 'Ford');

var ob = {};
var Mark = [];
var Product = [];
var Price = [];
var Time = [];

map1.forEach((value, key) => {
    Mark.push(key), listProduct.push(value)
});

map2.forEach((key, value) => {
    Price.push(value)
});

map3.forEach((key, value) => {
    Time.push(value)
});

inPrice = minEl(Price);
inTime = minEl(Time);
inMaxPrice = maxEl(Price);
inMaxTime = maxEl(Time);

ob[listProduct[inPrice]] = `Ціна: ${Price[inPrice]}, Виробник: ${Mark[inPrice]}, Час: ${Time[inPrice]}`;
ob[listProduct[inTime]] = `Ціна: ${Price[inTime]}, Виробник: ${Mark[inTime]}, Час: ${Time[inTime]}`;
ob[listProduct[inMaxPrice]] = `Ціна: ${Price[inMaxPrice]}, Виробник: ${Mark[inMaxPrice]}, Час: ${Time[inMaxPrice]}`;
ob[listProduct[inMaxTime]] = `Ціна: ${Price[inMaxTime]}, Виробник: ${Mark[inMaxTime]}, Час: ${Time[inMaxTime]}`;
console.log(ob)