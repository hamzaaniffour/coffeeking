import Cookies from "@/components/Cookies/Cookies";
import HomeSection from "@/components/Sections/HomeSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HomeSection />
      <Cookies />
    </main>
  );
}
