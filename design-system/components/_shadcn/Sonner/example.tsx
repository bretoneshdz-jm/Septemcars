import { Toaster } from "./sonner";
import { useRef as officialExampleUseRef, useEffect as officialExampleUseEffect, useId as officialExampleUseId } from "react";
import { toast as officialExampleToast } from "sonner"

import { Button } from "../Button/button"

function SonnerExampleContent(_props: Record<string, unknown> = {}) {
  const officialExampleToastTrigger = officialExampleUseRef<HTMLButtonElement>(null);
  const officialExampleShown = officialExampleUseRef(new Set<string | number>());
  const officialExampleToasterId = String(_props.officialExampleToasterId);
  const officialExampleCall = (call: (...args: never[]) => unknown, args: unknown[]) => {
    const options = { ...Object(args[1]), toasterId: officialExampleToasterId,
      ...(_props.open === true ? { duration: Infinity } : {}) };
    const result = Reflect.apply(call, undefined, [args[0], options, ...args.slice(2)]);
    if (typeof result === "string" || typeof result === "number") officialExampleShown.current.add(result);
    return result;
  };
  const toast = new Proxy(officialExampleToast, {
    apply: (target, _this, args) => officialExampleCall(target, args),
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver);
      return ["success", "info", "warning", "error", "loading", "message", "promise", "custom"].includes(String(key))
        ? (...args: unknown[]) => officialExampleCall(value, args) : value;
    },
  });
  officialExampleUseEffect(() => {
    if (_props.open === true) officialExampleToastTrigger.current?.click();
    const shown = officialExampleShown.current;
    return () => { for (const id of shown) officialExampleToast.dismiss(id); shown.clear(); };
  }, [_props.open]);
  return (
    <Button ref={officialExampleToastTrigger}
      variant="outline"
      onClick={() =>
        toast("El evento se ha creado", {
          description: "Domingo, 3 de diciembre de 2023, a las 9:00",
          action: {
            label: "Deshacer",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      {"Mostrar aviso"}</Button>
  )
}

export function SonnerExample(props: Record<string, unknown> = {}) {
  const id = officialExampleUseId();
  return <><SonnerExampleContent {...props} officialExampleToasterId={id} /><Toaster id={id} theme={props.theme === "dark" ? "dark" : "light"} /></>;
}
