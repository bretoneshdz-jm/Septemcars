import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { cn } from "../shared/utils"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../Dialog/dialog"
import {
  InputGroup,
  InputGroupAddon,
} from "../InputGroup/input-group"
import { SearchIcon, CheckIcon } from "lucide-react"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground font-[family-name:var(--ds-typographyRolesBodyFamily)]",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="p-1 pb-0 font-[family-name:var(--ds-typographyRolesLabelFamily)]">
      <InputGroup className="h-8! rounded-lg! border-input/30 bg-input/30 shadow-[shadow:var(--ds-shadowLevelsNone)]! *:data-[slot=input-group-addon]:pl-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "w-full text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] outline-hidden disabled:cursor-not-allowed disabled:opacity-50 font-[family-name:var(--ds-typographyRolesLabelFamily)]",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="size-4 shrink-0 opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesBodyStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesBodyStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesBodyStepsSmLetterSpacing)]", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:[--ds-ui-fontSize-xs:var(--ds-typographyRolesBodyStepsSmFontSize)] **:[[cmdk-group-heading]]:[--ds-ui-lineHeight-xs:var(--ds-typographyRolesBodyStepsSmLineHeight)] **:[[cmdk-group-heading]]:[--ds-ui-letterSpacing-xs:var(--ds-typographyRolesBodyStepsSmLetterSpacing)] **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:[--ds-ui-fontWeight-medium:var(--ds-typographyRolesBodyStepsSmFontWeight)] **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground font-[family-name:var(--ds-typographyRolesLabelFamily)]",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-xs [--ds-ui-fontSize-xs:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-xs:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-xs:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] tracking-widest [--ds-ui-letterSpacing-widest:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] text-muted-foreground group-data-selected/command-item:text-foreground font-[family-name:var(--ds-typographyRolesLabelFamily)]",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
