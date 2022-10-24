import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ArrowButtons } from "./style.tw";
import leftArrow from "../../utils/img/carousel/icons8-left-64.png"
import rightArrow from "../../utils/img/carousel/icons8-right-64.png"
import { useState, useEffect } from "react";
import ProjectData from "../../pages/Projects/ProjectData";
import { ProjectContainer, ProjectDescription, ProjectMedia } from "../../pages/Projects/styled.tw"


export function Carousel() {
  // const {children} = props
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

  return (
    <CarouselContainer>
        <CarouselWrapper>
            {
              currentIndex > 0 &&
              <ArrowButtons onClick={prev} className="-left-20">
                  <img src={leftArrow} alt="Left Arrow" />
              </ArrowButtons>
            }
            <CarouselContentWrapper>
              <CarouselContent style={{transform: `translateX(-${currentIndex * 100}%)`}}>
              {ProjectData.map((project, index) => {
              return(
                  <li className="flex justify-around items-center min-w-full" key={`${index}-${project.title}`}>
                    <ProjectMedia>
                      <video className="w-24">
                          <source src={project.mediaMp4} />
                          <source src={project.mediaWebm} />
                      </video>
                  </ProjectMedia>
                  <ProjectDescription>
                      <h2>{project.title}</h2>
                      <p className="text-justify">{project.descriptionText}</p>
                      <div className="flex">

                      </div>
                  </ProjectDescription>
                  </li>
        )})}
        </CarouselContent>
            </CarouselContentWrapper>
            {
              currentIndex < (length - 1) &&
              <ArrowButtons onClick={next} className="-right-20">
                  <img src={rightArrow} alt="Right Arrow" />
              </ArrowButtons>
            }
        </CarouselWrapper>
    </CarouselContainer>
  )
}
