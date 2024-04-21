// const song = document.getElementById('song')
// const progress = document.getElementById('progress')
// const ctrlIcon = document.getElementById('ctrlIcon')
// const rotate_image = document.querySelector('img')
// const startTime = document.querySelector(".start-time")
// const totalTime = document.querySelector(".total-time")

// song.onloadedmetadata = () =>{
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }

// totalTime.textContent = formatTime(song.duration)

// const playPause =()=>{
//     if (ctrlIcon.classList.contains("fa-pause")) {
//     song.pause()
//     ctrlIcon.classList.remove("fa-pause")
//     ctrlIcon.classList.add("fa-play")
//     rotate_image.classList.remove('rotate_image')
// }else {
//     song.play()
//     ctrlIcon.classList.add("fa-pause")
//     ctrlIcon.classList.remove("fa-play")
//     rotate_image.classList.add('rotate_image')
// }
// }

// song.addEventListener('timeupdate', () => {
//     progress.value = song.currentTime;
//     startTime.textContent = formatTime(song.currentTime);
//     console.log (startTime.textContent)
// });

// progress.onchange =()=>{
//     song.currentTime = progress.value;
//     song.play()
//     ctrlIcon.classList.add("fa-pause")
//     ctrlIcon.classList.remove("fa-play")
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const music = document.getElementById('music');
//     const artist = document.querySelector('.artist')
//     const title = document.querySelector('.title')
//     const image = document.querySelector('.song-img')
//     const progress = document.getElementById('progress');
//     const ctrlIcon = document.getElementById('ctrlIcon');
//     const rotate_image = document.querySelector('img');
//     const startTime = document.querySelector('.start-time');
//     const totalTime = document.querySelector('.total-time');
//     const play_pause = document.getElementById('play-pause')
//     const prev = document.getElementById('prev')
//     const next = document.getElementById('next')

//     const songs = [
//         {
//             artist: 'Mohit Chauhan',
//             song_name: 'Tune_Jo',
//             song_title: 'Tune Jo Na Kaha',
//         },
//         {
//             artist: 'Arijit Singh',
//             song_name: 'Ve_Kamleya',
//             song_title: 'Ve Kamleya',
//         }
//     ]

//     music.onloadedmetadata = () => {
//         progress.max = music.duration;
//         progress.value = music.currentTime;
//         totalTime.textContent = formatTime(music.duration);
//     };

//     function formatTime(time) {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }

//     const playPause = () => {
//         if (music.paused) {
//             music.play();
//             ctrlIcon.classList.add('fa-pause');
//             ctrlIcon.classList.remove('fa-play');
//             rotate_image.classList.add('rotate_image');
//         } else {
//             music.pause();
//             ctrlIcon.classList.remove('fa-pause');
//             ctrlIcon.classList.add('fa-play');
//             rotate_image.classList.remove('rotate_image');
//         }
//     };

//         if (music.play()) {
//             setInterval(() => {
//                 startTime.textContent = formatTime(music.currentTime);
//             }, 100);
//         };

//         progress.onchange = ()=>{
//             music.currentTime = progress.value
//         }

//     play_pause.addEventListener('click', playPause);

//     const loadSong = (song)=>{
//         title.textContent = song.song_title;
//         artist.textContent = song.artist;
//         music.src = `music/${song.song_name}.mp3`
//         image.src = `image/${song.song_name}.jpg`
//     };

//     loadSong(songs[0])

//     songIndex = 0;

// const prevSong = ()=>{
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     loadSong(songs[songIndex]);
//     music.play();
//     ctrlIcon.classList.add('fa-pause');
//     ctrlIcon.classList.remove('fa-play');
//     rotate_image.classList.add('rotate_image');
// }
// const nextSong = ()=>{
//     songIndex = (songIndex + 1) % songs.length
//     loadSong(songs[songIndex]);
//     music.play();
//     ctrlIcon.classList.add('fa-pause');
//     ctrlIcon.classList.remove('fa-play');
//     rotate_image.classList.add('rotate_image');
// }

//    prev.addEventListener("click", prevSong)
//    next.addEventListener("click", nextSong)
// });

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  const artist = document.querySelector(".artist");
  const title = document.querySelector(".title");
  const image = document.querySelector(".song-img");
  const progress = document.getElementById("progress");
  const ctrlIcon = document.getElementById("ctrlIcon");
  const rotate_image = document.querySelector("img");
  const startTime = document.querySelector(".start-time");
  const totalTime = document.querySelector(".total-time");
  const play_pause = document.getElementById("play-pause");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const container = document.querySelector('.container')


  const progress_back = document.getElementById("progress-back");
  const ctrlIcon_back = document.getElementById("ctrlIcon-back");
  const startTime_back = document.querySelector(".start-time-back");
  const totalTime_back = document.querySelector(".total-time-back");
  const play_pause_back = document.getElementById('play-pause-back');
  const prev_back = document.getElementById("prev-back");
  const next_back = document.getElementById("next-back");
  const song_detail_back = document.getElementById('song-details-back');
  const time = document.getElementById('time');
  const date = document.getElementById('date');
  const crossmark = document.querySelector('.crossmark')
  const background = document.querySelector('.background-play')
  const player_icon = document.getElementById('player-icon');
  const home_icon = document.querySelectorAll('.home');
  const homepage = document.querySelector('.homepage');


  crossmark.addEventListener("click",()=>{
    background.classList.add("hide");
    music.pause()
  })

home_icon.forEach(home => {
    home.addEventListener("click",()=>{
        container.classList.add('hide')
        homepage.classList.remove('hide')
    })
});


player_icon.addEventListener("click", ()=>{
    container.classList.remove('hide');
    homepage.classList.add('hide')
})





  const songs = [
    {
      artist: "Mohit Chauhan",
      song_name: "Tune_Jo",
      song_title: "Tune Jo Na Kaha",
    },
    {
      artist: "Arijit Singh",
      song_name: "Ve_Kamleya",
      song_title: "Ve Kamleya",
    },
  ];

  music.onloadedmetadata = () => {
    progress.max = music.duration;
    progress.value = music.currentTime;
    totalTime.textContent = formatTime(music.duration);


    progress_back.max = music.duration;
    progress_back.value = music.currentTime;
    totalTime_back.textContent = formatTime(music.duration);
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const playPause = () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };

  music.addEventListener("play", () => {
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    rotate_image.classList.add("rotate_image");
    background.classList.remove("hide")

    ctrlIcon_back.classList.remove("fa-play");
    ctrlIcon_back.classList.add("fa-pause");
  });

  music.addEventListener("pause", () => {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    rotate_image.classList.remove("rotate_image");

    ctrlIcon_back.classList.remove("fa-pause");
    ctrlIcon_back.classList.add("fa-play");
  });

  if (music.play()) {
    setInterval(() => {
      startTime.textContent = formatTime(music.currentTime);

      startTime_back.textContent = formatTime(music.currentTime);
    }, 100);
  }

  progress.oninput = () => {
    music.currentTime = progress.value;
  };
  progress_back.oninput = () => {
    music.currentTime = progress_back.value;
  };

  play_pause.addEventListener("click", playPause);
  play_pause_back.addEventListener("click", playPause);

  const loadSong = (song) => {
    title.textContent = song.song_title;
    artist.textContent = song.artist;
    song_detail_back.textContent = song.song_title +" by "+ song.artist;
    music.src = `music/${song.song_name}.mp3`;
    image.src = `image/${song.song_name}.jpg`;
  };



  function updateProgress() {
    progress.value = music.currentTime;
    progress_back.value = music.currentTime;
  }

  music.addEventListener("timeupdate", () => {
    updateProgress();
  });

  loadSong(songs[0]);

  let songIndex = 0;

  const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    music.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    rotate_image.classList.add("rotate_image");
  };

  const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    music.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    rotate_image.classList.add("rotate_image");
  };

  prev.addEventListener("click", prevSong);
  next.addEventListener("click", nextSong);

  prev_back.addEventListener("click", prevSong);
  next_back.addEventListener("click", nextSong);
});


const currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
minutes = minutes < 10 ? `0${minutes}` : minutes;
const today = currentTime.getDate()
const day = currentTime.getDay();
const month = currentTime.getMonth();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
date.textContent = daysOfWeek[day]+", " +" "+ today+" " + months[month]


if (hours > 12) {
    hours -= 12;
}

const formattedTime = hours+":"+minutes;
time.textContent = formattedTime
