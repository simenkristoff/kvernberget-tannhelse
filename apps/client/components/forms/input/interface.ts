import { ControllerProps } from 'react-hook-form'

export interface InputProps extends Omit<ControllerProps, 'render'> {
  label?: string
  className?: string
}
