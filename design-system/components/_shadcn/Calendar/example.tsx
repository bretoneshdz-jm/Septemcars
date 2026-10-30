import {es as exampleCalendarLocale} from "date-fns/locale";
"use client"

import * as React from "react"

import { Calendar } from "./calendar"

export function CalendarExample(_props: Record<string, unknown> = {}) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar locale={exampleCalendarLocale} labels={exampleCalendarLabels}
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  )
}

const exampleCalendarLabels={labelNav:()=>"Navegación del calendario",labelNext:()=>"Ir al mes siguiente",labelPrevious:()=>"Ir al mes anterior",labelMonthDropdown:()=>"Elegir mes",labelYearDropdown:()=>"Elegir año",labelDayButton:(date:Date,modifiers:{today?:boolean;selected?:boolean})=>[modifiers.today?"Hoy":"",new Intl.DateTimeFormat("es",{dateStyle:"full"}).format(date),modifiers.selected?"seleccionado":""].filter(Boolean).join(", ")};
