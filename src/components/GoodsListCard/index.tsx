import {
  Container,
  GoodsListCardContainer,
  BedgeContainer,
  GoodsInfoContainer,
} from './style'

import CardBedge from '@components/CardBedge'

const GoodsListCard = () => {
  return (
    <Container>
      <div>
        <img
          src='https://placehold.co/55x55'
          alt='ㅇㅁㄴㄹ'
        />
        <GoodsListCardContainer>
          <div>
            <BedgeContainer>
              <div>
                <CardBedge text='모자' />
                <CardBedge text='NC' />
              </div>
              <CardBedge text='거래중' />
            </BedgeContainer>
            <GoodsInfoContainer>
              <p>NC 다이노스 배틀크러쉬 모자</p>
              <p>25,000원</p>
            </GoodsInfoContainer>
          </div>
        </GoodsListCardContainer>
      </div>
      <button>후기 보내기</button>
    </Container>
  )
}

export default GoodsListCard
