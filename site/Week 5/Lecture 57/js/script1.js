//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("button")
			.addEventListener("click", function(){
			//call server to get the name
			aUtils
				.sendGetRequest("js/name.json",
					function(res){
						var message = res.firstName+" "+res.secondName;
					if(res.likechinesefood){
						message += "likes chinese food";
					}
					else{
						message += " doesn't like chinese food";
					}
					message += "and uses ";
					message += res.numberofdisplays+1;
					message += " displays of coding";
				document.querySelector("#content")
					.innerHTML = "<h2>Hello "+message+ "!</h2>";
			});
		});
	}
);
