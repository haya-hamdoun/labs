import Departments from '@/components/departments'

export default async function HomePage() {
  const response = await fetch('http://localhost:3000/api', { cache: 'no-store' })
  const departments = await response.json()

  return (
    <main>
      <Departments departments={departments} />
    </main>
  )
}
