import SimpleCard from "./components/Card/SimpleCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-2 lg:grid-cols-2">
        <SimpleCard title="About me" description="blah blah" />
      </div>
    </main>
  )
}