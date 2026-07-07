import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { integrations, messages } from "../../../../integrations.config";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
};

export default async function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle="Blog Grid" />

      <section className="pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Blog Not Available
            </h2>
            <p className="mb-6 text-white/70">
              Sanity CMS has been removed from this project. Blog functionality
              is no longer available.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
