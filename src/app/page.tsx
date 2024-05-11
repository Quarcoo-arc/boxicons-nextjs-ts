import { Icon } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="flex gap-3 justify-center text-center">
        <h2 className="text-3xl">We go</h2>
        <Icon name="bx-rocket" size="36px" />
        <Icon name="bx-rocket" size="36px" />
      </div>
    </main>
  );
}
