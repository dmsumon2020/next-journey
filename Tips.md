## Catch all segments

[...] = Catch-all (e.g. /docs/guide/setup)

[[...]] = Optional catch-all (also matches /docs)

## custom 404 page

not-found.tsx

## to programmatically generate not found page

call the notFound() function

Example:

if (condition) {
notFound();
}

## usePathname is a client-side hook from next/navigation that returns the current URL path (excluding the domain and query params).

const pathname = usePathname();

## to prevent a directory inside the app directory from becoming a route just put underscore before it

Ex: \_lib [It has become a private folder]
