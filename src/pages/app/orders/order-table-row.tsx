import { ArrowRight, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        9db2eed3-aa06-31fe7f01513d
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell></TableCell>
      <TableCell className="font-medium">Eduardo Ronchi de Araujo</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="h-2 w-2 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="destructive" size="sm">
          <X className="h-2 w-2 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
