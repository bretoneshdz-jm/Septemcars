import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

export function AccordionExample(_props: Record<string, unknown> = {}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className="max-w-lg"
    >
      <AccordionItem value="shipping">
        <AccordionTrigger>{"¿Qué opciones de envío ofrecéis?"}</AccordionTrigger>
        <AccordionContent>
          {"Ofrecemos envío estándar (5 a 7 días), urgente (2 a 3 días) y al día siguiente. Los pedidos internacionales tienen envío gratuito."}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>{"¿Cuál es vuestra política de devoluciones?"}</AccordionTrigger>
        <AccordionContent>
          {"Aceptamos devoluciones en un plazo de 30 días. Los artículos deben estar sin usar y en su embalaje original. Los reembolsos se tramitan en 5 a 7 días laborables."}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>{"¿Cómo puedo contactar con soporte?"}</AccordionTrigger>
        <AccordionContent>
          {"Contacta por correo, chat o teléfono. Respondemos en un plazo de 24 horas en días laborables."}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
