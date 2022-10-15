import CareAroundMp4 from "../../utils/videos/care_around.mp4"
import CareAroundWebm from "../../utils/videos/care_around.webmhd.webm"
import MasterJediMp4 from "../../utils/videos/jedi_master.mp4"
import MasterJediWebm from "../../utils/videos/jedi_master.webmhd.webm"

const ProjectData = [
  {
    mediaMp4: CareAroundMp4,
    mediaWebm: CareAroundWebm,
    mediaJpeg: null,
    title: "CareAround",
    descriptionText: "A mobile application using Optical Character Recognition (Google cloud OCR API) on beauty products and finding a match in a Japanese products database,built using scrapping with Kimurai gem allowing infinite scroll. Scrapped database translated from japanese to english through DEEPL API. Product présentation"
  },
  {
    mediaMp4: MasterJediMp4,
    mediaWebm: MasterJediWebm,
    mediaJpeg: null,
    title: "Master Jedi",
    descriptionText: "A web application build on ruby on rails with an exagerated design and javascript effect."
  }
]

export default ProjectData;
