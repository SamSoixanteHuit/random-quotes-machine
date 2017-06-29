$(document).ready(function() {
		var quotesContainer = $("#quotes-container");
    function newquote(){
		$.ajax({
			url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en",
			dataType: "jsonp",
			success:function(json){
				//$("#bring").text(json.quoteText);
				console.log(json.quoteAuthor);

				var text = '<p class="quote" id="para-quote">"' + json.quoteText+'"</p>'; 
				var author = '<p class="author" id="para-author">' + json.quoteAuthor + '</p>';
				quotesContainer.empty();
				quotesContainer.prepend(author).prepend(text);
				
			}      
    	});      
    }
    
    newquote();

    $("#btn-quote").on("click", function() {
    	newquote();
    });

    $("#btn-tweet").on("click", function(e){      
      this.href = 'https://twitter.com/intent/tweet?text=' +   $("#para-quote").text() + '  ' + $("#para-author").text();
      console.log(this.href);
    });

});