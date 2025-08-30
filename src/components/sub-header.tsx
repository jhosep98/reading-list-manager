import { FilterCombobox } from '@/components/filter-combobox'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function SubHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 sticky top-[64px] z-50 bg-background">
      <div className="flex items-center justify-between gap-2 px-3 w-full">
        <Tabs defaultValue="science" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="science">Science</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </Tabs>

        <FilterCombobox />
      </div>
    </header>
  )
}
