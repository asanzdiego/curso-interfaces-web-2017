/*
  Copyright (c) Total Validator.
  All Rights Reserved.
  Use is subject to the terms of the license.
*/
var pageName = '.' + $(location).attr('pathname').split("/").pop();

//Corrected spelling mistakes
function correctSpelling(word) {
	$("span.addword").each(function() {
		if ($(this).attr("data-word").toLowerCase() == word.toLowerCase()) {
			$(this).off("click").removeClass("addword").parent().removeClass("error");
			$(this).next().remove();

			//Remove the "spelling mistake" error if there are no more spelling mistakes in this text
			var gparent = $(this).parent().parent();
			if (gparent.children(".error").length == 0) {
				gparent.children(".hoverparent").children().children(".problem").removeClass("problem")
					.text("Spelling mistakes (corrected): ").next(".hoverblock").remove();
			}
			//Same as above for attribute spelling mistakes
			gparent = $(this).parent().parent(".problem");
			if (gparent.children(".error").length == 0) {
				gparent.removeClass("problem")
					.text("Spelling mistakes (corrected): ").next(".hoverblock").remove();
			}
		}
	})
}

//Save to sessionStorage (capture errors with IE using local files)
function saveSetting(setting, value) {
	try {
		sessionStorage.setItem(setting, value);
	} catch(e) {}
}
function getSetting(setting) {
	var value = null;
	try {
		value = sessionStorage.getItem(setting);
	} catch(e) {}
	return value;
}

//Respond to 'More Info' radio button
function showMoreInfoEvt() {
	showMoreInfo($(this));
}
function showMoreInfo(button) {
	//Remove 'moreInfo' functions
	$("span.hoverparent").off();
	if (button.prop("value") == "show") {
		saveSetting("moreinfo" + pageName, "show");
		//Show all 'more info' blocks
		$("span.hoverparent span.hoverblock").css({
			"position": "relative",
			"display": "block",
			"border": "1px solid",
			"left": "8em",
			"width": "54em",
			"padding": "5px",
			"word-break": "keep-all",
			"word-wrap": "break-word",
			"white-space": "-moz-pre-wrap",
			"white-space": "pre-wrap"
		});
		//Add click to 'problem' text to show/hide more info
		$("span.hoverparent").click(moreInfo);
	}
	else if (button.prop("value") == "hover") {
		saveSetting("moreinfo" + pageName, "hover");
		//Make all 'more info' blocks hoverable, by defaulting to mainstyle.css settings
		$("span.hoverparent span.hoverblock").css({
			"display": "none",
			"position": "",
			"display": "",
			"border": "",
			"left": "",
			"width": "",
			"padding": "",
			"word-break": "",
			"word-wrap": "",
			"white-space": "",
			"white-space": ""
		});
	}
	else if (button.prop("value") == "hide") {
		saveSetting("moreinfo" + pageName, "hide");
		//Hide all 'more info' blocks
		$("span.hoverparent span.hoverblock").css({
			"display": "none",
			"position": "relative",
			"border": "1px solid",
			"left": "8em",
			"width": "54em",
			"padding": "5px",
			"word-break": "keep-all",
			"word-wrap": "break-word",
			"white-space": "-moz-pre-wrap",
			"white-space": "pre-wrap"
		});
		//Add click to 'problem' text to show/hide more info
		$("span.hoverparent").click(moreInfo);
	}
}

//Toggle 'More Info' on problems
function moreInfo() {
	var hoverBlock = $(this).children().children(".hoverblock");
	if ($(hoverBlock).is(':visible')) {
		$(hoverBlock).css("display", "none");
	}
	else {
		$(hoverBlock).css("display", "block");
	}
}

//Run at document load
$(document).ready(function(){
	//START: Summary page result sorting functions -----------------------
	//Respond to 'Sort By' radio button
	function sortResultsEvt() {
		//Check if anything to do
		if (getSetting("sortby") != $(this).prop("value"))
			sortResults($(this));
	}
	function sortResults(button) {
		//Sort the results by path
		if (button.prop("value") == "srtpath") {
			sortByPath();
			saveSetting("sortby", "srtpath");
		}
		//Sort with most issues at the top
		else if (button.prop("value") == "srtmost") {
			sortByIssues(true);
			saveSetting("sortby", "srtmost");
		}
		//Sort with most issues at the bottom
		else if (button.prop("value") == "srtleast") {
			sortByIssues(false);
			saveSetting("sortby", "srtleast");
		}
		//Unsort them (ie original order)
		else {
			$("#results").append(origOrder);
			saveSetting("sortby", "srtlinks");
		}
	}

	//Sort By Path function
	function sortByPath() {
		var results = $("#results").children("p");
		results.sort(function(a, b) {
			var at = $(a).text();
			var bt = $(b).text();

			if (at > bt) return 1;
			else if (at < bt) return -1;
			return 0;
		});
		$("#results").append(results);
	};

	//Sort By Issues function
	function sortByIssues(desc) {
		var results = $("#results").children("p");
		results.sort(function(a, b) {
			var ac = -1;
			var bc = -1;
			if ($(a).attr("data-issues")) ac = parseInt($(a).attr("data-issues"));
			if ($(b).attr("data-issues")) bc = parseInt($(b).attr("data-issues"));
			if (desc) {
				if (ac < bc) return 1;
				else if (ac > bc) return -1;
			}
			else {
				if (ac > bc) return 1;
				else if (ac < bc) return -1;
			}
			//Secondary Sort by Path
			var at = $(a).text();
			var bt = $(b).text();
			if (at > bt) return 1;
			else if (at < bt) return -1;
			return 0;
		});
		$("#results").append(results);
	};
	//END: Summary page result sorting functions -------------------------

	//START: Alert Dialog stuff ------------------------------------------
	$("#alert").hide();
	$("#alert").dialog({
		autoOpen: false,
		title: "Alert",
		modal: true,
		dialogClass: "no-close",
		buttons : [{
			text : "OK",
			click : function() {
            $(this).dialog("close");
			}
    }]
  });
	//END: Alert Dialog stuff --------------------------------------------

	//START: Spellcheck stuff --------------------------------------------
	//For all browsers, except IE <10
	$("body:not([class])").each(function() {
		//Build up a list of words on the page, so can check them all at once
		var wordList = "";
		var port = 9890;

		//Rewrite the old link into a span, so can add words with a click
		$("a.addword").each(function() {
			port = $(this).attr("data-port");
			var word = $(this).attr("data-word");
			wordList += word + " ";
			var text = $(this).text();
			var addWordSpan = '<span class="addword" title="Add word to dictionary" data-port="' + port + '" data-word="' + word + '">' + text + '</span>';
			$(this).replaceWith(addWordSpan);
		});

		//Send all the existing words at once, and disable any that are already saved
		if (wordList.length > 0) {
			var href = "http://127.0.0.1:" + port + "/?wordlist=" + wordList + "&js=true";
			$.support.cors = true;	//This makes it work on IE10/11
			jQuery.get(href, function(responseText) {
				if (responseText.length > 0) {
					var words = responseText.split(" ");
					jQuery.each(words, function (i, word) {
						correctSpelling(word);
					});
				}
			})
			.fail(function() {
				//Fail silently
			});
		}

		//Process the new spans to add words by clicking them
		$("span.addword").click(function(e){
			//Send word to Pro Tool
			var word = $(this).attr("data-word");
			var href = "http://127.0.0.1:" + $(this).attr("data-port") + "/?word=" + word + "&js=true";
			$.support.cors = true;	//This makes it work on IE10/11
			jQuery.get(href, function(responseText) {
				if (responseText.indexOf("Word") != 0) {
					$("#alert").html(responseText).dialog("open");
				}
				else if (responseText.indexOf("Word") == 0) {
						correctSpelling(word);
				}
			})
			.fail(function() {
					$("#alert").html("Check that the Pro Tool is running").dialog("open");
			});
		});
	});
	//END: Spellcheck stuff ----------------------------------------------

	//START: Collapsible sections ----------------------------------------
	$(".collToggle").each(function() {
		//Restore state of collapsible sections, when redisplay page
		var subClass = $(this).attr("class").split(" ")[1];
		var subPage = subClass.indexOf("sub") == 0;
		var defaultCollapsed = subClass.indexOf("Col") != -1;
		var thisBlock = ".collBlock." + subClass;
		if (getSetting(thisBlock + pageName) == "collapsed" ||
				(defaultCollapsed && getSetting(thisBlock + pageName) != "expanded"))
		{
			if ($(this).attr("alt")) {
				var altText = $(this).attr("alt").replace("Hide", "Show");
				$(this).attr("alt", altText);
				$(this).attr("src", (subPage ? "../" : "" ) + "images/expand.gif");
			}
			else if (!($(this).prop("checked"))) {
				$(this).prop("checked", true);
			}
			$(thisBlock).hide();
		}
		else {
			if ($(this).attr("alt")) {
				var altText = $(this).attr("alt").replace("Show", "Hide");
				$(this).attr("alt", altText);
				$(this).attr("src", (subPage ? "../" : "" ) + "images/contract.gif");
			}
			else if ($(this).prop("checked")) {
				$(this).prop("checked", false);
			}
		}
	}).click(function(e){
		//Show/Hide collapsible sections
		if ($(this).attr("alt")) e.preventDefault();	//Prevent any href firing
		var thisToggle = $(this);

		//Get the second class name as the unique 'block' to collapse
		var subClass = $(this).attr("class").split(" ")[1];
		var subPage = subClass.indexOf("sub") == 0;
		var thisBlock = ".collBlock." + subClass;

		$(thisBlock).toggle(0, function() {
			if ($(this).is(':visible')) {
				if ($(thisToggle).attr("alt")) {
					var altText = $(thisToggle).attr("alt").replace("Show", "Hide");
					$(thisToggle).attr("alt", altText);
					$(thisToggle).attr("src", (subPage ? "../" : "" ) + "images/contract.gif");
				}
				else {
					var ua = window.navigator.userAgent.toLowerCase();
					if (ua.indexOf("chrome") != -1 && ua.indexOf("edge") == -1) {
						location.reload();	//Chrome layout fix - reload the page
					}
				}
				saveSetting(thisBlock + pageName, "expanded");
			}
			else {
				if ($(thisToggle).attr("alt")) {
					var altText = $(thisToggle).attr("alt").replace("Hide", "Show");
					$(thisToggle).attr("alt", altText);
					$(thisToggle).attr("src", (subPage ? "../" : "" ) + "images/expand.gif");
				}
				saveSetting(thisBlock + pageName, "collapsed");
			}
		});
	});
	//END: Collapsible sections ------------------------------------------

	//START: Summary page result sorting ---------------------------------
	//Save the original order and button for 'unsorting' later
	var origOrder = $("#results").children("p");
	var sortby = getSetting("sortby");
	$("[type=radio][name=sortby]").each(function() {
		//If no session stored then default to whatever the Tool set
		if (!sortby) {
			if ($(this).prop("checked")) {
				saveSetting("sortby", $(this).prop("value"));
				sortResults($(this));
			}
		}
		//Restore session settings
		else if ($(this).prop("value") == sortby) {
			$(this).attr("checked", "checked");
			sortResults($(this));
		}
	}).click(sortResultsEvt);
	//END: Summary page result sorting -----------------------------------

	//START: More information toggles ------------------------------------
	var globalmi = getSetting("globalmi");
	$("[type=radio][name=globalmi]").each(function() {
		//If no session stored then default to whatever the Tool set
		if (!globalmi) {
			if ($(this).prop("checked")) {
				saveSetting("globalmi", $(this).prop("value"));
			}
		}
		//Restore session settings
		else if ($(this).prop("value") == globalmi) {
			$(this).attr("checked", "checked");
		}
	}).click(function() {
		if ($(this).prop("value") == "hover") {
			saveSetting("globalmi", "hover");
		}
		else if ($(this).prop("value") == "show") {
			saveSetting("globalmi", "show");
		}
		else if ($(this).prop("value") == "hide") {
			saveSetting("globalmi", "hide");
		}
	});

	var moreInfoSetting = getSetting("moreinfo" + pageName);
	var lastglobal = getSetting("globalmi" + pageName);
	if (globalmi && (!moreInfoSetting || globalmi != lastglobal)) {
		moreInfoSetting = globalmi;
		saveSetting("globalmi" + pageName, globalmi);
	}
	$("[type=radio][name=moreinfo]").each(function() {
		//If no session stored then default to whatever the Tool set
		if (!moreInfoSetting) {
			if ($(this).prop("checked")) {
				saveSetting("globalmi" + pageName, $(this).prop("value"));
				showMoreInfo($(this));
			}
		}
		//Restore session settings
		else if ($(this).prop("value") == moreInfoSetting) {
			$(this).attr("checked", "checked");
			showMoreInfo($(this));
		}
	}).click(showMoreInfoEvt);
	//END: More information toggle ---------------------------------------
});
