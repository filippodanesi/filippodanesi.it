// src/middleware.ts

interface RequestContext {
    request: Request;
    redirect: (url: string, status?: number) => Response;
}

export function onRequest({ request, redirect }: RequestContext, next: () => Promise<Response>) {
    const url = new URL(request.url);

    // Aggiungiamo più controlli per evitare i redirect loop
    if (
        url.pathname.endsWith('/') ||        // già ha trailing slash
        url.pathname.includes('.') ||        // è un file
        url.pathname === '' ||              // è la homepage
        url.pathname === '/' ||             // è la homepage con slash
        url.pathname.startsWith('/_') ||    // è una route interna di Vercel
        url.pathname.startsWith('/api/') || // è un endpoint API
        url.host.includes('vercel.app')     // è un preview deployment
    ) {
        return next();
    }

    // Redirect con trailing slash preservando i query parameters
    return redirect(`${url.pathname}/${url.search}`, 308); // Usiamo 308 invece di 301
}