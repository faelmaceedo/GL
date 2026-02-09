export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-black/5 py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-widest text-[#1A2B3C] border-2 border-[#C5A059] px-3 py-1">GL</a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-[#1A2B3C]">
          <a href="#sobre" className="hover:text-[#C5A059] transition-colors">Sobre</a>
          <a href="#livro" className="hover:text-[#C5A059] transition-colors">O Livro</a>
          <a href="#artigos" className="hover:text-[#C5A059] transition-colors">Artigos</a>
          <a href="https://wa.me/558699751892" className="text-[#C5A059]">Contato</a>
        </div>
      </nav>
    </header>
  );
}