function transform(music) {
  const new_music = [];
  const sounds = { "C": "a", "C#": "b", "D": "c", "D#": "d", "E": "e", "F": "f", "F#": "g", "G": "h", "G#": "i", "A": "j", "A#": "k", "B": "l" };

  for (let i = 0; i < music.length; i++) {
    if (music[i + 1] === "#") {
      new_music.push(sounds[music[i] + music[i + 1]]);
      i += 1;
    } else new_music.push(sounds[music[i]]);
  }

  return new_music.join("");
}


function solution(m, musicinfos) {
  const answer = [];

  musicinfos = musicinfos.map(element => element.split(","));
  for (const musicinfo of musicinfos) {
    for (let i = 0; i < 2; i++) {
      const [h, m] = musicinfo[i].split(":").map(Number);
      musicinfo[i] = h * 60 + m;
    }
  }
  const new_m = transform(m);

  for (const [start_time, end_time, title, music] of musicinfos) {
    const new_music = transform(music);
    const played_time = end_time - start_time;
    const repeat_times = Math.floor(played_time / new_music.length);
    const r = played_time % new_music.length;
    const played_music = new_music.repeat(repeat_times) + new_music.slice(0, r + 1);
    if (played_music.includes(new_m)) answer.push([title, played_time, start_time]);
  }

  if (!answer.length) return "(None)";
  answer.sort((a, b) => b[1] - a[1] || a[2] - b[2]);
  return answer[0][0];
}