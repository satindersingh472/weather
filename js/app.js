function success_request(response) {
    let box = document.getElementById(`box`);
    box[`innerHTML`] = ``;
    box[`innerHTML`] += `today's temp is = ${response[`data`][`main`][`temp`]}`;
}
function failed_request(error) {

}

function success_city(response) {
    let longitude_value = response[`data`][0][`lon`];
    let latitude_value = response[`data`][0][`lat`];
    let units_value = document.getElementsByName(`units`);
    let real_units;
    for (let i = 0; i < units_value.length; i++) {
        if(units_value[i][`checked`]){
            real_units = units_value[i][`value`];
        }
    }
    axios.request({
        url: `https://api.openweathermap.org/data/2.5/weather`,
        params: {
            lat: latitude_value,
            lon: longitude_value,
            appid: `18a65374f047d8c9b7b39c5343521412`,
            units: real_units
        }
    }).then(success_request).catch(failed_request);

}
function failure_city(error) {

}
function check_city(details) {
    let countary_value = document.getElementById(`input_city`)[`value`];
    axios.request({
        url: `http://api.openweathermap.org/geo/1.0/direct`,
        params: {
            q: countary_value,
            appid: `18a65374f047d8c9b7b39c5343521412`
        }
    }).then(success_city).catch(failure_city);
}
let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, check_city);