import { redirect } from "next/navigation";

export default function Home() {
  setTimeout(() => {
    redirect("/login");
  }, 2000);

  return (
    <main>
      <div>You will be redirected to login page in 2 seconds.</div>
    </main>
  );
}
