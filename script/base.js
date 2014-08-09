/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * Generates the basic parts of any webpage for the FTC website.
 */

 /**
  * This function generates the banner of the FTC webpage using
  * Javascript DOM manipulation.
  */
function generateBanner(parent) {
  var imgDiv = createDiv('banner-img');
  var img = createImg('data/logo.jpg', 100, 100);
  imgDiv.appendChild(img);

  var textDiv = createDiv('banner-text');
  addText(textDiv, 'Stuyvesant FTC Fission 310');

  parent.appendChild(imgDiv);
  parent.appendChild(textDiv);
};

/**
 * This function generates the navigation bar of the FTC webpage using
 * Javascript DOM manipulation.
 */
function generateNavBar(parent, currentPage) {
  // Class names that are needed.
  var sectionClass = 'navbar-section';
  var currentClass = 'navbar-section navbar-current';

  // Creates the necessary elements to append to the DOM depending
  // on what page the user is currently on.
  if (currentPage === 'home') {
    var homeDiv = createDiv(currentClass);
    var homeA = createA();
  } else {
    var homeDiv = createDiv(sectionClass);
    var homeA = createA('index.html');
  }

  if (currentPage === 'pictures') {
    var picturesDiv = createDiv(currentClass);
    var picturesA = createA();
  } else {
    var picturesDiv = createDiv(sectionClass);
    var picturesA = createA('pictures.html');
  }

  if (currentPage === 'first') {
    var firstDiv = createDiv(currentClass);
    var firstA = createA();
  } else {
    var firstDiv = createDiv(sectionClass);
    var firstA = createA('first.html');
  }

  if (currentPage === 'about') {
    var aboutDiv = createDiv(currentClass);
    var aboutA = createA();
  } else {
    var aboutDiv = createDiv(sectionClass);
    var aboutA = createA('about.html');
  }

  if (currentPage === 'contact') {
    var contactDiv = createDiv(currentClass);
    var contactA = createA();
  } else {
    var contactDiv = createDiv(sectionClass);
    var contactA = createA('contact.html');
  }

  // Constructs nested elements.
  homeA.appendChild(homeDiv);
  addText(homeDiv, 'Home');

  picturesA.appendChild(picturesDiv);
  addText(picturesDiv, 'Pictures');

  firstA.appendChild(firstDiv);
  addText(firstDiv, 'FIRST');

  aboutA.appendChild(aboutDiv);
  addText(aboutDiv, 'About Us');

  contactA.appendChild(contactDiv);
  addText(contactDiv, 'Contact Us');

  // Appends elements to parent div with horizontal rules in between.
  parent.appendChild(homeA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(picturesA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(aboutA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(firstA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(contactA);
};

/**
 * This function generates the footer of the FTC webpage using
 * Javascript DOM manipulation.
 */
function generateFooter(parent) {
  var footerDiv = createDiv(null, 'footer');
  addText(footerDiv, 'Copyright \u00A9 2014 Stuy Fission 310');
  parent.appendChild(footerDiv);
};

// Autogenerated on every FTC page.
var banner = document.getElementById('banner');
generateBanner(banner);
var footer = document.getElementById('footer');
generateFooter(footer);
