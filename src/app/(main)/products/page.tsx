import ProductsTable from '@/components/Products/ProductsTable'
import Title from '@/components/Shared/Title'

export default function ProductsPage () {
  return (
    <main className='px-8'>
      <div className='mb-6'>
        <Title>
          Products
        </Title>
      </div>
      <ProductsTable />
    </main>
  )
}
