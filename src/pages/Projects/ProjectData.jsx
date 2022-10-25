import CareAroundMp4 from "../../utils/videos/care_around.mp4"
import CareAroundWebm from "../../utils/videos/care_around.webmhd.webm"
import MasterJediMp4 from "../../utils/videos/jedi_master.mp4"
import MasterJediWebm from "../../utils/videos/jedi_master.webmhd.webm"
import IkusawaPortfolio from "../../utils/videos/ikusawa-portfolio.mp4"
import LongestWord from "../../utils/projects/longest-word.png"

const ProjectData = [
  {
    mediaMp4: CareAroundMp4,
    mediaWebm: CareAroundWebm,
    mediaJpeg: null,
    width: '88px',
    repo: 'https://github.com/Laeti-dev/rails-carearound',
    youtube: 'https://www.youtube.com/watch?v=DJWMEpez0hE&t=1s&ab_channel=LaetitiaTadde%C3%AF',
    title: "CareAround",
    descriptionText: "A mobile application using Optical Character Recognition (Google cloud OCR API) on beauty products and finding a match in a Japanese products database,built using scrapping with Kimurai gem allowing infinite scroll. Scrapped database translated from japanese to english through DEEPL API. Product présentation"
  },
  {
    mediaMp4: MasterJediMp4,
    mediaWebm: MasterJediWebm,
    mediaJpeg: null,
    width: '344px',
    repo: 'https://github.com/Laeti-dev/rails-jedi-master-class',
    youtube: null,
    title: "Master Jedi",
    descriptionText: "A web application build on ruby on rails with an exagerated design and javascript effect."
  },

  {
    mediaMp4: IkusawaPortfolio,
    mediaWebm: null,
    mediaJpeg: null,
    width: '344px',
    repo: 'https://github.com/Laeti-dev/ikusawa-masaki',
    youtube: null,
    title: "Hairstylist Portfolio",
    descriptionText: "Responsive portfolio for freelance hairstylist. Built using javascript and scss."
  },

  {
    mediaMp4: null,
    mediaWebm: null,
    mediaJpeg: LongestWord,
    width: '400px',
    repo:'https://github.com/Laeti-dev/rails-longest-word-game',
    youtube: null,
    title: "Longest word Game",
    descriptionText: "Simple rails app display random letters,the user has to build the longest word in english within the letters grid. The word is check through an API to verify its existence in english. Test system with Capybara"
  }
]

export default ProjectData;
