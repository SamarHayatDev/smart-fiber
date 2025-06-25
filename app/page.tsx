import { ModeToggle } from "@/components/mode-toggler";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center p-4 container mx-auto">
        {" "}
        <Button>Hello</Button>
        <ModeToggle />
      </div>
    </>
  );
}
