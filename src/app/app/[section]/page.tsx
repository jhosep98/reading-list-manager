import { Header } from '@/components/header'
import { MainCard } from '@/components/main-card'
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
          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />

          <MainCard
            title="Attack on Titan"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="Completed"
          />

          <MainCard
            title="Naruto"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rem atque, dolorum obcaecati nostrum culpa similique."
            tag="In progress"
          />
        </div>
      </div>
    </>
  )
}
