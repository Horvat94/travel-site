import $ from "jquery";
class Modal {
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//clicking the open modal
		this.openModalButton.click(this.openModal.bind(this));
		//clickign the x modalbutton
	this.closeModalButton.click(this.closeModal.bind(this));
		//pushed any key
	$(document).keyup(this.keyPressHandler.bind(this));
	}
	keyPressHandler(e){
		if(e.keyCode == 27){//vsaka tpka na tipkovnici ima vrednost številko
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass("modal--is-visible");
		return false; // ker je <a> element in ob vsakem kliku na takšen element se bo stran povrnila na vrh z return false preprečimo privzeto obnašanje
	}
	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}


}
export default Modal;