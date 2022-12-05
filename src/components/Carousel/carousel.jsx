import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ArrowButtons } from "./style.tw";
import leftArrow from "../../utils/img/carousel/icons8-left-64.png"
import rightArrow from "../../utils/img/carousel/icons8-right-64.png"
import { useState, useEffect } from "react";


export function Carousel(props) {
  const {children} = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // define state for current item and total items
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

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
              <ArrowButtons onClick={prev} className="sm:left-0 lg:-left-20">
                  <img src={leftArrow} alt="Left Arrow" />
              </ArrowButtons>
            }
            <CarouselContentWrapper>
              <CarouselContent style={{transform: `translateX(-${currentIndex * 100}%)`}}>
              {children}
        </CarouselContent>
            </CarouselContentWrapper>
            {
              currentIndex < (length - 1) &&
              <ArrowButtons onClick={next} className="sm:right-0 lg:-right-20">
                  <img src={rightArrow} alt="Right Arrow" />
              </ArrowButtons>
            }
        </CarouselWrapper>
    </CarouselContainer>
  )
}
