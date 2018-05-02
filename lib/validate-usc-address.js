

function validateRskAddress(uscAddress) {
	if (uscAddress.length != 42) {
		return false;
	}
	if (uscAddress.substring(0,2) != "0x") {
		return false;
	}
	var actualAddress = uscAddress.substring(2,42);
	if (! /^([a-zA-Z0-9]{40,40})$/.test(actualAddress)) {
		return false;
	}
	return true;
}