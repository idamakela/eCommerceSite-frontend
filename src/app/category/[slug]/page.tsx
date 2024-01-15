import Product from '@/components/Product'

const CategoryPage = () => {
  return (
    <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {Array.from({ length: 10 }, (_, index) => (
        <Product key={index} />
      ))}
    </div>
  )
}

export default CategoryPage
