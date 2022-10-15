import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import leftArrow from "../../utils/img/carousel/icons8-left-64.png"
import rightArrow from "../../utils/img/carousel/icons8-right-64.png"
import { useState, useEffect } from "react";
// import { Carousel } from "../../components/Carousel/carousel";
// import { Slides } from "./Slides"
import ProjectData from "./ProjectData";
import { ProjectContainer, ProjectDescription, ProjectMedia } from "./styled.tw"
import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ArrowButtons } from "../../components/Carousel/style.tw";


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // define state for current item and total items
  const [length, setLength] = useState(ProjectData.length)

  useEffect(() => {
    setLength(ProjectData.length)
  }, [ProjectData])

  // function to handle controls buttons
  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  return(
    <GlobalStyle>
      <Header1>Projects</Header1>
      <Underline></Underline>
      <div>
        <CarouselContainer>
        <CarouselWrapper>
          {
            currentIndex > 0 &&
            <ArrowButtons onClick={prev} className="left-14">
                <img src={leftArrow} alt="Left Arrow" />
            </ArrowButtons>
          }
          <CarouselContentWrapper>
            <CarouselContent style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {ProjectData.map((project, index) => {
                  return(
                      <ProjectContainer key={`${index}-${project.title}`}>
                          <ProjectMedia>
                              <video width="88">
                                  <source src={project.mediaMp4} />
                                  <source src={project.mediaWebm} />
                              </video>
                          </ProjectMedia>
                          <ProjectDescription>
                              <p>{project.descriptionText}</p>
                          </ProjectDescription>
                      </ProjectContainer>
                )})}
            </CarouselContent>
          </CarouselContentWrapper>
          {
            currentIndex < (length - 1) &&
            <ArrowButtons onClick={next} className="right-14">
                <img src={rightArrow} alt="Right Arrow" />
            </ArrowButtons>
          }
        </CarouselWrapper>
      </CarouselContainer>
        {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
      </div>
    </GlobalStyle>
  );
}
