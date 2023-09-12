/*
         Author:    Nega Demeke
    Created:    2022-11-08

*/

'use strict'; // require variables to be declared before use

// ------------------------------------------------------------------------ SITE SPECIFIC INFORMATION

const PHONE_NUMBER = "404-482-8417 "; // the organization's phone number; leave blank to exclude from web page
const PHONE_LINK_TEXT = PHONE_NUMBER.replace(/-/g, ""); // this should have no dashes in it
const ORG_NAME = "Nega Demeke"; // put the organization's name here, leave blank to not show
const ORG_ADDRESS = "Berea, KY"; // the organization's address, leave blank to not show
const COPYRIGHT_BEGIN_YEAR = "2022"; // leave empty for only the current year
const NAV_BAR_BUTTON_TEXT = "Contact!"; // leave blank for no button
const APP_BRAND = ""; // set the brand of your website
const APP_TITLE = `${APP_BRAND}: ${ORG_NAME}`; // the name of your website or application
const BUTTON_NAV_BAR = document.getElementById("button-nav-bar");
// ------------------------------------------------------------------------ END OF SITE SPECIFIC INFORMATION

// set the copyright information in the footer
function set_copyright() {
    const SPAN_COPYRIGHT = document.getElementById("span-copyright");
    let year = new Date().getFullYear();
    const COPYRIGHT = "&copy; " +
+        (COPYRIGHT_BEGIN_YEAR !== "" ? `${COPYRIGHT_BEGIN_YEAR}-` : "") +
        `${year} ${ORG_NAME}`;
    SPAN_COPYRIGHT.innerHTML = COPYRIGHT;

    const SPAN_COPYRIGHT_60 = document.getElementById("span-copyright-60");
    if (SPAN_COPYRIGHT_60)
        SPAN_COPYRIGHT_60.innerHTML = COPYRIGHT;
}

// set up a phone number on the navigation bar
function set_phone_link() {
    if (PHONE_NUMBER !== "") {
        const A_PHONE_LINK = document.getElementById("a-phone-link");
        A_PHONE_LINK.href=`tel:${PHONE_LINK_TEXT}`;
        A_PHONE_LINK.hidden = false;

        const SPAN_PHONE_NUMBER = document.getElementById("span-phone-number");
        SPAN_PHONE_NUMBER.innerHTML = PHONE_NUMBER;
    }
}

function set_address() {
    const SPAN_ADDRESS = document.getElementById("span-address");
    // SPAN_ADDRESS.innerHTML = ORG_ADDRESS;
    // 2022-11-18, DMW, changed the address on the footer to be clickable for getting directions
    const ADDRESS = `<a class="nav-link" target="_blank" href="https://goo.gl/maps/FhGvny1ArewHZJvDA">${ORG_ADDRESS}</a>`;
    SPAN_ADDRESS.innerHTML = ADDRESS;

    const SPAN_ADDRESS_60 = document.getElementById("span-address-60");
    if (SPAN_ADDRESS_60)
        SPAN_ADDRESS_60.innerHTML = ADDRESS;
}

function set_title() {
    document.getElementById("app-title").innerHTML = APP_TITLE;
}

function setup_navbar() {
    document.getElementById("span-navbar-brand").innerHTML = APP_BRAND;
    if (NAV_BAR_BUTTON_TEXT !== "") {
        console.log("test");
        const BUTTON_NAV_BAR = document.getElementById("button-nav-bar");
        BUTTON_NAV_BAR.innerText = NAV_BAR_BUTTON_TEXT;
        BUTTON_NAV_BAR.hidden = false;
    }
}

// use the startup function to initialize your website
function startup() {
    nav_startup();
    setup_navbar();
    set_copyright();
    set_address();
    set_phone_link();
    set_title();
}

// execute the startup function
startup();
