// app/books/[id]/page.tsx

interface PageProps {
  params: {
    id: string;
  };
}

// Metadata function
export async function generateMetadata({ params }: PageProps) {
  const { id } = params;
  return {
    title: `${id} - Buy Now`,
    description: `This product is very good: ${id}`,
  };
}

// Server Component
export default async function Books({ params }: PageProps) {
  const { id } = params;

  // Optional: Fetch product data here too
  // const product = await fetch(...)

  return <div>This is Book Page {id}</div>;
}
