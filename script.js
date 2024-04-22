  
  
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
  const lyrics_button = document.querySelector('.lyrics')
  const lyrics_container = document.querySelector('.lyrics-container')
  const cross_lyrics = document.getElementById('cross-lyrics')
  const show_lyrics = document.querySelector('.show-lyrics')


  const progress_back = document.getElementById("progress-back");
  const ctrlIcon_back = document.getElementById("ctrlIcon-back");
  const startTime_back = document.querySelector(".start-time-back");
  const totalTime_back = document.querySelector(".total-time-back");
  const play_pause_back = document.getElementById('play-pause-back');
  const prev_back = document.getElementById("prev-back");
  const next_back = document.getElementById("next-back");
  const song_name_back = document.getElementById('song-name-back');
  const artist_name_back = document.getElementById('artist-name-back');
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

lyrics_button.addEventListener("click",()=>{
  lyrics_container.classList.remove("hide")
})

cross_lyrics.addEventListener("click",()=>{
  lyrics_container.classList.add("hide")
})




  const songs = [
    {
      artist: "Mohit Chauhan",
      song_name: "Tune_Jo",
      song_title: "Tune Jo Na Kaha",
      song_lyrics: `Mmmm mmm mmmmmm... mmm mmmm


      Tune jo na kaha
      
      
      Main woh sunta raha
      
      Khamakha bewajah khwaab bunta raha
      
      
      Tune jo na kaha
      
      Main woh sunta raha
      
      Khamakha bewajah khwaab bunta raha
      
      Jaane kiski humein lag gayi hai nazar
      
      Is shehar mein na apna thikana raha
      
      Durr chahat se mein apni chalta raha
      
      Khamakha bewajah khwaab bunta raha
      
      
      Dard pehle se hai zyaada
      
      Khud se phir yeh kiya wada
      
      Khamosh nazrein rahe bezubaan
      
      
      Aab na pehle si baatein hain
      
      Bolo to lab thar tharatein hain
      
      Raaz yeh dil ka
      
      Na ho bayaan
      
      Ho gaya ke aasar koi hum pe nayi
      
      Humsafar mein toh hai
      
      Humsafar hai nahi
      
      Durr jaata raha
      
      Paas aatha raha
      
      Khamakha bewajah khwaab bunta raha
      
      
      Aaya woh phir nazar aise
      
      Baat chidne lagi phir se
      
      Aankho mein chubtha kal ka dhuwaan
      
      
      Haal tera na hum sa hain
      
      Is khushi mein kyun gham sa hai
      
      Basne laga kyun phir woh jahan
      
      Woh jahan durr jisse gaye the nikal
      
      Phir se yaadon ne kar di hai jaise pehel
      
      Lamha beet ta huwa
      
      Dil dhukata raha
      
      Khamakha bewajah khwaab bunta raha
      
      Tune jo na kaha
      
      Main woh sunta raha
      
      Khamakha bewajah khwaab bunta raha
      
      Jaane kiski humein lag gayi hai nazar
      
      Is shehar mein na apna thikana raha
      
      Durr chahat se main apni chalta raha
      
      Bhuj gayi aag thi
      
      Daag jalta raha`
    },
    {
      artist: "Arijit Singh",
      song_name: "Ve_Kamleya",
      song_title: "Ve Kamleya",
      song_lyrics: `Ve Kamleya Ve Kamleya
      Ve Kamleya Mere Nadaan Dil
      
      Ve Kamleya Ve Kamleya
      Ve Kamleya Mere Nadaan Dil
      
      Do Nainon Ke Pechida Sau Galiyare
      Inmein Kho Kar Tu Milta Hai Kahan
      Tujhko Ambar Se Pinjre Zyada Pyare
      
      Udd Ja Kehne Se
      Sunta Bhi Tu Hai Kahan
      Gall Sunn Le Aa
      
      Gall Sunn Le Aa
      Ve Kamleya Mere Nadaan Dil
      
      Ve Kamleya Ve Kamleya
      Ve Kamleya Mere Nadaan Dil
      Nadaan Dil
      
      Ja Karna Hai Toh Pyar Kar
      Zid Poori Phir Ik Baar Kar
      Kamleya Ve Kamleya
      
      Manmarzi Karke Dekh Le
      Badle Mein Sab Kuchh Haar Kar
      Kamleya Ve Kamleya
      
      Tujhpe Khud Se Zyada
      Yaar Ki Chalti Hai
      Ishq Hai Yeh Tera
      Ya Teri Ghalti Hai
      
      Agar Sawaab Hai Toh
      Kyun Saza Milti Hai
      
      Dillagi Ik Teri
      Aaj Kal Parson Ki
      Neend Le Jaati Hai
      Loot Ke Barson Ki
      
      Maan Le Kabhi Toh
      Baat Khudgarzon Ki
      
      Jinpe Chal Ke
      Manzil Milni Aasaan Ho
      Vaise Raste
      Tu Chunta Hai Kahan Ho Ho
      
      Kasti Hai Duniya
      Kass Le Fikre Taane
      Ungli Pe Aakhir Ginta Bhi
      Tu Hai Kahan
      
      Marzi Teri Jee Bhar Le Aa
      Ve Kamleya Mere Nadaan Dil
      Ve Kamleya Ve Kamleya
      Ve Kamleya Mere Nadaan Dil
      
      Ja Karna Hai Toh Pyaar Kar
      Zid Poori Phir Ik Baar Kar
      Kamleya Ve Kamleya
      
      Manmarzi Karke Dekh Le
      Badle Mein Sab Kuchh Haar Kar
      Kamleya Ve Kamleya
      
      Ja Karna Hai Toh Pyaar Kar
      Zid Poori Phir Ik Baar Kar
      Kamleya Ve Kamleya
      
      Manmarzi Karke Dekh Le
      Badle Mein Sab Kuchh Haar Kar
      Kamleya Ve Kamleya`
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
    show_lyrics.textContent = song.song_lyrics;
    song_name_back.textContent = song.song_title;
    artist_name_back.textContent = song.artist;
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

  music.addEventListener('ended', () => {
    nextSong();
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

});


