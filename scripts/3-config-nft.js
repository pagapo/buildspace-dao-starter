import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa75269A4f4a166a1541522482f4635bC087CdF62"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Incredible Shape head",
        description: "This NFT will give you access to CollArt!",
        image: readFileSync("scripts/assets/319.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
