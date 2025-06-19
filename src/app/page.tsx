import { CheckUser } from "@/lib/CheckUser";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "./components/Guest";
import CreateWrapper from "./components/CreateWrapper";

export default async function Home() {
  const user = await currentUser();
  const checkUser = await CheckUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <h1 className="text-3xl font-extrabold text-center mt-16">
        Welcome, {user.firstName}
      </h1>
      <CreateWrapper />
      {/* List Compnenets */}
    </main>
  );
}
