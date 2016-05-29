var google, myCenter, mapProp, map, marker, infowindow, name, email, comment, atpos, dotpos, inputName, inputEmail, inputComment, outputName, outputEmail, outputcomment;

//Google Maps Data

myCenter = new google.maps.LatLng(-43.537560, 172.643363);

function initialize() {
    "use strict";

    mapProp = {
        center: myCenter,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);

    infowindow = new google.maps.InfoWindow({
        content: "CPIT Dept of Computing, <br /> 130 Madras Street, <br /> Christchurch City 8140"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

//Form Validation (Resetting the form)
function formReset() {
    "use strict";
    document.getElementById("submitForm").reset();
}

//Form Validation (Ensuring all data fields are done)
function validateForm() {
    "use strict";

    name = document.forms["submitForm"]["name"].value;
	email = document.forms["submitForm"]["email"].value;
  alert(email);
	comment = document.forms["submitForm"]["comment"].value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (name === null || name === "") {
        alert("You have not submitted a name. Please submit a name.");
        return false;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){
        alert("That is not a valid email address. Please add a valid email address");
        return false;
    } else if (comment === null || comment === "") {
        alert("You havn't left any feedback, please type feedback in the comment box.");
        return false;
    } else {
		alert("Thank you for contacting us! We will get back to you soon!");
        localStorage.clear();
        inputName = document.getElementById("name");
        localStorage.setItem("name", inputName.value);
        inputEmail = document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);
        inputComment = document.getElementById("comment");
        localStorage.setItem("comment", inputComment.value);
	}
}
