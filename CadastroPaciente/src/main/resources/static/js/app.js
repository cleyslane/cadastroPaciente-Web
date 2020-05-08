var app = angular.module("cadPac_app", []);

app.controller("cadPac_controller", ["$http", "$scope", function($http, $scope){
	

	$scope.cadPac = {};
	$scope.medicos = "";
		
		$http({ method:"GET",
				url: "https://medicos-progweb.herokuapp.com/medicos"		
			
		}).then(
			function success(response)
			{			
				$scope.medicos = response.data;
			}, 
			function unsuccess(response)
			{				
				console.log(response);
			});
	
	
	$scope.cadPac.nome = "";
	$scope.cadPac.tipoSang = "";
	
	$scope.salvar = function() {
		
		$http({
				method:"POST",
				url:"http://localhost:8080/cadastro",
				data: {medico: $scope.cadPac.medico, paciente: $scope.cadPac.nome, tipoSanguineo: $scope.cadPac.tipoSang}
		}).then(
			function success(response)
			{
				$scope.mensagem = response.data;	
			},
			function unsuccess(response)
			{
				$scope.mensagem = false;
			});
	}
	
}]);