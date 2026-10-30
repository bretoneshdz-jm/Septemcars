import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./tabs"

export function TabsExample(_props: Record<string, unknown> = {}) {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">{"Resumen"}</TabsTrigger>
        <TabsTrigger value="analytics">{"Estadísticas"}</TabsTrigger>
        <TabsTrigger value="reports">{"Informes"}</TabsTrigger>
        <TabsTrigger value="settings">{"Ajustes"}</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>{"Resumen"}</CardTitle>
            <CardDescription>
              {"Consulta tus métricas principales y la actividad reciente. Sigue el progreso de todos tus proyectos activos."}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {"Tienes 12 proyectos activos y 3 tareas pendientes."}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>{"Estadísticas"}</CardTitle>
            <CardDescription>
              {"Consulta las métricas de rendimiento y participación. Sigue las tendencias e identifica oportunidades de crecimiento."}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {"Las visitas a páginas han aumentado un 25 % respecto al mes pasado."}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>{"Informes"}</CardTitle>
            <CardDescription>
              {"Genera y descarga informes detallados. Exporta los datos en distintos formatos para analizarlos."}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {"Tienes 5 informes listos para exportar."}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>{"Ajustes"}</CardTitle>
            <CardDescription>
              {"Gestiona las preferencias y opciones de tu cuenta. Personaliza la experiencia según tus necesidades."}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {"Configura las notificaciones, la seguridad y los temas."}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
