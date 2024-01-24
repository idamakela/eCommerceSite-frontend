'use client'

import * as z from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

import Button from '@/components/Button'
import { useCheckout } from '@/hooks/useCheckout'

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
})

const CheckoutForm = () => {
  const { products, images, resetProducts, resetImages } = useCheckout()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset()
    resetProducts()
    resetImages()

    console.log(values)
    console.log(images)

    toast.message('✅ Order created', {
      description: "Keep an eye out in your browser's console!",
    })
  }

  // TODO: order easter egg

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='hidden'>First name</FormLabel>
                <FormControl>
                  <Input placeholder='First name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='hidden'>Last name</FormLabel>
                <FormControl>
                  <Input placeholder='Last name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='hidden'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={products.length === 0}
            variant='filled'
            type='submit'
            className='mt-10 w-full'
          >
            Checkout - £ 00.00
          </Button>
        </form>
      </Form>
    </>
  )
}

export default CheckoutForm
