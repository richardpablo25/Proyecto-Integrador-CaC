
	//Genero formulario
	function GeneraForm(){
		//Creo el objeto formulario
		let formulario=document.createElement("form");
 
		//Crear Titulo
		let titulo=document.createElement("label");
 
		//Creo los objetos caja de texto 
		let cajaTextNombres=document.createElement("input");
 		let cajaTextApellidos=document.createElement("input");
 		let cajaTextnumtarjeta=document.createElement("input");
 		let cajaTextCCV=document.createElement("input");
 		let cajaTextExpiracion=document.createElement("input");
 
		// Creo el objeto boton
		// let boton=document.createElement("input");
 
		//Asigno atributos al objeto formulario
        	formulario.setAttribute('method', "post");//atributo method
        	formulario.setAttribute('action', "");// atributo action
        	formulario.setAttribute('style', "width:100px;margin: 0px auto");//atributo style
 
        ////Asignar atributos al objeto caja de textos 
        	cajaTextNombres.setAttribute('type', "text",);
        	cajaTextNombres.setAttribute('placeholder', "Nombres");
			cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
         	
        	cajaTextApellidos.setAttribute('type', "text");
        	cajaTextApellidos.setAttribute('placeholder', "Apellidos");
        	cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
         	
        	cajaTextnumtarjeta.setAttribute('type', "num");
        	cajaTextnumtarjeta.setAttribute('placeholder', "Número de Tarjeta");
        	cajaTextnumtarjeta.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
         	
        	cajaTextCCV.setAttribute('type', "num");
        	cajaTextCCV.setAttribute('placeholder', "CCV");
        	cajaTextCCV.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
         	
			cajaTextExpiracion.setAttribute('type', "num");
        	cajaTextExpiracion.setAttribute('placeholder', "Expiración");
        	cajaTextExpiracion.setAttribute('style', "width:100%; margin: 10px 0px; padding: 5px");
 
		//Asignar atributos al objeto boton
		//	boton.setAttribute('type', "button");
        //	boton.setAttribute('value', "Enviar");
        //	boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
        //	boton.setAttribute('onclick', "alert('Datos Enviados')");
		//	window.location.href ="../Index.html";
		
			// agregor los objetos a formulario
        	titulo.innerHTML='<h1>Datos Tarjeta</h1>';
        	formutarjeta.appendChild(titulo);
        	formutarjeta.appendChild(cajaTextNombres);
        	formutarjeta.appendChild(cajaTextApellidos);
        	formutarjeta.appendChild(cajaTextnumtarjeta);
        	formutarjeta.appendChild(cajaTextCCV);
        	formutarjeta.appendChild(cajaTextExpiracion);
        //	formutarjeta.appendChild(boton);

		//Agregar el formulario a la etiqueta con el ID		
        	document.getElementById('formpago').appendChild(formutarjeta);	
	
		
	
	
	}
	// ejectuto el formulario
	GeneraForm();
	
	// capturo los datos ingresados
		const nombrecard = document.getElementById("cajaTextNombres").value;
		const apellidocard = document.getElementById("cajaTextApellidos").value;
		const numerocard = document.getElementById("cajaTextnumtarjeta").value;
		const ccvcard = document.getElementById("cajaTextCCV").value;
		const expiracioncard = document.getElementById("cajaTextExpiracion").value;
  
		
	// capturo boton confirmar compra		
		const formpago = document.getElementById("formpago");

		formpago.addEventListener("submit", (evento) => {
			evento.preventDefault();
			
			window.location.href ="../Index.html";

		});
 