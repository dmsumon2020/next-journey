interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <div>Product Details of {params.id} </div>;
}

// export default async function ProductDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const productId = (await params).id;

//   return <div>Product Details of {productId} </div>;
// }
