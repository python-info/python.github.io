$(document).ready(function(){
	$("nav ul li a").click(function(e){
		e.preventDefault();
		menuSwitch($(this).attr('href'));
			
				
		//funkcje są asynchroniczne 
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js", function () {
			$('pre > code').each(function(i, block) {
				hljs.highlightElement(block);	
				$.getScript("https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js", function () {
					$('code.hljs').each(function(i, block) {
						hljs.lineNumbersBlock(block);
						});
					});
			});
		});	

		$("article").load("content/"+$(this).attr('href')+".html");

		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js", function () {
			$('pre > code').each(function(i, block) {
				hljs.highlightElement(block);	
				$.getScript("https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js", function () {
					$('code.hljs').each(function(i, block) {
						hljs.lineNumbersBlock(block);
						});
					});
			});
		});	
				
	});
});