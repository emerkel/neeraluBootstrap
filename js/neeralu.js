var neeraluPhoneNumber = "&#52;&#48;&#53;&#45;&#53;&#57;&#56;&#45;&#55;&#51;&#50;&#51;";

/**********************************************************
*
*
* Eddie Merkel - neeralu Solutions - eddie.merkel@neeralu.com
* 405.598.7323
***********************************************************/

//var getTodaysDate = function(){
//	
//	var q = new Date();
//	var m = q.getMonth();
//	var d = q.getDate();
//	var y = q.getYear();
//	
//	return new Date(y, m, d);
//}

//var getFirebaseData = function (){
//	// if we have not already gotten the data for today, we will get it and store it
//	// in the local storage
//	
//	var goFetch = false;
//	
//	if (typeof(Storage) !== "undefined")
//	{
//		var today = getTodaysDate();
//		var firebaseDate = localStorage.getItem('firebaseDate');
//		var fbPhoneNumber = localStorage.getItem('fbPhoneNumber');
//		
//		if (firebaseDate != null)
//		{
//			if (firebaseDate != today)
//			{
//				// get the data 
//				goFetch = true;
//			}
//		} else {
//			// get the data
//			goFetch = true;
//		}
//		
//		if (goFetch)
//		{
//		    var dataRef = new Firebase('https://neeralusite.firebaseio.com/PhoneNumber');
//		    dataRef.once('value', function(snapshot) {
//		      var phoneNum = snapshot.val();
//
//		      fbPhoneNumber = phoneNum;
//		      localStorage.setItem('fbPhoneNumber', fbPhoneNumber);
//		      localStorage.setItem('firebaseDate', today);
//		    });
//		}
//	}
//	else
//	{
//		fbPhoneNumber = defaultPhoneNumber;
//	}
//	
//	return fbPhoneNumber;
//}

var showTab = function(tabName){
	
	switch(tabName){
		case "dataManagement":
			jQuery('#myTab a[href="#dropdown1"]').tab('show')
			break;
		default:
	}
}
