// var song1 = new Audio('Music/fi-theme.mp3');
// var song2 = new Audio('Music/ballad-of-the-goddess.mp3');
// var song3 = new Audio('Music/great-fairy-fountain.mp3');
// var song4 = new Audio('Music/lonlonranch.mp3');
// var song5 = new Audio('Music/zelda-theme-twilight-princess.mp3');
// //turns all music files into variables
// var songList = [song1, song2, song3, song4, song5]


SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

// SC.get("/playlists/340448441").then(function(response){
// 	SC.stream('/tracks/' + response.tracks[2].id).then(function(player){
//  	console.log(player);
//  	player.play();
//  });
// })

function jukebox(){
	i = 0;
}

jukebox.prototype.start = function(){
		SC.get("/playlists/340448441").then(function(response){
		SC.stream('/tracks/' + response.tracks[i].id).then(function(player){
		console.log(player)
		player.play()
		});
	})
		document.getElementById("track" + i).style.display = "block"
}

jukebox.prototype.stop = function(){
		SC.get("/playlists/340448441").then(function(response){
		SC.stream('/tracks/' + response.tracks[i].id).then(function(player){
		console.log(player)
		player.pause()
		});
	})
}

jukebox.prototype.skip = function(){
	i++;
	SC.get("/playlists/340448441").then(function(response){
		SC.stream('/tracks/' + response.tracks[i].id).then(function(player){
		console.log(player)
		player.play()
		});
	})
	
}

jukebox.prototype.updateArtwork = function(){
	var previousArtwork = i-1;
	SC.get("/playlists/340448441").then(function(response){
		SC.stream('/tracks/' + response.tracks[i].id).then(function(player){
		console.log(response.tracks[i].artwork_url)
		});
		document.getElementById("album-artwork").innerHTML = "<img src=" + response.tracks[i].artwork_url + ">";
		document.getElementById("track" + previousArtwork).style.display = "none"
		document.getElementById("track" + i).style.display = "block"
	})
}



document.getElementById('play').onclick = function(){
	newjukebox.start();
	newjukebox.updateArtwork();
}
document.getElementById('pause').onclick = function(){
	newjukebox.stop();
}
document.getElementById('skip').onclick = function(){
	newjukebox.skip();
		newjukebox.updateArtwork();
}

var newjukebox = new jukebox();

// if (i = 0){
// 	document.getElementById("track0").style.display = block;
// }else if (i = 1){
// 	document.getElementById("track1").style.display = block;
// }else if (i = 2){
// 	document.getElementById("track2").style.display = block;
// }else if (i = 3){
// 	document.getElementById("track3").style.display = block;
// }else if (i = 4){
// 	document.getElementById("track4").style.display = block;
// }

//play button on click will activate a song]
//pause button on clock will stop song
//fast forward button will skip the song and play the next song
// var i = 0;

// function jukebox(){
// 	this.currentsong = songList;
// }

// jukebox.prototype.play = function(){
// 	this.currentsong[i].play()
// }

// jukebox.prototype.pause = function(){
// 	this.currentsong[i].pause()
// }

// jukebox.prototype.skip = function(){
// 	this.currentsong[i].pause();
// 	this.currentsong[i+1].play();
// 	i++;
	
// }

// var newjukebox = new jukebox();


