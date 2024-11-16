export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
    <footer className="bg-slate-600 py-10">
      <div className="container mx-auto px-2 text-white">
        <a href="https://api.doc.govt.nz/" className="text-lg font-semibold hover:text-slate-200">
          Api from Doc NZ
        </a>
        <p className="text-sm text-slate-300">
          &copy; 2024 We Hike. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
  )
}