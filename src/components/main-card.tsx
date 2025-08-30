import { Edit, Share2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import type React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { ButtonIcon } from './button-icon'
import { EntryForm } from './entry-form'

interface MainCardProps {
  title: string
  description: string
  image?: string
  tag: string
}

export function MainCard({
  title,
  description,
  className,
  image,
  tag,
  ...props
}: React.ComponentProps<'div'> & MainCardProps) {
  return (
    <Card className={cn('@container/card', className)} {...props}>
      <div className="px-6">
        <div className="relative aspect-video overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover w-full"
            />
          ) : (
            <Skeleton className="bg-muted/50 h-full w-full rounded-xl" />
          )}

          <div className="absolute z-10 flex gap-2 items-center top-2 right-2">
            <Dialog>
              <DialogTrigger asChild>
                <ButtonIcon
                  ariaLabel="Edit"
                  className="bg-accent/70 hover:bg-accent/60"
                >
                  <Edit />
                </ButtonIcon>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit entry</DialogTitle>
                </DialogHeader>
                <EntryForm />
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <ButtonIcon
                  ariaLabel="Delete"
                  className="bg-destructive/70 hover:bg-destructive/60"
                >
                  <Trash2 />
                </ButtonIcon>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>

      <CardContent>
        <Badge className="rounded-full mb-0.5 bg-transparent text-sidebar-primary px-0 text-sm">
          {tag}
        </Badge>

        <CardTitle className="text-2xl mb-0.5 text-balance">{title}</CardTitle>

        <CardDescription className="text-pretty line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          className="w-full bg-primary text-primary-foreground"
        >
          Share link
          <Share2 className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
