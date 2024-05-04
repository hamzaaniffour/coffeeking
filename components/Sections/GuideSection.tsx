import React from "react";

async function getHomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/pages?slug=homepage`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  return res.json();
}

const GuideSection = async () => {
  const [page] = await getHomePage();

  return (
    <div className="mt-16">
      <div className="pages-content text-lg text-slate-800" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
};

export default GuideSection;
