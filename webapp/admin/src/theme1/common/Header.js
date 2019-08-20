import React from 'react';
import $ from "jquery";

import "./Header.css"

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$(document).ready(function () {
		    var trigger = $('.hamburger'),
		        overlay = $('.overlay'),
		       isClosed = false;

		    function buttonSwitch() {

		        if (isClosed === true) {
		            overlay.hide();
		            trigger.removeClass('is-open');
		            trigger.addClass('is-closed');
		            isClosed = false;
		        } else {
		            overlay.show();
		            trigger.removeClass('is-closed');
		            trigger.addClass('is-open');
		            isClosed = true;
		        }
		    }

		    trigger.click(function () {
		        buttonSwitch();
		    });

		    $('[data-toggle="offcanvas"]').click(function () {
		        $('#wrapper').toggleClass('toggled');
		    });
		});

	}

	render() {
		return (
			<div>
				  <div id="wrapper" class="">
         <div class="overlay" ></div>{/*style={{display:"none"}}*/}
         <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
               <li class="sidebar-brand">
                  <a href="https://iAssureIT.com"> iAssure IT </a>
               </li>
               <li>
                  <a href="/homepage">Home Page</a>
               </li>
               <li>
                  <a href="/aboutus">About Page</a>
               </li>
               <li>
                  <a href="/services">Service Page</a>
               </li>
               <li>
                  <a href="/contactus">Contact Us Page</a>
               </li>
              
            </ul>
         </nav>
         <div id="page-content-wrapper">
            <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
            </button>
            
         </div>
      </div>
			</div>
		);
	}
}
