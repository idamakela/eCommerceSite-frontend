import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

export const buttonVariants = cva(
  'transition duration-300 border-transparent uppercase disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled:
          'bg-black p-3 md:p-5 text-white hover:bg-white hover:text-black border-2 hover:border-black',
        underline: 'text-black border-b-2 hover:border-black',
        outline:
          'bg-none p-3 md:p-5 text-black border-2 border-black hover:bg-black hover:text-white disabled:bg-neutral-400 disabled:border-transparent',
        muted: 'bg-neutral-200 text-neutral-600 text-xs p-1 md:p-2 hover:text-black',
        ghost: 'text-black border-b-2',
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
