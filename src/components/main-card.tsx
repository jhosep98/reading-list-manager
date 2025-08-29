import { Edit, Share2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import type React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ButtonIcon } from './button-icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

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
        <div className="relative aspect-square overflow-hidden">
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
            <ButtonIcon>
              <Edit />
            </ButtonIcon>

            <ButtonIcon>
              <Trash2 />
            </ButtonIcon>
          </div>
        </div>
      </div>

      <CardContent>
        <Badge className="rounded-full mb-0.5 bg-transparent text-primary px-0 text-sm">
          {tag}
        </Badge>

        <CardTitle className="text-2xl mb-0.5 text-balance">{title}</CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <Button variant="outline" className="w-full">
          Share link
          <Share2 className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
