import SectionTitle from "../Common/SectionTitle";

export default async function BlogSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Blog Unavailable"
          title="Sanity CMS Removed"
          paragraph="Blog functionality has been removed from this project as Sanity CMS is no longer integrated."
        />

        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3 text-center text-white/70">
          <p>Blog posts are no longer available.</p>
        </div>
      </div>
    </section>
  );
}
