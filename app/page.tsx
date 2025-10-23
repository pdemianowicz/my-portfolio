import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-background">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="text-center max-w-sm mx-auto">
          <Image src="/user.jpg" width={70} height={70} alt="Picture of the autor" className="rounded-full mx-auto" />
          <h2 className="text-3xl font-semibold mt-2.5 mb-0.5">Awesome portfolio</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis qui voluptatum doloremque.</p>
        </div>
      </main>
    </div>
  );
}
