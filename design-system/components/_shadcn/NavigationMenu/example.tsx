import * as React from "react"
import type { AnchorHTMLAttributes } from "react"
const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "Una ventana que muestra contenido importante y espera una respuesta.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "Permite ver una vista previa del contenido de un enlace.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Muestra el avance de una tarea, normalmente mediante una barra de progreso.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Separa el contenido de forma visual o semántica.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "Un conjunto de secciones organizadas en pestañas que se muestran de una en una.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "Un panel que muestra información sobre un elemento al enfocarlo con el teclado o pasar el ratón por encima.",
  },
]

export function NavigationMenuExample(_props: Record<string, unknown> = {}) {
  return (
    <NavigationMenu defaultValue={_props.open === true ? "official-example-item-0" : undefined}>
      <NavigationMenuList>
        <NavigationMenuItem value="official-example-item-0">
          <NavigationMenuTrigger>{"Primeros pasos"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title={"Introducción"}>
                {"Componentes reutilizables creados con Tailwind CSS."}</ListItem>
              <ListItem href="/docs/installation" title={"Instalación"}>
                {"Instala las dependencias y organiza tu app."}</ListItem>
              <ListItem href="/docs/primitives/typography" title={"Tipografía"}>
                {"Estilos para títulos, párrafos, listas, etc."}</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="official-example-item-1" className="hidden md:flex">
          <NavigationMenuTrigger>{"Componentes"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="official-example-item-2">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">{"Documentación"}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
