console.log($);

//! Element Selectors
 $('h2').click(); // click on h2

$("h2").click(function () {
	// do something when h2 is clicked
	console.log("h2 clicked");
	 $("h2").css("background-color", "red"); // change h2 background color to red
	 $("h2").hide(); // hides all h2
	$(this).hide(); // hides the particular h2 that is clicked
	 $("h2").show(); // show h2
});

//! ID Selectors
 $("#click").click(function () { // do something when p is clicked
     console.log("p clicked");
     $("#click").css("background-color", "red"); // change p background color to red
 });

 $("#click").dblclick(function () { // do something when p is double clicked
     console.log("p double clicked");
     $("#click").css("background-color", "blue"); // change p background color to blue
 });

//! Class Selectors
$(".hover").mouseenter(function () {
	// do something when p is hovered
	console.log("Mouse entered on p");
	$(".hover").css("background-color", "orange"); // change p background color to red
	$(".hover").text("Mouse entered p"); // change p text to "Mouse entered p"
});

$(".hover").mouseleave(function () {
	// do something when p is hovered
	console.log("Mouse left p");
	$(".hover").css("background-color", "pink"); // change p background color to red
	$(".hover").text("Mouse left p"); // change p text to "Mouse left p"
});

//! Implementing "on" method
$("#click").on({
	click: function () {
		console.log("On method clicked");
		$("#click").css("background-color", "cyan"); // change p background color to red
	},
	dblclick: function () {
		console.log("On method double clicked");
		$("#click").css("background-color", "tomato"); // change p background color to red
	},
});

//! Implementing "css" method
 $("#table").css("background-color", "red"); // change p background color to red
 $("#table").css("background-color", "tomato").slideUp(2000).slideDown(2000); // change p background color to red

//! Implementing "addClass" and "removeClass" methods
 $("#btn2").click(function () {
     $("#table").addClass("myClass");
 });

//! Queuing methods
//? The methods are executed in the order they are written
 $("#lorem").animate({ opacity: 0.3 }, 3000);
 $("#lorem").animate({ opacity: 0.9 }, 3000);
 $("#lorem").animate({ opacity: 0.3 }, 3000);
 $("#lorem").animate({ width: "300px" }, 3000);

 $("#lorem").hide(3000, function () {
 	hide lorem after 3 seconds
 	console.log("Lorem hidden");
 });

 $("#lorem").show(3000, function () {
     show lorem after 3 seconds
     console.log("Lorem shown");
 });

 $("#btn").click(function () {
     $("#lorem").toggle(1000, function () {
         // toggle lorem after 3 seconds
         console.log("Lorem toggled");
     });
 });

//! Implementing "fadeIn", "fadeOut", "fadeToggle", "fadeTo" methods
$("#btn").click(function () {
	$("#lorem").fadeToggle(1000, function () {
		// toggle lorem after 3 seconds
		console.log("Lorem toggled");
	});
});

//! Implementing "fadeTo" method (fade to a particular opacity)

 $("#btn").click(function () {
     $("#lorem").fadeTo(1000, 0.5, function () {
         // toggle lorem after 3 seconds
         console.log("Lorem toggled");
     });
 });

//! Implementing "slideDown", "slideUp", "slideToggle" methods
 $("#btn").click(function () {
     $("#lorem").slideToggle(1000, function () {
         // toggle lorem after 3 seconds
         console.log("Lorem toggled");
     });
 });

// //! Implementing "animate" method
 $("#btn").click(function () {
     $("#lorem").animate(
         {
             opacity: 0.5,
             height: "toggle",
             width: "toggle",
         },
         1000,
         function () {
             // toggle lorem after 3 seconds
             console.log("Lorem toggled");
         }
     );
 });

//! Implementing AJAX calls
//? Syntax: $.get(URL, callback);
//? Syntax: $.post(URL, data, callback);

$.get("https://jsonplaceholder.typicode.com/todos/1", function (data, status) {
    // alert(status);
    console.log(data);
});

$.get("https://code.jquery.com/jquery-3.6.3.js", function (data) {
    // alert(data);
    console.log(data);
});

 

//! Implementing AJAX calls using "getJSON" method
//? Syntax: $.getJSON(URL, callback);

$.getJSON("https://jsonplaceholder.typicode.com/todos/1", function (data) {
    console.log(data);
});





$(document).ready(function () {
	// do something when the DOM is fully loaded
	console.log("DOM loaded");
});

/*
    jQuery Cheat Sheet link: https://oscarotero.com/jquery/ 

    !jQuery('selector').action() or $('selector').action()

    ?Selector: HTML element, class, id
    ?Action: function, method
    !Selectors:
        - element: h1, h2, p, div, span, ...
        - class: .class-name
        - id: #id-name
        - all: *
        - attribute: [attribute-name="attribute-value"] or [attribute-name] 
    !Actions:
        - function: click(), hover(), ...
        - method: css(), hide(), show(), ...

    ?Examples:
        - $('h2').click();
        - $('h2').css('background-color', 'red');
        - $('h2').hide();
        - $('h2').show();
        - $('h2').click(function() {
            console.log('h2 clicked');
            $('h2').css('background-color', 'red');
            $('h2').hide();
        });
        - $('.form').hide();
        - $('#form').hide();
        - $('input[type="text"]').hide();
        - $('input[type="text"]').css('background-color', 'red');
        - $('p.odd').css('background-color', 'red'); // select all p with class odd
        - $('p:first').css('background-color', 'red'); // select the first p
        - $('p:last').css('background-color', 'red'); // select the last p
        - $('p:even').css('background-color', 'red'); // select all even p
        - $('p:odd').css('background-color', 'red'); // select all odd p
        - $('p:gt(2)').css('background-color', 'red'); // select all p with index greater than 2
        - $('p:lt(2)').css('background-color', 'red'); // select all p with index less than 2
        - $('p:eq(2)').css('background-color', 'red'); // select all p with index equal to 2
        - $('p:not(.odd)').css('background-color', 'red'); // select all p that is not with class odd
        - $('p:contains("text")').css('background-color', 'red'); // select all p that contains text
        - $('p:has("span")').css('background-color', 'red'); // select all p that has span


    ! Differnce between $(document).ready() and $(window).onload():
        *- $(document).ready() is used to execute a function when the DOM is fully loaded.
        *- $(window).onload() is used to execute a function when the whole page is fully loaded, including all frames, objects and images.
        *- $(document).ready() is preferred over $(window).onload() because the former works faster.
        *- $(document).ready() is a jQuery function, while $(window).onload() is a JavaScript function.
        ?- So $(document).ready() always comes before $(window).onload().

    ! Difference between $(document).ready() and $(function() {}) :
        *- $(document).ready() is a jQuery function, while $(function() {}) is a shorthand for $(document).ready().
        *- $(document).ready() is preferred over $(function() {}) because the former works faster.

    ! $('selector').text(), $('selector').html(), $('selector').val():
        *- $('selector').text() is used to get the text content of the selected element.
        *- e.g. $('h2').text(); // get the text content of all h2 elements
        *- $('selector').html() is used to get the HTML content of the selected element.
        *- e.g. $('ul').html(); // get the HTML content of all ul elements
        *- $('selector').val() is used to get the value of the selected element.
        *- e.g. $('input[type="text"]').val(); // get the value of all input with type text

    ! .empty(), .remove(), .detach():
        *- .empty() is used to remove all child nodes and content from the selected element.
        *- e.g. $('ul').empty(); // remove all child nodes and content from all ul elements
        *- .remove() is used to remove the selected element and its child nodes and content.
        *- e.g. $('ul').remove(); // remove all ul elements and their child nodes and content
        *- .detach() is used to remove the selected element and its child nodes and content.
        *- e.g. $('ul').detach(); // remove all ul elements and their child nodes and content

    ! .addClass(), .removeClass(), .toggleClass():
        *- .addClass() is used to add a class to the selected element.
        *- e.g. $('h2').addClass('red'); // add class red to all h2 elements
        *- .removeClass() is used to remove a class from the selected element.
        *- e.g. $('h2').removeClass('red'); // remove class red from all h2 elements
        *- .toggleClass() is used to toggle a class on the selected element.
        *- e.g. $('h2').toggleClass('red'); // toggle class red on all h2 elements

    ! jQuery Events:
    ?- https://www.w3schools.com/jquery/jquery_events.asp
    ? Mouse Events:
        - click()
        - dblclick()
        - mouseenter()
        - mouseleave()
        - mousedown()
        - mouseup()
        - mousemove()
    ? Keyboard Events:
        - keydown()
        - keyup()
        - keypress()
    ? Form Events:
        - submit()
        - change()
        - focus()
        - blur()
    ? Document/Window Events:
        - load()
        - resize()
        - scroll()
        - unload()
    ? Other Events:
        - error()
        - select()
        - contextmenu()
        - hover()
        - toggle()
        - toggleClass()
        - slideToggle()
        - slideDown()
        - slideUp()
        - fadeIn()
        - fadeOut()
        - fadeToggle()
        - animate()
        - stop()
        - delay()
        - queue()
        - dequeue()
        - clearQueue()
        - finish()
        - on()
        - off()
        - one()
        - trigger()
        - triggerHandler()
        - bind()
        - unbind()
        - delegate()
        - undelegate()
        - live()
        - die()
        - ready()
        - clone()
        - each()
        - map()
        - get()
        - index()
        - end()
        - add()
        - and so on...
    
    ! jQuery Effects mdn link: https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
*/
