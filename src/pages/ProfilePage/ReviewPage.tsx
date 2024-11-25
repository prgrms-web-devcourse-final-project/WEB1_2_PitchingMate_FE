import PillButtonList from '@components/PillButtonList'
import { ReviewBox, ReviewButtonWrap, ReviewLinkBox, ReviewWrap } from './style'
import { Link } from 'react-router-dom'
import LinkIcon from '@assets/icon/link.svg?react'

const ReviewPage = () => {
  return (
    <section>
      <ReviewButtonWrap>
        <PillButtonList
          buttons={[
            { id: 'goods', text: '굿즈거래 후기', disabled: false },
            { id: 'mate', text: '메이트 후기', disabled: false },
          ]}
          mode='radio'
          defaultSelected='goods'
        />
      </ReviewButtonWrap>
      <ReviewWrap>
        <ReviewBox>
          <span>좋았어요!</span>
          <p>
            물건 너무 이브고 보존상태가 좋아요
            <br />
            친절하시구요 ^^*
          </p>
          <em>볼빨간사촌형 · 2달 전</em>
          <ReviewLinkBox>
            <Link to={'/'}>
              <div>
                <span>굿즈거래</span>
                <i>쁘띠 이대호 피규어 & 쁘띠 이대호 빠따</i>
              </div>
              <LinkIcon />
            </Link>
          </ReviewLinkBox>
        </ReviewBox>

        <ReviewBox>
          <span>별로에요.</span>
          <p>
            이게 사람입니까
            <br />
            두번 다시는 같이 안봅니다
          </p>
          <em>볼빨간사촌형 · 2달 전</em>
          <ReviewLinkBox>
            <Link to={'/'}>
              <div>
                <span>메이트 후기</span>
                <i>
                  8일 기아 타이거즈 홈경기 보러가실분 구합니다. 8일 기아
                  타이거즈 홈경기 보러가실분 구합니다.
                </i>
              </div>
              <LinkIcon />
            </Link>
          </ReviewLinkBox>
        </ReviewBox>

        <ReviewBox>
          <span>최고에요!</span>
          <p>
            물건 너무 이브고 보존상태가 좋아요
            <br />
            친절하시구요 ^^*
          </p>
          <em>볼빨간사촌형 · 2달 전</em>
          <ReviewLinkBox>
            <Link to={'/'}>
              <div>
                <span>굿즈거래</span>
                <i>쁘띠 이대호 피규어 & 쁘띠 이대호 빠따</i>
              </div>
              <LinkIcon />
            </Link>
          </ReviewLinkBox>
        </ReviewBox>

        <ReviewBox>
          <span>별로에요.</span>
          <p>
            이게 사람입니까
            <br />
            두번 다시는 같이 안봅니다
          </p>
          <em>볼빨간사촌형 · 2달 전</em>
          <ReviewLinkBox>
            <Link to={'/'}>
              <div>
                <span>메이트 후기</span>
                <i>
                  8일 기아 타이거즈 홈경기 보러가실분 구합니다. 8일 기아
                  타이거즈 홈경기 보러가실분 구합니다.
                </i>
              </div>
              <LinkIcon />
            </Link>
          </ReviewLinkBox>
        </ReviewBox>
      </ReviewWrap>
    </section>
  )
}

export default ReviewPage
