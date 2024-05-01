import { Header } from "./_components/header";
import { Search } from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt- px-5">
        <Search />
      </div>
    </>
  );
}
