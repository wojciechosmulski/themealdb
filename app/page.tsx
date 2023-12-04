import SearchSection from '@/components/SearchSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-bold text-3xl pb-3">
        TheMealDB API
      </h1>
      <div className="flex gap-3">
        <SearchSection />
      </div>
    </main>
  )
}
