import { v4 as uuid4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Dunyo seni toganmas",
      cover: "https://i.ytimg.com/vi/r4jm6i-cYhQ/hqdefault.jpg",
      artist: "JAVA",
      audio: "//mp3uk.net/mp3/files/java-dunyo-seni-tog-angmas-mp3.mp3",
      color: ["#557840", "#435F86"],
      id: uuid4(),
      active: false,
    },

    {
      name: "Ешкім ұнамайды",
      cover: "https://kzmp3.kz/files/artist/476.jpg",
      artist: "2RAR",
      audio:
        "https://uzhub.net/uploads/files/2022-05/2rar-eshkim-unamajdy_(uzhub.net).mp3",
      color: ["#AEBBDB", "#4A976D"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Құраған гүл",
      cover: "https://i.ytimg.com/vi/eplq8KK2_Ms/maxresdefault.jpg",
      artist: "Qarakesek",
      audio:
        "https://muzik.kz/uploads/files/2022-05/1652923292_qarakesek-uraan-gl-2-zhaa-nsa.mp3",
      color: ["#AEBBDB", "#4A976D"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Üzülmedin mi",
      cover: "https://i1.sndcdn.com/artworks-000265286777-3jefuu-t500x500.jpg",
      artist: "Simge",
      audio:
        "https://uzmusichd.net/wp-content/uploads/mp3/turk/Simge%20-%20%C3%9Cz%C3%BClmedin%20mi_.mp3",
      color: ["#AEBBDB", "#4A976D"],
      id: uuid4(),
      active: false,
    },
  ];
}

export default chillHop;
