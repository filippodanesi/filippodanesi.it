// src/middleware.ts

// Type definitions
interface RequestContext {
    request: Request;
    redirect: (url: string, status?: number) => Response;
}

export function onRequest({ request, redirect }: RequestContext, next: () => Promise<Response>) {
    const url = new URL(request.url);

    // Skip redirect for requests that:
    // 1. Already end with a trailing slash
    // 2. Have a file extension (e.g., .jpg, .css, .js)
    // 3. Are the homepage
    if (
        url.pathname.endsWith('/') ||
        url.pathname.includes('.') ||
        url.pathname === ''
    ) {
        return next();
    }

    // Redirect adding the trailing slash and preserving any query parameters
    // Status 301 indicates a permanent redirect (good for SEO)
    return redirect(`${url.pathname}/${url.search}`, 301);
}