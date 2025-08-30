'use client'

import { Separator } from '@radix-ui/react-separator'
import { PlusIcon } from 'lucide-react'
import { EntryForm } from '@/components/entry-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 z-50 bg-background rounded-t-xl">
      <div className="flex items-center gap-2 px-4 justify-between w-full">
        <div className="flex items-center gap-2 w-full">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4 w-0.25 bg-border"
          />

          <div className="max-w-[400px] w-full">
            <Input placeholder="Search..." className="border-none" />
          </div>
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

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
              </DialogHeader>
              <EntryForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
