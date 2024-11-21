import { Link } from 'react-router-dom'
import {
  CardBedgeWrap,
  CardContainer,
  CardImage,
  CardImageWrap,
  CardPrice,
  CardTextWrap,
  CardTitle,
  PlaceholderWrap,
} from './style'
import { useState } from 'react'
import CardBedge from '@components/CardBedge'
import Placeholder from '@assets/placeholder.svg?react'

const GoodsCard = () => {
  const [hasImg, setHasImg] = useState(true)

  return (
    <Link
      to='/'
      style={{
        display: 'block',
        width: 'calc(50% - 10px)',
      }}
    >
      <CardContainer>
        <CardImageWrap>
          {hasImg ? (
            <CardImage
              src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSvPJq54lEjicoWC9rOC01vDWK13QxCvbfO5SP-56bJ4angsTsj0j3wb1d9HVDa-Ba0xK12PuW97Xdpt5g'
              alt='일단 임시'
            />
          ) : (
            <PlaceholderWrap>
              <Placeholder />
            </PlaceholderWrap>
          )}
        </CardImageWrap>
        <CardTextWrap>
          <CardTitle>
            NC 다이노스 배틀크러쉬 모자 NC 다이노스 배틀크러쉬 모자
          </CardTitle>
          <CardBedgeWrap>
            <CardBedge />
            <CardBedge />
          </CardBedgeWrap>
          <CardPrice>40,000원</CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  )
}

export default GoodsCard
