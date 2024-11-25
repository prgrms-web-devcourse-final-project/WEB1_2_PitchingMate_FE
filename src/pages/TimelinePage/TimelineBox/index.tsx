import {
  TimelineBottomBox,
  TimelineBottomImage,
  TimelineBoxTopText,
  TimelineBoxWrap,
  TimelineColorBox,
  TimelineReviewBox,
  TimelineReviewer,
  TimelineReviewInner,
  TimelineReviewWrap,
  TimelineRotate,
  TimelineSendReview,
} from '../style'

import Rotate from '@assets/icon/down_white.svg?react'
import Arena from '@assets/default/area.png'
import Worst from '@assets/character/character-worst.svg?react'
import Normal from '@assets/character/character-normal.svg?react'
import Best from '@assets/character/character-best.svg?react'

const TimelineBox = () => {
  return (
    <TimelineBoxWrap>
      <h2>2024.11.13</h2>
      <TimelineColorBox>
        <TimelineBoxTopText>
          <div>
            <span>2024년 11월 14일 18:00</span>
            <h3>삼성 VS KT</h3>
            <span>대구 라이온스 파크</span>
          </div>
          <TimelineRotate>
            <Rotate />
          </TimelineRotate>
        </TimelineBoxTopText>
        <TimelineBottomBox>
          <TimelineBottomImage
            src={Arena}
            alt='임시'
          />
          <h2>같이 본 메이트</h2>
          <TimelineReviewWrap>
            <TimelineReviewBox>
              <div>
                <TimelineReviewer>김아무개</TimelineReviewer>
                <TimelineReviewInner></TimelineReviewInner>
              </div>
              <div>
                <TimelineSendReview>후기 보내기</TimelineSendReview>
              </div>
            </TimelineReviewBox>

            <TimelineReviewBox>
              <div>
                <TimelineReviewer>김아무개</TimelineReviewer>
                <TimelineReviewInner>
                  김아무개에 대한 평가입니다 평가절하
                  <br />
                  김애무개에 대한 평가입니다 평가절하
                </TimelineReviewInner>
              </div>
              <div>
                <Normal />
              </div>
            </TimelineReviewBox>

            <TimelineReviewBox>
              <div>
                <TimelineReviewer>김아무개</TimelineReviewer>
                <TimelineReviewInner>
                  김아무개에 대한 평가입니다 평가절하
                  <br />
                  김애무개에 대한 평가입니다 평가절하
                  <br />
                  김애무개에 대한 평가입니다 평가절하
                </TimelineReviewInner>
              </div>
              <div>
                <Best />
              </div>
            </TimelineReviewBox>

            <TimelineReviewBox>
              <div>
                <TimelineReviewer>김아무개</TimelineReviewer>
                <TimelineReviewInner>
                  김아무개에 대한 평가입니다 평가절하
                  <br />
                  김애무개에 대한 평가입니다 평가절하
                </TimelineReviewInner>
              </div>
              <div>
                <Worst />
              </div>
            </TimelineReviewBox>
          </TimelineReviewWrap>
        </TimelineBottomBox>
      </TimelineColorBox>
    </TimelineBoxWrap>
  )
}

export default TimelineBox
