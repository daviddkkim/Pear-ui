import { Button } from "@hazy/core";
import { useIsomorphicLayoutEffect } from "@hazy/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("hazy docs page");
  }, []);
  return (
    <div>
      <h1>hazy Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
