import { PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center gap-2 px-3 justify-between w-full">
        <div className="max-w-[400px] w-full">
          <Input placeholder="Search..." className="border-none w-full" />
        </div>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="flex items-center gap-2 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/80"
              >
                Add Item
                <PlusIcon />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
