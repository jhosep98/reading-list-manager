import { EntriesList } from '@/components/entries-list'
import { Header } from '@/components/header'
import { SubHeader } from '@/components/sub-header'

type Props = {
  params: Promise<{ section: string }>
}

export async function generateMetadata({ params }: Props) {
  const { section } = await params

  return {
    title: section,
    description: section,
  }
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params

  console.log(section)

  return (
    <>
      <Header />

      <SubHeader />

      <div className="@container/main">
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 py-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <EntriesList />
        </div>
      </div>
    </>
  )
}
