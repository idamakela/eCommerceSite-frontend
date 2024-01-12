import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

export const buttonVariants = cva(
  'p-3 md:p-5 transition duration-300 border-transparent uppercase',
  {
    variants: {
      variant: {
        filled: 'bg-black text-white hover:bg-white hover:text-black border-2 hover:border-black',
        ghost: 'text-black p-0 md:p-0 border-b-2 hover:border-black',
        outline: 'bg-none text-black border-2 border-black hover:bg-black hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  )
}

export default Button