//var url='/esbportal/DeploymentAccelarator';

GenuinePartsesbPortal.myApp.controller("DeployController",["$scope","$http","myService",
function($scope,$http,myService) {
	var url='/esbportal/DeploymentAccelarator';
$scope.GenArtifacts = function(earpath){
	if(earpath){
		$scope.loading=true;
	var reqdata = {
			  "UIRequest":{
				    "user":"1",
				    "remoteIP":"1",
				    "corelationID":"123456",
				    "content":{
				      "DeploymentAccelarator":{
				        "ExtractProperties":{				         
						 "archivePath":earpath
				        }
				      }
				    }
				  }
				};    
    myService.InvokeDataService(reqdata,url).then(function(ExtractGVResponse) {
		console.log(ExtractGVResponse.UIResponse.result.isSuccess);
		
		if(ExtractGVResponse.UIResponse.result.isSuccess) 
			{
			$scope.ArchiveVariables=ExtractGVResponse.UIResponse.content.extractProps.ArchiveProps;
			$scope.loading=false;
			alert(loading);
			}
		else
			{
			alert('Failed');
			$scope.loading=false;
			} 
});
  }
	
}
}]);