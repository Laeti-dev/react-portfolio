import CareAroundMp4 from "../../utils/videos/care_around.mp4"
import CareAroundWebm from "../../utils/videos/care_around.webmhd.webm"
import CareAroundGif from "../../utils/img/gif/carearound.gif"
import MasterJediMp4 from "../../utils/videos/jedi_master.mp4"
import MasterJediWebm from "../../utils/videos/jedi_master.webmhd.webm"
import MasterJediGif from "../../utils/img/gif/jedi_master.gif"
import IkusawaGif from "../../utils/img/gif/ikusawa.gif"
import LongestWord from "../../utils/projects/longest-word.png"

const ProjectData = [
  {
    mediaMp4: CareAroundMp4,
    mediaWebm: CareAroundWebm,
    mediaGif:CareAroundGif,
    mediaJpeg: null,
    width: '350px',
    repo: 'https://github.com/Laeti-dev/rails-carearound',
    youtube: 'https://www.youtube.com/watch?v=DJWMEpez0hE&t=1s&ab_channel=LaetitiaTadde%C3%AF',
    link: null,
    title: "CareAround",
    enText: "A mobile application using Optical Character Recognition on beauty products to find the perfect match in Japan. Check out the demo day video!",
    frText: "Application mobile utilisant un logiciel de reconnaissance de charactères sur des cosmétiques afin de trouver son équivalent au Japon. Jetez un oeil sur notre pitch!",
    tools:["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
          ]
  },
  {
    mediaMp4: MasterJediMp4,
    mediaWebm: MasterJediWebm,
    mediaGif: MasterJediGif,
    mediaJpeg: null,
    width: '344px',
    repo: 'https://github.com/Laeti-dev/rails-jedi-master-class',
    youtube: null,
    link: null,
    title: "Master Jedi",
    enText: "A web application build on ruby on rails with an exagerated design and javascript effect.",
    frText: "Application web au design exagéré de réservation de cours pour devenir Sith ou Jedi.",
    tools:["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
            ]
  },

  {
    mediaMp4: null,
    mediaWebm: null,
    mediaJpeg: null,
    mediaGif:IkusawaGif,
    width: '344px',
    repo: 'https://github.com/Laeti-dev/ikusawa-masaki',
    youtube: null,
    link: 'https://www.masakiikusawa.com',
    title: "Hairstylist Portfolio",
    enText: "Responsive portfolio for freelance hairstylist. Built using javascript and scss.",
    frText: "Portfolio de coiffeur en vanilla javascript et scss",
    tools:[]
  },

  {
    mediaMp4: null,
    mediaWebm: null,
    mediaGif: null,
    mediaJpeg: LongestWord,
    width: '80%',
    repo:'https://github.com/Laeti-dev/rails-longest-word-game',
    youtube: null,
    title: "Longest word Game",
    enText: "Simple rails app displaying random letters,the user has to build the longest word in english within the letters grid. The word is check through an API to verify its existence in english. Test system with Capybara",
    frText: "Application sur Rails d'un jeu pour construire le plus long mot connu depuis une sélection de lettres",
    tools: []
  }
]

export default ProjectData;
