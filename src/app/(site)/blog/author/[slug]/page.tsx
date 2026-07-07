import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

function generateStaticParams() {
  return [];
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;

  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle="Author Page" />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h1 className="mb-4 text-3xl font-bold text-white">Author</h1>
            <p className="text-white/70">
              Blog functionality is not available. Sanity has been removed from
              this project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
