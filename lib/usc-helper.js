var urlOfFaucetServer = "http://localhost:3001";

document.addEventListener("DOMContentLoaded", function() {
	$.ajax({
    type: "GET",
    url: urlOfFaucetServer + "/balance",
    async: true,
    cache: false,
		success: function callFunction(result) {
			$("#faucetBalance").html('<h3>Faucet balance is ' + result + ' SUT</h3>');
			refreshCaptcha();
		},
		error: function (xhr, status, error) {
			console.log("Faucet balance retrieval error.")
		}
	});
	
	function refreshCaptcha(){		
		$("#captchaImg").attr("src", "/captcha.jpg#" + (new Date).getTime());
		$("#captchaImgDiv").css("display", "block");
	}

	$( "#btnRefresh" ).click(function() {
		console.log("button captcha refresh")
		refreshCaptcha();
          //$( "#captchaImgDiv" ).load(window.location.href + " #captchaImgDiv");
  	})

	$( "#toUscBtn" ).click(function() {
		try {
			var uscAddress = $( "#uscAddress" ).val();
			if (!validateUscAddress(uscAddress)) {
				$("#toUscResult").html('<h3 class="has-error">Invalid USC address format.</h3>');
				return;
			}
            var captchaText = $( "#captchaInputText" ).val();
			$.ajax({
            	type: "POST",
            	url: urlOfFaucetServer,
            	cache: false,
            	data: {"uscAddress" : uscAddress, "captcha": captchaText},
				success: function callFunction(result) {
					$("#toUscResult").html('<h3>Successfully sent some sUT to that address</h3>');
					$("#toUscForm").hide();
				},
				error: function (xhr, status, error) {
					var errorMsg;
  					if(xhr.responseText === undefined || xhr.responseText === '' || xhr.responseText === null) {
  						errorMsg = error.toString();
  					} else {
  						errorMsg = xhr.responseText;
  					}
					$("#toUscResult").html('<h3 class="has-error">' + errorMsg + '</h3>');
				}
            });
		} catch(err) {
			$("#toUscResult").html('<h3 class="has-error">' + err.message + '</h3>');
		}
	});
});
