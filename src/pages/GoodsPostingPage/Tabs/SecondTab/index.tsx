import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { LocationSearchSection, MapSection, SearchResult } from './style'

import ResultCard from './ResultCard'

const SecondTab = () => {
  return (
    <>
      <QuestionSection>
        <label htmlFor='goods'>거래장소</label>
        <LocationSearchSection>
          <input
            id='goods'
            type='text'
          />
          <SearchResult>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </SearchResult>
        </LocationSearchSection>
      </QuestionSection>
      <MapSection>
        <p>거래할 위치를 선택해주세요</p>
      </MapSection>
    </>
  )
}

export default SecondTab
