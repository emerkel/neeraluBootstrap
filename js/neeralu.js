

/*
These methods just show the appropriate div and selects the tab when the user clicks the button--just as if they had clicked the tab instead.
*/
//$('#gotoDataManagement').on('click', function() {
//    $('#myTab a[href="#dropdown1"]').tab('show')
//});

//$('#gotoCloudMigration').on('click', function() {
//    $('#myTab a[href="#dropdown2"]').tab('show')
//});

function getFirebaseData(){
    var dataRef = new Firebase('https://neeralusite.firebaseio.com/PhoneNumber');
    dataRef.once('value', function(snapshot) {
      var phoneNum = snapshot.val();
      //alert('phone number is ' + phoneNum);
      displayPhoneNumber(phoneNum);
    });
}

function displayPhoneNumber(phoneNumber ){
    document.getElementById('phoneNumberSpan').innerHTML = 'phone: ' + phoneNumber;
    document.getElementById( 'phoneNumberSpan2').innerHTML = 'phone: ' + phoneNumber;
}

function showTab(tabName){
	switch(tabName){
		case 'dataManagement':
			$('#myTab a[href="#dropdown1"]').tab('show')
			break;
		default:
	}
}
