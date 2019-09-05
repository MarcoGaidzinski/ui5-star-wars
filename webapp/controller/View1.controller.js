sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ovly.star_wars.controller.View1", {

		identificador: null,
		// A linha acima nem precisa ser declarada

		onInit: function () {
			this.identificador = this.byId("identificador");	// sap.m.SearchField
			
			this.oModel = this.getOwnerComponent().getModel(); // new JSONModel();
			// this.getView().setModel(this.oModel);
			this.oModel.attachRequestCompleted(this.onRequestCompleted, this);
			
			this.oOptionsModel = this.getOwnerComponent().getModel("options");
			this.oOptionsModel.setProperty("/id", 1)
			this.oOptionsModel.setProperty("/ocupado", false)
			
			// this.byId("form").setModel(this.oOptionsModel, "options");
			// this.getView().setModel(this.oOptionsModel, "options");
		},

		onRequestCompleted: function(oEvent){
			this.oOptionsModel.setProperty("/ocupado", false);
		},
		
		onPressBuscar: function (oEvent) {
			// var sId = this.identificador.getValue(); // <------- aqui poderia quebrar
			var sId = this.oOptionsModel.getProperty("/id");
			
			this.oOptionsModel.setProperty("/ocupado", true);
			this.oModel.loadData("https://swapi.co/api/people/" + sId + "/");
			// não faz mais o set de ocupado para false
		},

		onPressDocs: function (oEvent) {

		}
	});
});