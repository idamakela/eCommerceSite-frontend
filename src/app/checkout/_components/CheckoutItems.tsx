'use client'

import useSWR from 'swr'
import { stringify } from 'qs'
import { useEffect, useState } from 'react'

import CheckoutItem from './CheckoutItem'
import Button from '@/components/Button'
import { Products } from '@/utils/types'
import { useCheckout } from '@/hooks/useCheckout'
import { productsEndpoint as cacheKey } from '@/api/endpoints'
import { getCheckoutProducts as fetcher } from '@/api/products'

// TODO: remove item from checkout
// TODO: no items in checkout fallback
// TODO: error handling

const CheckoutItems = () => {
  const [query, setQuery] = useState<string>('')
  const { products, reset, removeProduct } = useCheckout()
  const { data: { data = [] } = {}, mutate } = useSWR<Products>(
    query ? cacheKey : null,
    () => fetcher(query),
    { revalidateOnMount: false, revalidateOnFocus: false },
  )

  const handleRemoveItem = (id: string) => {
    removeProduct(id)
    mutate()
  }

  useEffect(() => {
    const getQuery = () => {
      if (products.length >= 1 || products.length === 1) {
        const query = stringify(
          {
            filters: {
              id: {
                $in: products,
              },
            },
            populate: ['img'],
          },
          { encodeValuesOnly: true },
        )

        if (query) setQuery(query)
      }
    }

    getQuery()
  }, [products])

  useEffect(() => {
    mutate()
  }, [mutate, query])

  return (
    <>
      {data?.map((item) => (
        <CheckoutItem
          key={item.id}
          id={item.id.toString()}
          title={item.attributes.title}
          price={item.attributes.price}
          handleOnClick={handleRemoveItem}
          imgUrl={item.attributes.img.data.attributes.formats.small.url}
          imgAlt={item.attributes.img.data.attributes.formats.small.name}
          height={item.attributes.img.data.attributes.formats.small.height}
          width={item.attributes.img.data.attributes.formats.small.width}
        />
      ))}

      {/* Should this even be here? - if yes, needs a onClick function
      {Array.from({ length: 3 }, (_, index) => (
        <CheckoutItem key={index} />
      ))} */}

      {products.length !== 0 && (
        <Button
          className='my-4 w-fit self-end'
          variant={'underline'}
          onClick={() => {
            reset()
            setQuery('')
          }}
        >
          Empty cart
        </Button>
      )}
    </>
  )
}

export default CheckoutItems
