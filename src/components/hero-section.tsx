import type { Variants } from 'motion/react'
import Link from 'next/link'
import { HeroHeader } from '@/components/landing-header'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as Variants

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-medium md:text-6xl"
              >
                Welcome to Reading List Manager
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
              >
                A place where you can keep track of your reading list.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12"
              >
                <div className="">
                  <Button
                    aria-label="submit"
                    size="lg"
                    className="rounded-(--radius)"
                    asChild
                  >
                    <Link href="/app">Get Started</Link>
                  </Button>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
