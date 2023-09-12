// Nega Belay Demeke
// 1/15/2023

'use strict'; // require variables to be declared before use

function setup_navigation() {
    const nav_html =
        `<nav class="navbar navbar-expand-lg navbar-dark  position-fixed" style="background-color: #3AAFA9">
           <div class="container-fluid">
                <a class="navbar-brand" href="#"><span id="span-navbar-brand"></span>
                 
                      </a>
                 <!-- 2022-12-04, DMW, updated the button for going to the donation page -->
<button class="btn btn-warning ml-auto px-3 order-lg-last" onclick="document.getElementById('form-donate').submit();" id="button-nav-bar" hidden></button>
                <a href="" class="ml-auto px-3 order-lg-last no_ul" id="a-phone-link" hidden><span id="span-phone-number"></span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> <!-- collapsing menu items -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item list-unstyled">
                            <a class="nav-link active" aria-current="page" href="index.html">ABOUT ME</a>
                        </li>
                         <li class="nav-item list-unstyled">
                            <a class="nav-link" href="Skills.html">SKILLS</a>
                        </li>
                        <li class="nav-item list-unstyled">
                            <a class="nav-link" href="PROJECTS.html">EXPERIENCE</a>
                        </li
                        </li>
                        <li class="nav-item list-unstyled">
                            <a class="nav-link" href="SKILLS-INTERESTS.html">INTERESTS</a>
                    </ul>
                </div> 
            </div>
        </nav>
        <!-- 2022-12-05, DMW, added the following for donations -->

        `;

    const header = document.getElementById("header");
    header.innerHTML = nav_html;
}

function nav_startup() {
    setup_navigation();
}

// nav_startup();