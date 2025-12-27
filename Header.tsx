import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kasparro
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/platform" className="hover:text-blue-600 transition">
            Platform
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Button asChild>
            <Link href="/app/dashboard">Dashboard</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}