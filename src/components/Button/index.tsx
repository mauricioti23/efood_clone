import styled from 'styled-components'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

const Base = styled.button<Required<Pick<Props, 'variant'>>>`
  appearance: none;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: 1;
  transition: transform 0.02s ease, filter 0.2s ease;
  ${({ variant, theme }) =>
    variant === 'ghost'
      ? `background: transparent; border: 1px solid ${theme.colors.border};`
      : `background: ${theme.colors.primary}; color: white;`}

  &:active {
    transform: translateY(1px);
  }
`

export default function Button({
  variant = 'primary',
  children,
  ...rest
}: Props) {
  return (
    <Base variant={variant} {...rest}>
      {children}
    </Base>
  )
}
