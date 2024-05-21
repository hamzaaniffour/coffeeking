import React from "react";

async function getHomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/pages?slug=commercial-coffee-machine`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  return res.json();
}

const GuideSection = async () => {
  const pages = await getHomePage();
  const page = pages.length > 0 ? pages[0] : null;

  return (
    <div className="mt-16">
      {page ? (
        <div className="pages-content text-lg text-slate-800" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default GuideSection;
