app.filter('getByEditable', function() {
	return function(input){
		for(var i = 0; i<input.length; i++){
			if(input[i].editing === true){
				return input[i];
			}
		}
		return "hi";
	};
});
