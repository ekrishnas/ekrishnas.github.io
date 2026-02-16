export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-slate-400 text-sm">
          <p>© {currentYear} E Sai Krishna. All rights reserved.</p>
          <p className="mt-2">Crafted with <span className="text-cyan-400">♥</span> and built with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
