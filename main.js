Vue.component("shop-list", {
	template: `
	<div>
	<list v-for="item in items">{{item.description}}</list>
	</div>`,

	data() {
		return {
			items: [
				{ description: "pineapple", complete: true },
				{ description: "coconut", complete: true },
				{ description: "mango", complete: false },
				{ description: "banana", complete: true }
			]
		};
	}
});

Vue.component("list", {
	template: "<li><slot></slot></li>"
});

new Vue({
	el: "#root"
});
