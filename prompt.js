let songs = ["Positions", "Therefor I Am", "Like I'm Gonna Lose You", "Laugh Now Cry Later", "you should see me in a crown"];
console.log(songs[0])
console.log(songs[2])

songs.splice(4, 1, "Happy");
console.log(songs);

let newFour = songs[3];
songs.push("Frozen");
songs.pop();

console.log(songs.length);

for (let i = 0; i < songs.length; i++) {
  console.log(`${i}, ${songs[i]}`)
};

let lastSong = songs[songs.length - 1];
console.log(lastSong);