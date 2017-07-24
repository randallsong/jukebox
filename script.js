var song1 = new Audio('Music/fi-theme.mp3');
var song2 = new Audio('Music/ballad-of-the-goddess.mp3');
var song3 = new Audio('Music/great-fairy-fountain.mp3');
var song4 = new Audio('Music/lonlonranch.mp3');
var song5 = new Audio('Music/zelda-theme-twilight-princess.mp3');
//turns all music files into variables
var songList = [song1, song2, song3, song4, song5]


//uses API to get to songs in soundcloud
// SC.initialize({
//  client_id: 'fd4e76fc67798bfa742089ed619084a6'
//  });


//play button on click will activate a song]
//pause button on clock will stop song
//fast forward button will skip the song and play the next song
var i = 0;

function jukebox(){
	this.currentsong = songList;
}

jukebox.prototype.play = function(){
	this.currentsong[i].play()
}

jukebox.prototype.pause = function(){
	this.currentsong[i].pause()
}

jukebox.prototype.skip = function(){
	this.currentsong[i].pause();
	this.currentsong[i+1].play();
	i++;
	
}

var newjukebox = new jukebox();


document.getElementById('play').onclick = function(){
	newjukebox.play();
}
document.getElementById('stop').onclick = function(){
	newjukebox.pause();
}
document.getElementById('skip').onclick = function(){
	newjukebox.skip();
}



$("#pinkie").click(function(){
	$(this).slideUp("slow", function(){
	});
});	
