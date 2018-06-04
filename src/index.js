const fullpage = require("fullpage.js");
const $ = require('jquery');

$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['section0', 'section1,', 'section2', 'section3'],
    });
});