import { launchExternalUrl } from "@/utils";
import { Button } from "antd";

export default function CallToAction() {
  return (
    <>
      <Button
        type="text"
        size="large"
        className="font-mono bg-blue-700 text-white text-xl"
        onClick={() => launchExternalUrl("mailto:me@umairjibran.com")}
      >
        Hire Me 🥳
      </Button>
    </>
  );
}
