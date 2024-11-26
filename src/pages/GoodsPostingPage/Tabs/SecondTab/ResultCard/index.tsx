import CardBedge from '@components/CardBedge'
import { SearchResultItem } from './style'

const ResultCard = () => {
  return (
    <SearchResultItem>
      <h2>명동교자 이태원점</h2>
      <p>서울 용산구 이태원로 15길 1</p>
      <div>
        <CardBedge text='지번' />
        <p>서울 용산구 이태원동 181-8</p>
      </div>
    </SearchResultItem>
  )
}

export default ResultCard
