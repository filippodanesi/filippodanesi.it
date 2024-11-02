// src/middleware.ts
interface RequestContext {
    request: Request;
    redirect: (url: string, status?: number) => Response;
}

export function onRequest({ request, redirect }: RequestContext, next: () => Promise<Response>) {
    const url = new URL(request.url);

    // Gestione dei casi base
    if (
        url.pathname.endsWith('/') ||      // Ha già lo slash
        url.pathname.includes('.') ||      // File statici
        url.pathname === '' ||            // Root
        url.pathname === '/' ||           // Root con slash
        url.pathname.startsWith('/_')     // Route Vercel
    ) {
        return next();
    }

    // Applicare il redirect sia su vercel.app che sul dominio custom
    if (
        url.hostname.includes('vercel.app') ||
        url.hostname === 'serp-secrets.com' ||
        url.hostname === 'www.serp-secrets.com'
    ) {
        return redirect(`${url.pathname}/${url.search}`, 301);
    }

    return next();
}