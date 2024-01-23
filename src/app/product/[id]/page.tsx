import Product from '../_components/Product'
import { getProduct } from '@/api/products'
import { Product as ProductRes } from '@/utils/types'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id
  const { data }: ProductRes = await getProduct(id)

  return (
    <main className='mt-20 flex flex-col items-center justify-center gap-5 lg:mt-0 lg:h-svh lg:flex-row-reverse lg:justify-evenly lg:px-8'>
      {data ? (
        <Product
          paramId={id}
          desc={data.attributes.desc}
          title={data.attributes.title}
          price={data.attributes.price}
          imgUrl={data.attributes.img.data.attributes.formats.large.url}
          imgAlt={data.attributes.img.data.attributes.formats.large.name}
          width={data.attributes.img.data.attributes.formats.large.width}
          height={data.attributes.img.data.attributes.formats.large.height}
          blurDataURL={data.attributes.img.data.attributes.formats.large.mime}
        />
      ) : (
        <Product />
      )}
    </main>
  )
}
