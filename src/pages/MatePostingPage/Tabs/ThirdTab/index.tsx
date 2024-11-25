import { QuestionSection } from '../FirstTab/style'

import { Container, ImgLabel, Input, Textarea } from './style'

import AddImgIcon from '@assets/icon/image_plus.svg?react'

const ThirdTab = () => {
  return (
    <Container>
      <QuestionSection>
        <label htmlFor='category-img'>대표 사진</label>
        <ImgLabel>
          <AddImgIcon
            width={40}
            height={40}
          />
          <input
            type='file'
            accept='image/*'
            id='category-img'
          />
        </ImgLabel>
      </QuestionSection>
      <QuestionSection>
        <label htmlFor='title'>모집명</label>
        <Input
          type='text'
          id='title'
        />
      </QuestionSection>
      <QuestionSection>
        <label htmlFor='description'>모집 설명</label>
        <Textarea id='description' />
      </QuestionSection>
    </Container>
  )
}

export default ThirdTab
