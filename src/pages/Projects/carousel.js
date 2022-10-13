import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ArrowButtons } from "./style.tw";
import leftArrow from "../../utils/img/carousel/icons8-left-64.png"
import rightArrow from "../../utils/img/carousel/icons8-right-64.png"

export function Carousel(props) {
  const {children} = props

  return (
    <CarouselContainer>
        <CarouselWrapper>
          <ArrowButtons>
              <img src={leftArrow} alt="Left Arrow" className="left-6" />
          </ArrowButtons>
          <CarouselContentWrapper>
            <CarouselContent>
              {children}
            </CarouselContent>
          </CarouselContentWrapper>
          <ArrowButtons>
              <img src={rightArrow} alt="Right Arrow"  />
          </ArrowButtons>
        </CarouselWrapper>
      </CarouselContainer>
  )
}
