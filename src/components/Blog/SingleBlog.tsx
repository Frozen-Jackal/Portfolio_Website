import { Blog } from "@/types/blog";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, metadata } = blog;

  return (
    <div className="wow fadeInUp group relative isolate">
      <div className="relative mb-6 h-[222px] w-full overflow-hidden rounded-xl bg-white/10 flex items-center justify-center">
        <p className="text-white/50 text-center">Image Not Available</p>
      </div>

      <div className="mb-4.5 flex flex-wrap items-center gap-2.5"></div>

      <h3>
        <span className="line-clamp-2 text-xl font-semibold text-white">
          {title}
        </span>
      </h3>
      <p className="mt-4 line-clamp-3 font-medium text-white/70">{metadata}</p>
    </div>
  );
};

export default SingleBlog;
