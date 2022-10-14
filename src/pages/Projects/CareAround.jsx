import { ProjectContainer, ProjectDescription, ProjectMedia } from "./styled.tw";
import CareAroundVideo from "../../utils/videos/care_around.mp4"

export default function CareAround() {
  return (
    <ProjectContainer>
      <ProjectMedia>
          <video autoplay loop playsinline>
              <source src={CareAroundVideo} type="video/mp4" />
          </video>
      </ProjectMedia>
    <ProjectDescription>
        <h1>CareAround</h1>
        <p>A mobile application using Optical Character Recognition (Google cloud OCR API) on beauty products and finding a match in a Japanese products database,built using scrapping with Kimurai gem allowing infinite scroll. Scrapped database translated from japanese to english through DEEPL API.
            Product présentation
        </p>
    </ProjectDescription>
</ProjectContainer>
  )
}
