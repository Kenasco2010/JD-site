$(function(){
$(document).ready(function() {
'use strict';

/* LOADING EFFECT START */ 
setTimeout(function(){
	$('body').addClass('loaded');
	$('h1', '.loaded-class-color').css ('color','#222222');
}, 3000);
$( 'body' ).append( '<div class="loader-wrapper"><div class="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div></div>' );

/* SUBMENU */
$(function(){
	$('.dropdown').on("hover", function() {
		$(this).toggleClass('open');
	});
});
$('body').on('mouseenter', 'ul.nav li.dropdown', function() { 
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
});
$('body').on('mouseleave', 'ul.nav li.dropdown', function() { 
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});

/* SLIDER CONFIG */
$(function(){
	$(window).resize(function(){
		var windowy = $(window).height();
		$('.slider-area').css('height',windowy + 'px');
	}).resize();    
});
$('.carousel').carousel();
$(".carousel .carousel-indicators li:first").addClass("active");
$(".carousel .carousel-inner .item:first").addClass("active");
$(".carousel").carousel({
	interval: 4000
});

/* TWITTER */
(function(a){a.fn.extend({tweecool:function(b){var c={username:"tweets",limit:5,profile_image:true,show_time:true,show_media:false,show_media_size:"thumb"};var b=a.extend(c,b);function d(h){var k=new Date();var o=Date.parse(k);var p=h*1000;var e=(o-p)/1000;var g=1,i=60,j=60*60,n=60*60*24,f=60*60*24*7,l=60*60*24*30,m=60*60*24*365;if(e>g&&e<i){return Math.round(e/g)+" seconds ago"}else{if(e>=i&&e<j){return Math.round(e/i)+" minutes ago"}else{if(e>=j&&e<n){return Math.round(e/j)+" hours ago"}else{if(e>=n&&e<f){return Math.round(e/n)+" days ago"}else{if(e>=f&&e<l){return Math.round(e/f)+" weeks ago"}else{if(e>=l&&e<m){return Math.round(e/l)+" months ago"}else{return"over a year ago"}}}}}}}return this.each(function(){var h=b;var i=a(this);var e=a("<ul>").appendTo(i);var f=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;var g="";a.getJSON("https://www.api.tweecool.com/?screenname="+h.username+"&count="+h.limit,function(k){if(k.errors||k==null){i.html("No tweets available.");return false}if(h.profile_image){var j='<a href="https://twitter.com/'+h.username+'" target="_blank"><img src="'+k.user.profile_image_url+'" alt="'+h.username+'" /></a>'}else{j=""}a.each(k.tweets,function(l,n){if(h.show_time){var m=d(n.timestamp)}else{var m=""}if(h.show_media&&n.media_url){g='<a href="https://twitter.com/'+h.username+'" target="_blank"><img src="'+n.media_url+":"+h.show_media_size+'" alt="'+h.username+'" class="media" /></a>'}else{g=""}e.append("<li>"+j+'<div class="tweets_txt">'+n.text.replace(f,'<a href="$1" target="_blank">$1</a>')+g+" <span>"+m+"</span></div></li>")})}).fail(function(k,l,j){i.html("No tweets available")})})}})})(jQuery);
$('.tweets').tweecool({
	username : 'envato',
	limit : 3, 
	profile_image : false, 
	show_time : true, 
	show_media : false,
	show_media_size: 'thumb'
});

/* PAGE FADE LOAD */
$(window).on("load", function() {
	function fade() {
		$('.fadeload').each(function() {
		var objectBottom = $(this).offset().top + $(this).outerHeight();
		var windowBottom = $(window).scrollTop() + $(window).innerHeight() + 500;
		if (objectBottom < windowBottom) {
		if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
		} else {
		if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
		}
	});
	}
	fade();
	$(window).scroll(function() {fade();});
	return false;
});

/* FIXED HEADER */
$(window).scroll(function(){
	if ($(window).scrollTop() >= 55) {
		$('.headerarea').addClass('fixed-header');
	}
	else {
		$('.headerarea').removeClass('fixed-header');
	}
});

/* SLIDER ZOOM EFFECT */ 
$(".carousel-inner .item").first().delay(1000).queue(function(){
	$(this).addClass("first-slider-play").dequeue();
	$(".carousel-inner .item").delay(1000).queue(function(){
		$(this).removeClass("first-slider-play").dequeue();
	});
});


});
});