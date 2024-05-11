import { Icon } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 gap-3">
      <Icon name="bx-run" size="108px" />
      <h2 className="text-6xl">We go</h2>
      <div className="flex mt-4 gap-3">
        <Icon name="bx-rocket" size="64px" />
        <Icon name="bx-rocket" size="64px" />
      </div>
    </main>
  );
}
