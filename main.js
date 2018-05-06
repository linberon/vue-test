Vue.component("modal", {
	template: `
	
	<div class="modal is-active">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	  <div class='box'>
	  	<p>Lorem ipsum dolor dit amet</p>
	  </div>
	  <button class="modal-close is-large" aria-label="close"
	  @click='$emit("close")'></button>
	</div>
	</div>`
});

new Vue({
	el: "#root",

	data: {
		showModal: false
	}
});
