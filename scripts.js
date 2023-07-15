var currentSongIndex = Math.floor(Math.random() * choice.length);
      var currentSong = choice[currentSongIndex];

      var isPlaying = false;
      var audioPlayer = new Audio(currentSong.audio);

      var playImg = document.createElement('img');
      playImg.setAttribute('src', 'Assets/play-button.png');
      playImg.setAttribute('width', '75');
      var pauseImg = document.createElement('img');
      pauseImg.setAttribute('src', 'Assets/pause-button.png');
      pauseImg.setAttribute('width', '75');

      var playPauseButton = document.getElementById("play-pause-button");
      playPauseButton.addEventListener("click", function () {
        if (isPlaying) {
          audioPlayer.pause();
          playPauseButton.removeChild(playPauseButton.firstChild);
          playPauseButton.appendChild(playImg);
        } else {
          audioPlayer.play();
          playPauseButton.removeChild(playPauseButton.firstChild);
          playPauseButton.appendChild(pauseImg);
        }
        isPlaying = !isPlaying;
      });

      // Generate 4 random options from the chosen song array
      var options = [];
      while (options.length < 4) {
        var randomIndex = Math.floor(Math.random() * choice.length);
        if (options.indexOf(randomIndex) === -1) {
          options.push(randomIndex);
        }
      }

      // Add the correct song to the options array
      if (options.indexOf(currentSongIndex) === -1) {
        options[Math.floor(Math.random() * options.length)] = currentSongIndex;
      }

      // Shuffle the options array
      options.sort(() => Math.random() - 0.5);

      // Define the correct option variable
      var correctOption = currentSong.title;

      // Display the options as buttons
      var optionsDiv = document.getElementById("options");
      for (var i = 0; i < options.length; i++) {
        var option = choice[options[i]];
        var button = document.createElement("button");
        button.className = "genre-button";
        button.innerText = option.title;
        button.addEventListener("click", function () {
          if (this.innerText === correctOption) {
            document.getElementById("result").innerText = "Correct!";
          } else {
            document.getElementById("result").innerText = "Wrong. The correct answer is: " + currentSong.title;
          }
        });
        optionsDiv.appendChild(button);
      }