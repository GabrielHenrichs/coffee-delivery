import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import cardImage from '../../../../assets/card-image.svg'
import { CardTitle, CardContainer, CardFooter, Tags } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Product } from '../../../../reducers/order/reducer'

interface CoffeeCardProps {
  product: Product
}

const cardFormValidationSchema = zod.object({
  product: zod.object({
    id: zod.number(),
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    tags: zod.array(zod.string()),
  }),
  quantity: zod.number().min(1, 'A quantidade precisa ser de no mínimo 1 item'),
})

type CoffeeCardFormData = zod.infer<typeof cardFormValidationSchema>

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { addItemToCart } = useContext(OrderContext)

  const cardForm = useForm<CoffeeCardFormData>({
    resolver: zodResolver(cardFormValidationSchema),
    defaultValues: {
      product,
      quantity: 1,
    },
  })

  const { register, handleSubmit, reset } = cardForm

  function handleAddNewItemToCart(data: CoffeeCardFormData) {
    addItemToCart(data)
    reset()
  }

  return (
    <CardContainer>
      <img src={cardImage} alt="Xícara de café" />

      <Tags>
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <CardTitle>
        <strong>{product.title}</strong>
        <span>{product.description}</span>
      </CardTitle>

      <CardFooter>
        <span>
          R$ <strong>{product.price.toFixed(2).replace('.', ',')}</strong>
        </span>
        <form onSubmit={handleSubmit(handleAddNewItemToCart)}>
          <FormProvider {...cardForm}>
            <input
              type="number"
              id="quantity"
              min={1}
              {...register('quantity', { valueAsNumber: true })}
            />
            <button type="submit">
              <ShoppingCart size={22} weight="fill" />
            </button>
          </FormProvider>
        </form>
      </CardFooter>
    </CardContainer>
  )
}
