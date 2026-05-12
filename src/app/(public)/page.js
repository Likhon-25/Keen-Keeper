import Banner from "@/components/home/banner/Banner";
import Friends from "@/components/home/Friends/Friends";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner/>
      <Friends/>
    </div>
  );
}
