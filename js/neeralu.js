var neeraluPhoneNumber = '405-359-9640';


var getFirebaseData = function (){
	// if we have not already gotten the data for today, we will get it and store it
	// in the local storage
	var q = new Date();
	var m = q.getMonth() + 1;
	var d = q.getDay();
	var y = q.getYear();
	var goFetch = false;
	
	if (typeof(Storage) !== "undefined")
	{
		var today = new Date(y, m, d);
		var firebaseDate = localStorage.getItem('firebaseDate');
		var fbPhoneNumber = localStorage.getItem('fbPhoneNumber');
		
		if (firebaseDate != null)
		{
			if (firebaseDate != today)
			{
				// get the phone 
				goFetch = true;
			}
		} else {
			// get the phone number
			goFetch = true;
		}
		
		if (goFetch)
		{
		    var dataRef = new Firebase('https://neeralusite.firebaseio.com/PhoneNumber');
		    dataRef.once('value', function(snapshot) {
		      var phoneNum = snapshot.val();
		      //alert('phone number is ' + phoneNum);
		      fbPhoneNumber = phoneNum;
		      localStorage.setItem('fbPhoneNumber', fbPhoneNumber);
		      localStorage.setItem('firebaseDate', today);
		    });
		}
	}
	else
	{
		fbPhoneNumber = neeraluPhoneNumber;
	}
	
	return fbPhoneNumber;
}

var showTab = function(tabName){
	
	switch(tabName){
		case 'dataManagement':
			jQuery('#myTab a[href="#dropdown1"]').tab('show')
			break;
		default:
	}
}
