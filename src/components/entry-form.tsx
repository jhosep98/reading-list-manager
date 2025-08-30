'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

interface EntryFormProps {
  onClose?: () => void
  defaultValues?: {
    title: string
    category: string
    status: string
    author: string
    year: string
    notes: string
    rankingScore: string
  }
}

export function EntryForm({ onClose, defaultValues }: EntryFormProps) {
  const titleId = React.useId()
  const authorId = React.useId()
  const yearId = React.useId()
  const notesId = React.useId()
  const rankingScoreId = React.useId()

  const categories = [
    {
      name: 'Action',
      value: 'action',
    },
  ]

  const [formData, setFormData] = React.useState({
    title: '',
    category: '',
    status: 'to-read',
    author: '',
    year: '',
    notes: '',
    rankingScore: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast('Event has been created.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={titleId}>Title</Label>

        <Input
          id={titleId}
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value: string) =>
            setFormData((prev) => ({ ...prev, status: value }))
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="to-read">To Read</SelectItem>
            <SelectItem value="reading">Reading</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor={rankingScoreId}>Ranking Score (0-10)</Label>
        <Input
          id={rankingScoreId}
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={formData.rankingScore}
          placeholder="Rate from 0 to 10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={authorId}>Author</Label>
        <Input
          id={authorId}
          value={formData.author}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, author: e.target.value }))
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={yearId}>Year</Label>
        <Input
          id={yearId}
          type="number"
          value={formData.year}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, year: e.target.value }))
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={notesId}>Notes</Label>
        <Textarea
          id={notesId}
          value={formData.notes}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, notes: e.target.value }))
          }
          rows={3}
        />
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" className="flex-1">
          {defaultValues ? 'Update' : 'Add'}
        </Button>

        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
