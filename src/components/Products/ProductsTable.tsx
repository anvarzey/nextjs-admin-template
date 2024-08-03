import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import DeleteModal from '../Shared/DeleteModal'
import EditProductModal from './EditProductModal'

export default function ProductsTable () {
  return (
    <Card>
      <CardContent className='pt-6'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-inherit'>
              <TableHead>
                Image
              </TableHead>
              <TableHead>
                Name
              </TableHead>
              <TableHead>
                Category
              </TableHead>
              <TableHead>
                Price
              </TableHead>
              <TableHead>
                Status
              </TableHead>
              <TableHead>
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-inherit'>
              <TableCell>
                product image
              </TableCell>
              <TableCell>
                product name
              </TableCell>
              <TableCell>
                product category
              </TableCell>
              <TableCell>
                10.50€
              </TableCell>
              <TableCell>
                <Badge className='bg-success text-zinc-100 hover:bg-success'>
                  Available
                </Badge>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  {/* <Button variant='ghost' size='icon' className='text-primary hover:text-success hover:bg-inherit'>
                    <PencilIcon className='w-5 h-5' />
                  </Button> */}
                  <EditProductModal />
                  {/* <Button variant='ghost' size='icon' className='text-error hover:bg-inherit hover:text-error-hover'>
                    <TrashIcon className='w-5 h-5' />
                  </Button> */}
                  <DeleteModal />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
