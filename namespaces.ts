namespace Validations {

	const validateText = ( text: string ):boolean => {
		return ( text.length > 3 ) ? true : false;
	}
	
	const validateDate = ( myDate: Date ):boolean => {
		return (isNaN( myDate.valueOf() ) )
			? false 
			: true;
	}


}

console.log ( Validations.validateText("Fer") ); // retorna false porque es igual a 3 caracteres