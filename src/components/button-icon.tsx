import { Button } from '@/components/ui/button'

export function ButtonIcon({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-10 rounded-full cursor-pointer"
    >
      {children}
    </Button>
  )
}
