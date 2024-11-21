import { Bedge } from './style'

const CardBedge = ({ text }: { text?: string }) => {
  return <Bedge>{text || '벳지'}</Bedge>
}

export default CardBedge
