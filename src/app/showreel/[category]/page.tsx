import Link from "next/link";
import { notFound } from "next/navigation";
import { getShowreelCategory, SHOWREEL_CATEGORIES, type CategorySlug } from "@/lib/showreel";
import { CategoryVideoCard } from "./CategoryVideoCard";

type Params = { category: string };

export function generateStaticParams() {
  return SHOWREEL_CATEGORIES.map((category) => ({ category: category.slug }));
}

export default async function ShowreelCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const categoryData = getShowreelCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="category-page pb-18">
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#showreel">
            ← Zpět na showreel
          </Link>
          <p className="mt-8 text-xs tracking-[0.24em] text-zinc-300 uppercase">Fremlos Media Category</p>
          <h1 className="headline mt-4 text-5xl md:text-7xl">{categoryData.titleCs}</h1>
          <p className="mt-5 max-w-2xl text-zinc-200">{categoryData.introCs}</p>
          <p className="mt-2 max-w-2xl text-zinc-400">{categoryData.introEn}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categoryData.videos.map((video) => (
            <CategoryVideoCard key={video.title} video={video} />
          ))}
        </div>

        <div className="mt-12">
          <p className="text-zinc-300">Další kategorie:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {SHOWREEL_CATEGORIES.filter((item) => item.slug !== (category as CategorySlug)).map((item) => (
              <Link className="category-chip" href={`/showreel/${item.slug}`} key={item.slug}>
                {item.titleCs}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
