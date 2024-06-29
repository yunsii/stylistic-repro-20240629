// @ts-nocheck
export default function BlogDetail({
  post,
  authorDetails,

  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {"draft" in post && post.draft !== true
        ? (
            <MDXLayoutRenderer
              layout={post.layout || DEFAULT_LAYOUT}
              toc={post.toc}
              content={post}
              authorDetails={authorDetails}
              prev={prev}
              next={next}
            />
          )
        : (
            <div className="mt-24 text-center">
              <PageTitle>
                Under Construction
                {" "}
                <span role="img" aria-label="roadwork sign">
                  🚧
                </span>
              </PageTitle>
            </div>
          )}
    </>
  );
}
