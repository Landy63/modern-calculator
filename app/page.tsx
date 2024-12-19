import Calculator from '../components/calculator'

export default function Home() {
  return (
    <main className="w-full max-w-[95%] sm:max-w-sm mx-auto flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 mt-0">Just calcul</h1>
      <div className="w-full scale-110 origin-top transform scale-y-[1.02]">
        <Calculator />
      </div>
    </main>
  )
}

