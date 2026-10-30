import { useId as useExampleId } from "react";
import { Button } from "../Button/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import { Input } from "../Input/input"
import { Label } from "../Label/label"

export function CardExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <Card className="w-full max-w-sm" {..._props}>
      <CardHeader>
        <CardTitle>{"Inicia sesión en tu cuenta"}</CardTitle>
        <CardDescription>
          {"Introduce tu correo para iniciar sesión en tu cuenta"}</CardDescription>
        <CardAction>
          <Button variant="link">{"Crear cuenta"}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor={exampleId + "-email"}>{"Correo electrónico"}</Label>
              <Input
                id={exampleId + "-email"}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor={exampleId + "-password"}>{"Contraseña"}</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  {"¿Has olvidado tu contraseña?"}</a>
              </div>
              <Input id={exampleId + "-password"} type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {"Iniciar sesión"}</Button>
        <Button variant="outline" className="w-full">
          {"Continuar con Google"}</Button>
      </CardFooter>
    </Card>
  )
}
