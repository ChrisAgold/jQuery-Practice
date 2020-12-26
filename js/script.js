// Fade Red Box In
$(function () {
    // jQuery goes here...
    // Uncomment this line to fade out the red box on page load
    //$(".red-box").fadeOut(2000);
    //$('.red-box').fadeIn(1000);
    // fade out to 0.5 opacity in 1 second
    //$('red-box').fadeTo(1000, 0.5);

    // Fade all boxes
    // $('.red-box').fadeTo(4000, 0.2);
    // $('.green-box').fadeTo(3000, 0.5);
    // $('.blue-box').fadeTo(2000, 0.8);

    // Fade Toggle
    // $('.blue-box').fadeToggle();
    // $('.blue-box').fadeToggle();
});
// Fade Green Box Out
$(function () {
    //$(".green-box").fadeOut(2000);
})
// Showing & Hiding Elements
$(function () {
    //$(".blue-box").hide(2000);
    //$(".blue-box").show(2000);
})
// Sliding Elements Up & Down
$(function () {
    // $(".blue-box").slideUp(2000);
    // $(".blue-box").slideDown(2000);
    // Hide paragraphs on page then slide down
    //$("p").hide(2000);
    //$("p").slideDown(2000);
    // or
    // $("p").slideToggle(2000);
    // $("p").slideToggle(2000);
})
// Moving Elements within object
$(function () {
    // $('.blue-box').animate({
    //     'margin-left': "+=200px" // adding += adds on to current margin (-= reduces)
    // }, 1000, 'linear'); // define time for animate features
});

// Custom Animations
$(function () {
//     $('.blue-box').animate({
//         'margin-left': "200px",
//         'opacity': "0",
//         'height': "50px",
//         'width': "50px",
//         'margin-top': "25px"
//     }, 1000);
});
// Make all text larger
$(function () {
//     $('p').animate({
//         fontSize: "20px"
//     }, 2000);
});

// Delaying & Chaining Animations
$(function () {
    // $('.red-box').fadeTo(4000, 0.2);
    // $('.green-box').delay(1000).fadeTo(3000, 0.5);
    // $('.blue-box').delay(2000).fadeTo(2000, 0.8).fadeOut().delay(500).fadeIn();

    // Timing Animations Using Callback Functions
    // $('.red-box').fadeTo(1000, 0, function () { // function is executed as soon as animation is finished
    //     $('.blue-box').fadeTo(1000, 0, function () {
    //         $('.green-box').fadeTo(1000, 0);
    //     })
    // });
});

// Light-Box

// Make fade in email sign up
$(function () {
    //$(".lightbox").delay(500).fadeIn(1000);
});

// Using CSS Selectors
$(function () {
    //$('p').css('background-color', 'rgba(180, 180, 30, 0.8'); // element
    //$('.red-box').css('background-color', 'rgba(180, 180, 30, 0.8'); // class
    //$('#list').css('background-color', 'rgba(180, 180, 30, 0.8'); // ID
    //$("input[type='text']").css('background-color', 'rgba(180, 180, 30, 0.8'); // attributes
    //$("h2, p, input").css('background-color', 'rgba(180, 180, 30, 0.8'); // multiple elements
    //$('p:first').css('background-color', 'rgba(180, 180, 30, 0.8'); // selecting first paragraph
    //$('li:last').css('background-color', 'rgba(180, 180, 30, 0.8'); // selecting last list item
    //$('li:even').css('background-color', 'rgba(180, 180, 30, 0.8'); // selecting even list items
    //$('li:odd').css('background-color', 'rgba(180, 180, 30, 0.8'); // selecting odd list items
    // Selecting Input Elements
    //$('input:text').css('background-color', 'rgba(180, 180, 30, 0.8'); // selecting input elements of type = 'text'
});

// Traversing
$(function () {
    //$("#list").find("li").css('background-color', 'rgba(180, 180, 30, 0.8'); // locates all li under list ID, going down hierarchy
    //$("#list").children("li").css('background-color', 'rgba(180, 180, 30, 0.8'); // locates direct children of li element (Main items)
    //$("#list").parent().css('background-color', 'rgba(180, 180, 30, 0.8'); // locates parent element, going up hierarchy
    //$("#list").siblings("p").css('background-color', 'rgba(180, 180, 30, 0.8'); // locates siblings paragraph elements of parent element
    //$("#list").prev().css('background-color', 'rgba(180, 180, 30, 0.8'); // locates previous element of list element
    //$("#list").next().css('background-color', 'rgba(180, 180, 30, 0.8'); // locates next element of list element
});

// Filtering
$(function () {
    //$("#list").find("li").filter(":even").css('background-color', 'rgba(180, 180, 30, 0.8'); // selects every second list item
    // $("li").filter(function (index) {
    //     return index % 3 === 1; // selects sub item with index of 1
    // }).css('background-color', 'rgba(180, 180, 30, 0.8'); // finds index of element passed

    // $("li").first().css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for first element (easier than above function)
    // $("li").last().css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for last element

    //$("li").eq(0).css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for index of element (.eq(0) gets index 0)
    //$("li").eq(-2).css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for second to last element

    //$("li").not(":first").css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for all elements except for the first
    //$("li").not("#list ul li").css('background-color', 'rgba(180, 180, 30, 0.8'); // filters for all elements except for specified selectors
});

//*****************************************************************************************************************************************************************************//
// MANIPULATING THE DOM WITH JQUERY //
//*****************************************************************************************************************************************************************************//

$(function () {
    // Adding To Elements //
    //$("ul ul:first").append("<li>I'm going to be the last sub item</li>"); // use append to add to selected element, makes it last child
    //$("<li> I'm going to be the last sub item</li>").appendTo($("ul ul:first")); // use append to add to selected element, makes it last child (different way to write above function)
    //$("ul ul:first").prepend("<li>I'm going to be the last sub item</li>"); // add to beginning of selected element, makes it first child
    //$("ul ul").prepend("<li>I'm going to be the first sub item</li>"); // add to beginning of all ul elements, makes it first child

    //$(".red-box").after("<div class='red-box'>Another Red Box</div>"); // add element as the next sibling
    //$(".blue-box").before("<div class='blue-box'>Another Blue Box</div>"); // add element as the next sibling
});

// Replace Elements //
$(function () {
    //$("li").replaceWith("<li>Replaced.</li>"); // replace all li elements
    // $("li").replaceWith(function(){
    //     return "<li>Replace with function</li>";
    // }); // replace all li elements (function) same as above

    // var firstListItem = $("li:first");
    // $("p").replaceWith(firstListItem); // clones first p
    //$(".red-box .blue-box").replaceWith("<div class='green-box'>More Green</div> "); // replace all boxes with green boxes
});

// Removing Elements //
$(function () {
    //$("li").remove(); // removes all list items
    //$("form").children().not("input:text, textarea, br").remove(); // .not allows you to not remove elements from the form

    //var detachedListItem = $("li").detach(); // create var to append
    //$("#content").append(detachedListItem); // append the var

    //$("p:first").empty(); // removes all content within the element but keeps the p tag in the HTML
    //$(".red-box, .green-box, .blue-box").empty();
});

// Manipulating Attributes & Content //
$(function () {
    // attr(), prop(), val()
    //var specialLink = $("#special-link");
    //console.log(specialLink.attr("href")); // returns the url attribute
    //specialLink.attr("href", "http://yahoo.com"); // changes value of attribute

    //var checkbox = $("input:checkbox");
    //console.log(checkbox.prop("checked")); // returns true since checkbox is checked
    //console.log(checkbox.attr("checked"));

    //var textInput = $("input:text"); // returns Peter which is the value of the element
    //textInput.val("Jason Duff"); // updates the value
    //console.log(textInput.val());

    //var rangeInput = $("input[type='range']"); // returns 7
    //console.log(rangeInput.val());
});








