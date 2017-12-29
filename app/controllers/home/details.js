import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addToCart(item){
			 let order = this.store.createRecord('cart',{
						id:item.get('id'),
						name:item.get('name'),
						description:item.get('description'),
						price:item.get('price')
				});
			 order.save();

		}
	}
});
