import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "./_components/related-articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Blog | AI Tool`,
    description: "Blog page for AI Tool",
  };
}

function generateStaticParams() {
  return [];
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle="Blog Post" />

      <section className="py-20 lg:py-25">
        <div className="mx-auto max-w-[800px] px-4 sm:px-8 xl:px-0">
          <div className="mb-10 rounded-lg border border-white/10 bg-white/5 p-6">
            <h1 className="mb-4 text-3xl font-bold text-white">
              Blog Post Not Available
            </h1>
            <p className="mb-6 text-white/70">
              Sanity CMS has been removed from this project. Blog functionality
              is no longer available.
            </p>
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Back to Blog
            </Link>
          </div>

          <RelatedArticles />
        </div>
      </section>
    </>
  );
}
