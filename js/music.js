function playsound(audio, loop) {
    let audio = new Audio(audioName)
    audio.loop = loop;
    audio.play();
}
playsound("test.mp3", true)