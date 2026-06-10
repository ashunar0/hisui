import { Field as ArkField } from '@ark-ui/react/field'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

function Root({ className, ...props }: ComponentProps<typeof ArkField.Root>) {
  return (
    <ArkField.Root
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function Label({ className, ...props }: ComponentProps<typeof ArkField.Label>) {
  return (
    <ArkField.Label
      className={cn('text-sm font-medium text-neutral-700', className)}
      {...props}
    />
  )
}

export const Field = {
  Root,
  Label,
}
