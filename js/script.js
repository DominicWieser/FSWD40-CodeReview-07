var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainLocation = /** @class */ (function () {
    function MainLocation(name, city, zipCode, address, teaserImage, date, time) {
        this.LocationName = "";
        this.LocationCity = "";
        this.LocationZipCode = 0;
        this.LocationAddress = "";
        this.LocationTeaserImage = "";
        this.LocationDate = "";
        this.LocationTime = 0;
        this.LocationName = name;
        this.LocationCity = city;
        this.LocationZipCode = zipCode;
        this.LocationAddress = address;
        this.LocationTeaserImage = teaserImage;
        this.LocationDate = date;
        this.LocationTime = time;
    }
    return MainLocation;
}());
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(name, city, zipCode, address, teaserImage, date, time) {
        return _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
    }
    return Places;
}(MainLocation));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zipCode, address, teaserImage, telephone, types, webAddress, date, time) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
        _this.telephone = telephone;
        _this.types = types;
        _this.webAddress = webAddress;
        return _this;
    }
    return Restaurants;
}(MainLocation));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, teaserImage, eventDate, eventTime, ticketPrice, webAddress1, date, time) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
        _this.webAddress1 = webAddress1;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    return Events;
}(MainLocation));
function addPlace() {
    var Elements = [];
    var StCharles = new Places("St. Charles Church", "Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "24. May 2018", 1245);
    var viennaZoo = new Places("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "24. May 2018", 1245);
    var Stephansdom = new Places("Stephansdom", "Wien", 1010, "stephansplatz 1", "img/place3.jpg", "24. May 2018", 1250);
    var Prater = new Places("Prater", "Wien", 1020, "Praterstraße 1", "img/place4.jpg", "24. May 2018", 1250);
    Elements = [StCharles, viennaZoo, Stephansdom, Prater];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('places').innerHTML += "\n\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addPlace();
function addRestaurants() {
    var Elements = [];
    var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant", "Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "+43 1 581 23 08", "Chinesisch", "www.lemonleaf.at", "24. May 2018", 1300);
    var Sixta = new Restaurants("SIXTA", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "+43 1 58 528 56", "wienerisch", "www.Sixta.at", "24. May 2018", 1305);
    Elements = [LemonLeafThai, Sixta];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('restaurants').innerHTML += "\n\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].telephone + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].types + "</p>\n\t\t\t\t\t\t<p><a href=\"http://" + Elements[i].webAddress + "\">" + Elements[i].webAddress + "</a></p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addRestaurants();
function addEvents() {
    var Elements = [];
    var KrisKristofferson = new Events("Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/event1.jpeg", "Fr., 15. Jun.", "20:00", "58,50", "www.KrisKristofferson.com", "24. May 2018", 1310);
    var LennyKravitz = new Events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/event2.jpg", "Sa., 09. Jun.", "19:30", "47,80", "www.LennyKravitz.com", "24. May 2018", 1315);
    Elements = [KrisKristofferson, LennyKravitz];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('events').innerHTML += "\n\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].eventDate + " " + Elements[i].eventTime + "</p>\n\t\t\t\t\t\t<p>\u20AC " + Elements[i].ticketPrice + "</p>\n\t\t\t\t\t\t<p><a href=\"http://" + Elements[i].webAddress1 + "\">" + Elements[i].webAddress1 + "</a></p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addEvents();
