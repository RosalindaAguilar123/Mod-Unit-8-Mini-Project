

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
let comedy=[ "https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg "];
let action =["https://cdn.vox-cdn.com/thumbor/LNj6cw5ktFz8kZzcNvaW5IV6KaA=/460x0:1296x557/1400x1400/filters:focal(460x0:1296x557):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46271514/suicide_squad_movie.0.0.jpg", " http://assets.nflxext.com/us/boxshots/hd1080/60028202.jpg"];
let drama=["_https://userscontent2.emaze.com/images/012fb76f-d8fc-4b1d-9974-52d11d5bdee8/917e7820901a267ebfa3aa4a26e60346.jpg____", "__https://itsmybehaviour.com/wp-content/uploads/2021/09/FOTO-CALAMAR-2-1024x1024.webp"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
   if(genreInput==="comedy"){
    for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	 comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
   console.log(drama);

    
});