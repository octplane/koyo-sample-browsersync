/* global process */
import BroccoliConcat from "broccoli-concat";
import BroccoliFunnel from "broccoli-funnel";
import BroccoliMergeTrees from "broccoli-merge-trees";
import BroccoliSass from "broccoli-sass";
import BroccoliUglify from "broccoli-uglify-sourcemap";

const FOR_PRODUCTION = process.env.NODE_ENV === "production";

const resources = "resources";

// const images = new BroccoliFunnel(resources, {
//   srcDir: "img",
//   destDir: "img",
//   annotation: "Images Funnel"
// });

// const vendor = new BroccoliFunnel(resources, {
//   srcDir: "vendor",
//   destDir: "vendor",
//   annotation: "Vendor Funnel"
// });



const appJsFunnel = new BroccoliFunnel(resources, {
  srcDir: "js",
  include: ["*.js"],
  destDir: "js/app",
  annotation: "App JS Funnel"
});

// let appJs = new BroccoliConcat(appJsFunnel, {
//   outputFile: "js/app.js",
//   annotation: "App JS Concat"
// });

if (FOR_PRODUCTION) {
  appJs = new BroccoliUglify(appJs, {
    async: true,
    annotation: "App JS Uglify"
  });
}

export default new BroccoliMergeTrees(
  [images, vendor, appCss, appJs],
  {
    annotation: "Final Output"
  }
);
