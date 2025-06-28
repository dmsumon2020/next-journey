interface MyProps {
  params: {
    slug?: string[];
  };
}

export default function Page({ params }: MyProps) {
  const slug = params.slug ?? [];

  if (slug.length === 2) {
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  } else if (slug.length === 1) {
    return <div>Viewing docs for feature {slug[0]}</div>;
  }

  return <div>Docs Home Page</div>;
}
