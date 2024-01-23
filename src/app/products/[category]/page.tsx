import ProductCard from '../_components/ProductCard'
import { Products } from '@/utils/types'

// TODO: pagination
// TODO: error handling - toaster?
// TODO: loading state - skeleton?

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { subcategory: string }
}) {
  const URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
  const endpoint = `/api/${
    params.category === 'products' ? params.category : `products/custom/${params.category}`
  }/${searchParams.subcategory ? searchParams.subcategory : ''}?populate[0]=img`

  const res = await fetch(URL + endpoint)
  const data: Products = await res.json()

  return (
    <main className='mb-7 mt-20 p-3 md:mb-8 md:p-8'>
      <div className='flex items-center'>
        <h1 className='font-header text-xl font-semibold uppercase md:text-2xl'>
          {params.category}
        </h1>
        {searchParams.subcategory && (
          <h2 className='text-xs font-medium uppercase'>
            <span className='px-2'>/</span>
            {searchParams.subcategory}
          </h2>
        )}
      </div>
      <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data
          ? data.data.map((item) => (
              <ProductCard
                key={item.id}
                slug={item.id.toString()}
                title={item.attributes.title}
                price={item.attributes.price}
                imgUrl={item.attributes.img.data.attributes.formats.small.url}
                imgName={item.attributes.img.data.attributes.formats.small.name}
                blurDataURL={item.attributes.img.data.attributes.formats.small.mime}
                height={item.attributes.img.data.attributes.formats.small.height}
                width={item.attributes.img.data.attributes.formats.small.width}
              />
            ))
          : Array.from({ length: 10 }, (_, index) => <ProductCard key={index} />)}
      </div>
    </main>
  )
}
