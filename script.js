$("<p>Hello world!</p>").appendTo("body");

$("<a>Element a</a>").appendTo("body");
$("a").attr("href", "https://www.google.be/");

$("<div id=\"parents\">div</div>").appendTo("body");
$("#parents").css({
    "height": "150px",
    "width": "150px"
});

$("<div></div>").appendTo("#parents");
$("<div></div>").appendTo("#parents");
$("<div></div>").appendTo("#parents");
$("<div></div>").appendTo("#parents");

$("div > div:nth-child(2)").html("salut")