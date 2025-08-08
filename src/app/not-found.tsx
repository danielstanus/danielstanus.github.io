// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página No Encontrada</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
