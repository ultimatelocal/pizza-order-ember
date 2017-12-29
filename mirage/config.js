export default function() {
  this.namespace = '/api';
  let pizzas = [{
                'type':'pizzas',
                'id': 0,
                'attributes':{
                    'name': 'Pizza One',
                    'image': '../../images/1.jpg',
                    'price':120,
                    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
                }
            }, {
                'type':'pizzas',
                'id': 1,
                'attributes':{
                'name': 'Pizza Two',
                'price':110,
                'image': '../../images/2.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            }, {
                'type':'pizzas',
                'id': 2,
                'attributes':{
                'name': 'Pizza Three',
                'price':150,
                'image': '../../images/3.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            }, {
                'type':'pizzas',
                'id': 3,
                'attributes':{
                'name': 'Pizza Four',
                'price':170,
                'image': '../../images/4.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            },{
                'type':'pizzas',
                'id': 4,
                'attributes':{
                'name': 'Pizza Five',
                'price':170,
                'image': '../../images/5.png',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            }, {
                'type':'pizzas',
                'id': 5,
                'attributes':{
                'name': 'Pizza Six',
                'price':140,
                'image': '../../images/6.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            }, {
                'type':'pizzas',
                'id': 6,
                'attributes':{
                'name': 'Pizza Seven',
                'price':200,
                'image': '../../images/7.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
            }, {
                'type':'pizzas',
                'id': 7,
                'attributes':{
                'name': 'Pizza Eight',
                'price':190,
                'image': '../../images/8.jpg',
                'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '}
             }];
  this.get('/pizzas',function(){
    return{
          data: pizzas
      };
  });
  this.get('/pizzas/:id', function (db, request) {
    return { data: pizzas.find((pizza) => request.params.id == pizza.id) };
  });
}
