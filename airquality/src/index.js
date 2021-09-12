import data from './data/english.json'

// Creates text elements
var hero_image = document.getElementById("hero_image");
var hero_title = document.getElementById("hero_title");
var byline = document.getElementById("byline");
var date = document.getElementById("date");
var category = document.getElementById("category");
var category_url = document.getElementById("category_url");
var p_1 = document.getElementById("p_1");
var p_2 = document.getElementById("p_2");
var p_3 = document.getElementById("p_3");
var p_4 = document.getElementById("p_4");
var p_5 = document.getElementById("p_5");
var p_6 = document.getElementById("p_6");
var p_7 = document.getElementById("p_7");
var p_8 = document.getElementById("p_8");
var p_9 = document.getElementById("p_9");
var p_10 = document.getElementById("p_10");
var compare_method = document.getElementById("compare_method");
var compare_title = document.getElementById("compare_title");

// Sets text
hero_image.setAttribute("href", data["hero_1_image"]);
hero_title.innerHTML = data["hero_1_title"];
byline.innerHTML = data["article-info_1_byline"];
date.innerHTML = data["article-info_1_date"];
category.innerHTML = data["article-info_1_category"];
category_url.setAttribute("href", data["article-info_1_category_url"]);
p_1.innerHTML = data["p_1_value"];
p_2.innerHTML = data["p_2_value"];
p_3.innerHTML = data["p_3_value"];
p_4.innerHTML = data["p_4_value"];
p_5.innerHTML = data["p_5_value"];
p_6.innerHTML = data["p_6_value"];
p_7.innerHTML = data["p_7_value"];
p_8.innerHTML = data["p_8_value"];
p_9.innerHTML = data["p_9_value"];
p_10.innerHTML = data["p_10_value"];
compare_method.innerHTML = data["compare-tabs_1_method"];
compare_title.innerHTML = data["compare-tabs_1_title"];

// Creates map
var map;

map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 28, lng: 80 },
  zoom: 7,
});

// Sets map markers
// City 1
var city_1 = new google.maps.Marker({
  position: { lat: 28.6692, lng: 77.4538 },
  map,
});

city_1.addListener("click", () => {
  document.getElementById("city_info").innerHTML = '';
  city_info.innerHTML = data["compare-tabs_1_city_1_name"] + '<br>' +
                       data["compare-tabs_1_city_1_aqi"] + '<br>' +
                       data["compare-tabs_1_city_1_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});

// City 2
var city_2 = new google.maps.Marker({
  position: { lat: 28.5355, lng: 77.3910 },
  map,
});

city_2.addListener("click", () => {
  document.getElementById("city_info").innerHTML = '';
  city_info.innerHTML = data["compare-tabs_1_city_2_name"] + '<br>' +
                       data["compare-tabs_1_city_2_aqi"] + '<br>' +
                       data["compare-tabs_1_city_2_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});

// City 3
var city_3 = new google.maps.Marker({
  position: { lat: 28.7041, lng: 77.1025 },
  map,
});

city_3.addListener("click", () => {
  document.getElementById("city_info").innerHTML = ''
  city_info.innerHTML = data["compare-tabs_1_city_3_name"] + '<br>' +
                       data["compare-tabs_1_city_3_aqi"] + '<br>' +
                       data["compare-tabs_1_city_3_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});

// City 4
var city_4 = new google.maps.Marker({
  position: { lat: 26.8467, lng: 80.9462 },
  map,
});

city_4.addListener("click", () => {
  document.getElementById("city_info").innerHTML = ''
  city_info.innerHTML = data["compare-tabs_1_city_4_name"] + '<br>' +
                       data["compare-tabs_1_city_4_aqi"] + '<br>' +
                       data["compare-tabs_1_city_4_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});

// City 5
var city_5 = new google.maps.Marker({
  position: { lat: 28.4595, lng: 77.0266 },
  map,
});

city_5.addListener("click", () => {
  document.getElementById("city_info").innerHTML = ''
  city_info.innerHTML = data["compare-tabs_1_city_5_name"] + '<br>' +
                       data["compare-tabs_1_city_5_aqi"] + '<br>' +
                       data["compare-tabs_1_city_5_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});

// City 6
var city_6 = new google.maps.Marker({
  position: { lat: 28.4089, lng: 77.3178 },
  map,
});

city_6.addListener("click", () => {
  document.getElementById("city_info").innerHTML = ''
  city_info.innerHTML = data["compare-tabs_1_city_6_name"] + '<br>' +
                       data["compare-tabs_1_city_6_aqi"] + '<br>' +
                       data["compare-tabs_1_city_6_cigg"] + ' cigarettes a day';
  document.getElementById("info").appendChild(city_info);
});
