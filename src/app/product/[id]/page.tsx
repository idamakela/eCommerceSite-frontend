import Product from '@/components/Product'

export default function ProductPage({ params }: { params: { id: string } }) {
  console.log(params.id)

  return (
    <main className='mt-20 flex flex-col items-center justify-center gap-5 lg:mt-0 lg:h-svh lg:flex-row-reverse lg:justify-evenly lg:px-8'>
      <Product />
    </main>
  )
}
