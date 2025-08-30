import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ButtonIcon({
  children,
  className,
  ariaLabel,
}: {
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn('rounded-full cursor-pointer', className)}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  )
}
