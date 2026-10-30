import * as React from "react";
import {
  Select as SelectRoot, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel
} from "./_shadcn/Select/select";
export type SelectOption = { value: string; label: React.ReactNode; disabled?: boolean };
export type SelectProps = React.ComponentProps<typeof SelectRoot> & {
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
  ref?: React.Ref<HTMLButtonElement>;
  size?: "default" | "sm";
  placeholder?: string;
  groupLabel?: React.ReactNode;
  options?: readonly SelectOption[];
  triggerProps?: React.ComponentProps<typeof SelectTrigger>;
  contentProps?: React.ComponentProps<typeof SelectContent>;
};
export function Select({
  className, ref, id, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, size = "default",
  placeholder = undefined,
  groupLabel = undefined,
  options = [], triggerProps, contentProps, children, ...props
}: SelectProps) {
  return (
    <SelectRoot {...props}>
      {children ?? <>
        <SelectTrigger size={size} className={className} ref={ref}
          id={id} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} {...triggerProps}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent  {...contentProps}>
          <SelectGroup >
            {groupLabel != null && <SelectLabel >{groupLabel}</SelectLabel>}
            {options.map(option => (
              <SelectItem  key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </>}
    </SelectRoot>
  );
}
export default Select;
export * from "./_shadcn/Select/select";
export {SelectExample} from "./_shadcn/Select/example";
