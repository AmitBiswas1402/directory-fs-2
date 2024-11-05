import { SearchForm } from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3QlMjBjb21wYW55fGVufDB8fDB8fHww",
      category: "Robots",
      title: "We robots are here",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup ideas!!!</h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote pitches & get noticed by investors.
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
