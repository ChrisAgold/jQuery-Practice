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

// SlideShow //
// $(function () {
//     var galleryImage = $(".gallery").find("img").first();
//     var images = [
//         "images/laptop-mobile_small.jpg",
//         "images/laptop-on-table_small.jpg",
//         "images/people-office-group-team_small.jpg"
//     ];
//     // function to switch image every 2 seconds //
//     var i = 0;
//     setInterval(function () {
//         i = (i + 1) % images.length; // 0, 1, 2, 0, 1, 2, 0, 1, ....
//         galleryImage.fadeOut(function () { // function is executed as soon as animation is finished
//             $(this).attr("src", images[i]); // this refers to galleryImage
//             $(this).fadeIn();
//         })
//         //console.log(galleryImage.attr("src"));
//     }, 2000);
// });

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

//*****************************************************************************************************************************************************************************//
// MANIPULATING THE DOM WITH JQUERY II //
//*****************************************************************************************************************************************************************************//

$(function () {
    //var redBox = $(".red-box");
    //console.log(redBox.css("width")); // return width of red-box

    // redBox.css("background-color", "orange");
    // $("p").css("font-size", "18px");
    // redBox.css("width","+=20px"); // increase current width by 20px
    //
    // var properties = $("p").css(["font-size", "line-height", "color"]); // creates a JS object
    // console.log(properties);
    // console.log(properties["font-size"]); // access one key of the object in properties
    //
    // redBox.css("user-select", "none");
});

// Adding or Removing CSS Classes
$(function () {
    // $("a").addClass("fancy-link"); // class="...."
    // $("p:first").addClass("large emphasize");
    //
    // $("li li").addClass(function (index) {
    //     $(this).addClass("item-" + index); // add a class to each index of the items
    // });
    //
    // $("div").addClass(function (index, currentClass) { // add redbox to dummy text
    //     if (currentClass === "dummy") {
    //         return "red-box";
    //     }
    // });
    //
    // $(".red-box").removeClass("red-box").addClass("blue-box"); // remove redboxes and replace with blueboxes
    //$(".dummy").removeClass("dummy").addClass("green-box"); // remove dummy class and replace with green-box class
});

// Changing the Data of an Element // (gallery)
$(function () {
//
//     // jQuery allows you to attach arbitrary data to any element, represented as
//     // HTML attributes prefixed with "data-", e.g. "data-images".
//     // Here, we'll attach data about all available images to the gallery itself.
//
//     // Select the <img> inside the gallery to manipulate it later
//     var gallery = $(".gallery");
//
//     // Initialize an array of all images for the gallery
//     var images = [
//         "images/laptop-mobile_small.jpg",
//         "images/laptop-on-table_small.jpg",
//         "images/people-office-group-team_small.jpg"
//     ];
//
//     // To attach data, use the data() function and pass in two arguments: first,
//     // the key for the data, and second the actual data/value.
//     gallery.data("availableImages", images);
//     // To retrieve the data, again use just one argument: the key.
//     console.log(gallery.data("availableImages"));  // Array[...]
//
//     gallery.data("name", "The Amazing Gallery");
//     console.log(gallery.data("name"));  // The Amazing Gallery
//
//     // Remove data just as easily using removeData().
//     gallery.removeData("name");
//     console.log(gallery.data("name"));  // undefined
//
//     // If you attach data directly in HTML via an attribute prefixed with "data-",
//     // you can read that automatically from jQuery.
//     var data = $("p:first").data("mydata");
//     console.log(data);  // Data coming from HTML attribute
//
});

// Retrieving & Changing The Content of an Element //
$(function () {
    // text(), html()
    //var firstPar = $("p:first");
    // console.log(firstPar.text());
    // console.log(firstPar.html());

    //firstPar.text("<strong>Hello</strong> World!"); // will show code on webpage
    //firstPar.html("<strong>Hello</strong> World!");

    //firstPar.html(firstPar.html() + " This was just appended");
});

//*****************************************************************************************************************************************************************************//
// MOUSE EVENTS & KEYBOARD EVENTS //
//*****************************************************************************************************************************************************************************//

// Adding Click Handlers //
$(function () {
    // $("#btn-click").click(function (event) {
    //     console.log(event);
    //     alert("Button was clicked");
    // });

    // $(".red-box").click(function () { // fade red-box to 50% opacity
    //     $(this).fadeTo(500, 0.5);
    // });
    //$(".red-box").click(); // when page is refreshed box goes to 50% opacity automatically
});

// Adding Hover Handlers //
$(function () {
    // :hover
    // $("#btn-hover").hover(function (event) {
    //     alert("Button was hovered");
    // });
    //
    // $(".green-box").hover(function () {
    //     $(this).text("I was hovered");
    // });
});

// Adding MouseEnter & MouseLeave Handlers //
$(function () {
    // // fades blue-box when mouse enters and then goes back to blue when mouse leaves //
    // var blueBox = $(".blue-box");
    // blueBox.mouseenter(function () {
    //     $(this).stop().fadeTo(500, 0.7);
    // });
    // blueBox.mouseleave(function () {
    //     $(this).stop().fadeTo(500, 1);
    // })
    //
    // // hover(handlerIn, handlerOut) alternative way to above
    // blueBox.hover(function () {
    //     $(this).stop().fadeTo(500, 0.7);
    // }, function(){
    //     $(this).stop().fadeTo(500, 1);
    // });
});

// Adding Same Handler for Multiple Events //
$(function () {
    // //.on("click", function() {...})
    // $("html").on("click keydown hover", function() {
    //     console.log("Mouse was clicked or key was pressed");
    // });
});

// Delegated Events //
$(function () {
    // Delegated Events // When p tag is clicked it slides up //
    // $("#content").on("click", "p", function () {
    //     $(this).slideUp();
    // });
    //
    // // grey out list items when hovered
    // $("content").append("<p>This is a dynamically added paragraph.</p>");
    //
    // $("body").on("mouseenter", "li", function () {
    //     $(this).css("color", "#666");
    // });
});

// Passing Additional Data To Events //
$(function () {
    // $("#btn-click").click({
    //     user: "Jim",
    //     domain: "yahoo.com"
    // }, function (event) {
    //     greetUser(event.data);
    // });
    //
    // function greetUser(userdata) {
    //     username = userdata.user || "Anonymous"
    //     domain = userdata.domain || "example.com"
    //     alert("Welcome Back " + username + " from " + domain + "!");
    // }
});

// Creating an Image Gallery with Lightbox Preview //
$(function () {
    // var galleryItems = $(".gallery").find("img");
    // galleryItems.css("width", "33%").css("opacity", "0.7");
    //
    // galleryItems.mouseenter(function() {
    //     $(this).stop().fadeTo(500, 1);
    // });
    // galleryItems.mouseleave(function() {
    //     $(this).stop().fadeTo(500, 0.7);
    // });
    //
    // galleryItems.click(function() {
    //     var source = $(this).attr("src");
    //     var image = $("<img>").attr("src", source).css("width", "100%");
    //     $(".lightbox").empty().append(image).fadeIn(2000);
    // });
    //
    // // make lightbox fade out //
    // $(".lightbox").click(function() {
    //     $(this).stop().fadeOut();
    // });
});

// KeyDown & KeyUp Events //
$(function () {
    // $("html").keydown(function(event) {
    //     console.log(event.which) // tell you what key was pressed
    // });
    //
    // // Make blue box move to the right with arrow key
    // var ARROW_RIGHT = 39;
    // $("html").keydown(function(event) {
    //     if (event.which === ARROW_RIGHT) {
    //         $(".blue-box").stop().animate({
    //             marginLeft: "+=10px"
    //         }, 50);
    //     }
    // });
});

//*****************************************************************************************************************************************************************************//
// FORMS & EVENTS //
//*****************************************************************************************************************************************************************************//

// Focus & Blur Events //

// add box shadow when click on submit box
$(function () {
    // var inputFields = $("input:text, input:password, textarea");
    // inputFields.focus(function () {
    //     $(this).css("box-shadow", "0 0 4px #666");
    // });
    // // add blur event
    // inputFields.blur(function(){
    //     $(this).css("box-shadow", "none");
    // });
    //
    // $("#name").blur(function(){
    //     var text = $(this).val();
    //     if(text.length < 3) {
    //         $(this).css("box-shadow", "0 0 4px #811");
    //     } else {
    //         $(this).css("box-shadow", "0 0 4px #181");
    //     }
    // });
});

// Change Event //
$(function () {

    // The change event is used for input elements such as checkboxes, radio
    // button and select tags. They fire whenever the selection changes.

    // Add green indicator when checkbox is checked and red one otherwise.
    // $("#checkbox").change(function() {
    //     var isChecked = $(this).is(":checked");  // or .prop("checked")
    //
    //     if (isChecked) {
    //         // Add the checkbox' label to the selection and highlight both in green.
    //         $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
    //     } else {
    //         $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    //     }
    // });

    // Another common use case is to read the selected option from a <select>
    // element when a new option is selected.
//     $("#selection").change(function() {
//         var chosen = $(this).find(":selected").text();
//         alert(chosen);
//     });
//
});

// Submit Event //
// $(function () {
//
//     // You can intercept form submission via the submit event.
//     // jQuery provides the submit() for this. A common use case is to perform
//     // client-side form validation to avoid submitting a form with invalid data.
//
//     // For instance, let's check if the user wrote a message in the textarea.
//     $("#form").submit(function(event) {
//         var textarea = $("#message");
//         if (textarea.val().trim() === "") {
//             // No message, add red highlighting to indicate error
//             textarea.css("box-shadow", "0 0 4px #811");
//
//             // The default event now would be to submit the form. The browser will do
//             // this automatically when clicking a submit button. We prevent this using
//             // preventDefault(). This way, the form will not be submitted.
//             event.preventDefault();
//         } else {
//             // Nothing to do, let the form be submitted.
//         }
//     });
//
// });

//*****************************************************************************************************************************************************************************//
// AJAX //
//*****************************************************************************************************************************************************************************//


