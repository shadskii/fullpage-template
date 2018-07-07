const $ = require('jquery');
require('fullpage.js');
require('./styles.css');

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1976D2', '#FF4081', '#512DA8', '#E64A19', '#0097A7'],
    anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],

    navigation: true,
    css3: true,
    scrollingSpeed: 600,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
  });
});
