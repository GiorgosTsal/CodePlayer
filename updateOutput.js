
		
			 function updateOutput() {
                 $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
               document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());   
            }
			

			$(".toggleButton").hover(function() {
				$(this).addClass("highlightedButton");
			  }, function() {
				$(this).removeClass("highlightedButton");
			  }
			);
			
			$(".toggleButton").click(function() {
				
				$(this).toggleClass("active");
				$(this).removeClass("highlightedButton");
				var panelID = $(this).attr("id") +  "Panel";
				$("#" + panelID).toggleClass("hidden");
				var numActivePanels = $(".active").length;
				$(".panel").width(($( window ).width() / numActivePanels ) - 15);
			  }
			);
		
			
			$(".panel").height($( window ).height() - $("#topBar").height() - 64);
		
			
			updateOutput();
			
			 $("textarea").on('change keyup paste', function() {
				updateOutput();
			});
		   
		
		
	