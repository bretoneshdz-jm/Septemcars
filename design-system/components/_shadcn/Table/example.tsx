import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Pagada",
    totalAmount: "250,00 $",
    paymentMethod: "Tarjeta de crédito",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pendiente",
    totalAmount: "150,00 $",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Sin pagar",
    totalAmount: "350,00 $",
    paymentMethod: "Transferencia bancaria",
  },
  {
    invoice: "INV004",
    paymentStatus: "Pagada",
    totalAmount: "450,00 $",
    paymentMethod: "Tarjeta de crédito",
  },
  {
    invoice: "INV005",
    paymentStatus: "Pagada",
    totalAmount: "550,00 $",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pendiente",
    totalAmount: "200,00 $",
    paymentMethod: "Transferencia bancaria",
  },
  {
    invoice: "INV007",
    paymentStatus: "Sin pagar",
    totalAmount: "300,00 $",
    paymentMethod: "Tarjeta de crédito",
  },
]

export function TableExample(_props: Record<string, unknown> = {}) {
  return (
    <Table>
      <TableCaption>{"Una lista de tus últimas facturas."}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{"Factura"}</TableHead>
          <TableHead>{"Estado"}</TableHead>
          <TableHead>{"Método"}</TableHead>
          <TableHead className="text-right">{"Importe"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{"2.500,00 $"}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
