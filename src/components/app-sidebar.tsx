'use client'

import { BookOpen, Command, Laptop, ScreenShare, Video } from 'lucide-react'
import Link from 'next/link'
import type * as React from 'react'
import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'jhosep98',
    email: 'jhosep98@gmail.com',
    avatar: '/user.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/app',
      icon: Command,
    },
    {
      title: 'Books',
      url: '/app/books',
      icon: BookOpen,
    },
    {
      title: 'Movies',
      url: '/app/movies',
      icon: Video,
    },
    {
      title: 'Animes',
      url: '/app/animes',
      icon: Laptop,
    },

    {
      title: 'Websites',
      url: '/app/websites',
      icon: ScreenShare,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/app">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    Reading List Manager
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
