import Button from './style'

interface GlobalButtonProps {
  text?: string
  $isNavy?: boolean
  $width?: number
  onClick?: (e: React.MouseEvent) => void
}

const GlobalButton = ({ text, ...rest }: GlobalButtonProps) => {
  return <Button {...rest}>{text || '취소'}</Button>
}

export default GlobalButton
