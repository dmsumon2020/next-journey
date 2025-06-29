enum Language {
  En = "en",
  Fr = "fr",
  Es = "es",
}

const isValidLang = (value: unknown): value is Language => {
  return (
    typeof value === "string" &&
    Object.values(Language).includes(value as Language)
  );
};

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export default async function SearchPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { lang } = await searchParams;

  const validLang = isValidLang(lang) ? lang : Language.En;

  return (
    <div>
      SearchPage: The id is {id} and the Language is {validLang}
    </div>
  );
}
