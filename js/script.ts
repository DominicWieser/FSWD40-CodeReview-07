
class MainLocation{
	LocationName = "";
	LocationCity = "";
	LocationZipCode = 0;
	LocationAddress = "";
	LocationTeaserImage = "";
	LocationDate ="";
	LocationTime = 0;

	constructor(name, city, zipCode, address, teaserImage, date, time){
		this.LocationName = name;
		this.LocationCity = city;
		this.LocationZipCode = zipCode;
		this.LocationAddress = address;
		this.LocationTeaserImage = teaserImage;
		this.LocationDate = date;
		this.LocationTime = time;
	}
	
}

class Places extends MainLocation{
	constructor(name, city, zipCode, address, teaserImage, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
	}
}

class Restaurants extends MainLocation{
	telephone;
	types;
	webAddress;

	constructor(name, city, zipCode, address, teaserImage, telephone, types, webAddress, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
		this.telephone = telephone;
		this.types = types;
		this.webAddress = webAddress;
	}
}

class Events extends MainLocation{
	eventDate;
	eventTime;
	ticketPrice;
	webAddress1;

	constructor(name, city, zipCode, address, teaserImage, eventDate, eventTime, ticketPrice, webAddress1, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
		this.webAddress1 = webAddress1;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}
}



function addPlace(){
var Elements=[];

	var StCharles = new Places("St. Charles Church","Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "24. May 2018" , 1245);
	var viennaZoo = new Places("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "24. May 2018", 1245);
	var Stephansdom = new Places("Stephansdom","Wien", 1010, "stephansplatz 1", "img/place3.jpg", "24. May 2018" , 1250);
	var Prater = new Places("Prater", "Wien", 1020, "Praterstraße 1", "img/place4.jpg", "24. May 2018", 1250);

Elements = [StCharles, viennaZoo, Stephansdom, Prater]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('places').innerHTML += `
				<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
					</div>	
				</div>
			`;
	}
		
}	

addPlace();

function addRestaurants(){
var Elements=[];

	var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant","Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "+43 1 581 23 08", "Chinesisch","www.lemonleaf.at", "24. May 2018", 1300);
	var Sixta = new Restaurants("SIXTA", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "+43 1 58 528 56", "wienerisch", "www.Sixta.at", "24. May 2018", 1305); 

Elements = [LemonLeafThai, Sixta]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('restaurants').innerHTML += `
				<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
						<p>${Elements[i].telephone}</p>
						<p>${Elements[i].types}</p>
						<p><a href="http://${Elements[i].webAddress}">${Elements[i].webAddress}</a></p>
					</div>	
				</div>
			`;
	}
		
}	
addRestaurants();



function addEvents(){
var Elements=[];

	var KrisKristofferson = new Events("Kris Kristofferson","Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/event1.jpeg", "Fr., 15. Jun.", "20:00", "58,50", "www.KrisKristofferson.com", "24. May 2018", 1310);
	var LennyKravitz = new Events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/event2.jpg", "Sa., 09. Jun.", "19:30", "47,80", "www.LennyKravitz.com", "24. May 2018", 1315); 

Elements = [KrisKristofferson, LennyKravitz]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('events').innerHTML += `
				<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
						<p>${Elements[i].eventDate} ${Elements[i].eventTime}</p>
						<p>€ ${Elements[i].ticketPrice}</p>
						<p><a href="http://${Elements[i].webAddress1}">${Elements[i].webAddress1}</a></p>
					</div>	
				</div>
			`;
	}
		
}	

addEvents();
