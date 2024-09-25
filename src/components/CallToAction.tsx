import { launchExternalUrl } from "@/utils";
import { Button } from "antd";

import profile from "@/data/profile.json";

export default function CallToAction() {
  return (
    <>
      <Button
        type="text"
        size="large"
        className="font-mono bg-blue-700 text-white text-xl"
        onClick={() => launchExternalUrl(profile.consultationLink)}
      >
        Book Consultation 📅
      </Button>
      <Button
        type="text"
        size="large"
        className="font-mono bg-blue-700 text-white text-xl"
        onClick={() => launchExternalUrl(`mailto:${profile.email}`)}
      >
        Hire Me 🥳
      </Button>
    </>
  );
}
