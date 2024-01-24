//TODO
/* Empty checkout
 * Filled checkout - basket and checkout in the same? or different pages? condition to get to checkout (does next have build in functionality for that?)?
 */

import CheckoutForm from './_components/CheckoutForm'
import CheckoutItems from './_components/CheckoutItems'

export default function CheckoutPage() {
  return (
    <main className='mt-36 box-border flex min-h-screen flex-col px-4'>
      <div className='mb-20'>
        <h1 className='text-center font-header text-2xl font-medium uppercase md:py-4 md:text-4xl'>
          shopping cart
        </h1>
      </div>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 mb-5'>
        <div className='flex flex-col'>
          <h2 className='border-b-2 pb-2 uppercase'>items</h2>
          <CheckoutItems />
        </div>

        <div>
          <h2 className='mb-5 border-b-2 pb-2 uppercase'>checkout</h2>
          <CheckoutForm />
        </div>
      </div>
    </main>
  )
}
