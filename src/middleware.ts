// src/middleware.ts
interface RequestContext {
    request: Request;
    redirect: (url: string, status?: number) => Response;
}

export function onRequest({ request, redirect }: RequestContext, next: () => Promise<Response>) {
    const url = new URL(request.url);

    // Non fare redirect se:
    // - È già un URL con slash finale
    // - È un file statico
    // - È un asset di Vercel
    if (
        url.pathname.endsWith('/') ||
        url.pathname.includes('.') ||
        url.pathname.startsWith('/_vercel')
    ) {
        return next();
    }

    // Redirect 301 aggiungendo lo slash finale
    return redirect(`${url.pathname}/${url.search}`, 301);
}