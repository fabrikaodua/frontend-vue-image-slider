import Vue from 'vue';
import Body from './body.vue';

new Vue({ // eslint-disable-line no-new
	el: 'body',
	render(callback) {
		return callback(Body);
	}
});