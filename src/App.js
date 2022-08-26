import React from "react";
import chroma from "chroma-js";
import Cards from "./Cards.js";

import Layers from "./Layers.js";
import "../src/styles.scss";

// Set this to determine base hue for entire range
let hue = "285.9";
// Set this to determine base saturation for entire range
let chr = "10";

const colors = [
  { value: [hue, 0, 0, 1], name: "grey00" },
  { value: [hue, 8, 4, 1], name: "grey05" },
  { value: [hue, 8, 6, 1], name: "grey08" },
  { value: [hue, 8, 8, 1], name: "grey10" },
  { value: [hue, 11, 16, 1], name: "grey12" },
  { value: [hue, 12, 19, 1], name: "grey15" },
  { value: [hue, 13, 23, 1], name: "grey20" },
  { value: [hue, 13, 26, 1], name: "grey30" },
  { value: [hue, 14, 36, 1], name: "grey40" },
  { value: [hue, 14, 49, 1], name: "grey50" },
  { value: [hue, 14, 59, 1], name: "grey60" },
  { value: [hue, 12, 69, 1], name: "grey70" },
  { value: [hue, 10, 79, 1], name: "grey80" },
  { value: [hue, 8, 86, 1], name: "grey88" },
  { value: [hue, 6.5, 89, 1], name: "grey90" },
  { value: [hue, 4, 92, 1], name: "grey93" },
  { value: [hue, 2, 95, 1], name: "grey95" },
  { value: [hue, 1, 97, 1], name: "grey97" }
];

const colorsOld = [
  { value: [290.17, 0, 0], name: "greyOld00" },
  { value: [290.17, 6.79, 3.97], name: "greyOld05" },
  { value: [287.85, 7.33, 6.17], name: "greyOld08" },
  { value: [289.96, 8.28, 8.12], name: "greyOld10" },
  { value: [287.76, 9.43, 12.11], name: "greyOld12" },
  { value: [288.38, 10.53, 16.06], name: "greyOld15" },
  { value: [290.85, 11.58, 19.98], name: "greyOld20" },
  { value: [288.83, 11.95, 24.02], name: "greyOld30" },
  { value: [289.24, 13.74, 35.06], name: "greyOld40" },
  { value: [290.63, 14.27, 45.93], name: "greyOld50" },
  { value: [286.39, 14.92, 56.03], name: "greyOld60" },
  { value: [290.32, 14.87, 68.09], name: "greyOld70" },
  { value: [289.65, 12.29, 79.0], name: "greyOld80" },
  { value: [289.16, 10.49, 86.1], name: "greyOld88" },
  { value: [288.26, 7.81, 89.15], name: "greyOld90" },
  { value: [286.72, 5.17, 92.53], name: "greyOld93" },
  { value: [290.45, 3.59, 94.98], name: "greyOld95" },
  { value: [290.29, 1.53, 96.61], name: "greyOld97" }
];

// Greys No Saturation
const colorsNoSat = [
  { value: [hue, 0, 0, 1], name: "greyN00" },
  { value: [hue, 0, 4, 1], name: "greyN05" },
  { value: [hue, 0, 6, 1], name: "greyN08" },
  { value: [hue, 0, 8.5, 1], name: "greyN10" },
  { value: [hue, 0, 13.5, 1], name: "greyN12" },
  { value: [hue, 0, 17.75, 1], name: "greyN15" },
  { value: [hue, 0, 22, 1], name: "greyN20" },
  { value: [hue, 0, 28, 1], name: "greyN30" },
  { value: [hue, 0, 38, 1], name: "greyN40" },
  { value: [hue, 0, 49, 1], name: "greyN50" },
  { value: [hue, 0, 60, 1], name: "greyN60" },
  { value: [hue, 0, 69, 1], name: "greyN70" },
  { value: [hue, 0, 79, 1], name: "greyN80" },
  { value: [hue, 0, 86, 1], name: "greyN88" },
  { value: [hue, 0.5, 89, 1], name: "greyN90" },
  { value: [hue, 0, 92, 1], name: "greyN93" },
  { value: [hue, 0, 95, 1], name: "greyN95" },
  { value: [hue, 0, 97, 1], name: "greyN97" }
];

// Alpha Colors
const colorsAlpha = [
  { value: [hue, chr, 7, 0.1], name: "greyA00" },
  { value: [hue, chr, 11, 0.2], name: "greyA05" },
  { value: [hue, chr, 18, 0.3], name: "greyA10" },
  { value: [hue, chr, 27, 0.35], name: "greyA15" },
  { value: [hue, chr, 38, 0.4], name: "greyA20" },
  { value: [hue, chr, 49, 0.5], name: "greyA30" },
  { value: [hue, chr, 60, 0.55], name: "greyA40" },
  { value: [hue, chr, 70, 0.65], name: "greyA50" },
  { value: [hue, chr, 79, 0.7], name: "greyA60" },
  { value: [hue, chr, 87, 0.75], name: "greyA70" },
  { value: [hue, chr, 93, 0.8], name: "greyA80" },
  { value: [hue, chr, 97, 0.9], name: "greyA90" },
  { value: [hue, chr, 100, 1], name: "greyA100" }
];

function chromaHCL(color) {
  const [h, c, l, opacity] = color;
  return chroma(h, c, l, "hcl").alpha(opacity ?? 1);
}

function a11y(color) {
  if (chroma.contrast(color, "#fff") > 4.5) {
    return "#fff";
  } else {
    return "#000";
  }
}

function colorOutput(color, colorPrev, colorNext, i, colorName) {
  return (
    <>
      <div
        style={{
          background: chromaHCL(color).hex(),
          padding: "12px",
          color: a11y(chromaHCL(color).hex())
        }}
      >
        {colorName}
        <p>
          hsla(
          {chromaHCL(color).get("hsl.h").toFixed(2)},
          {(chromaHCL(color).get("hsl.s") * 100).toFixed(2)}%,
          <b>{(chromaHCL(color).get("hsl.l") * 100).toFixed(2)}%,</b>
          {chromaHCL(color).get("rgba.a")})
        </p>
        <p>
          hcl(
          {chromaHCL(color).get("hcl.h").toFixed(2)},
          {chromaHCL(color).get("hcl.c").toFixed(2)},
          <b>{chromaHCL(color).get("hcl.l").toFixed(2)}%)</b>
        </p>
        {/* <p>
          rgba(
          {chromaHCL(color).get("rgba.r")},{chromaHCL(color).get("rgba.g")},
          {chromaHCL(color).get("rgba.b")},{chromaHCL(color).get("rgba.a")})
        </p> */}
        <p>{chromaHCL(color).hex()}</p>

        <div className="split">
          {colorPrev && (
            <p>
              DeltaE
              <span role="img" aria-label="Point Up">
                ☝️
              </span>
              :
              <strong>
                {chroma
                  .distance(chromaHCL(color).hex(), chromaHCL(colorPrev).hex())
                  .toFixed(3)}
              </strong>
            </p>
          )}

          {!colorPrev && <div></div>}
          {!colorNext && <div></div>}

          {colorNext && (
            <p>
              DeltaE
              <span role="img" aria-label="Point Down">
                👇
              </span>
              :
              <strong>
                {chroma
                  .distance(chromaHCL(color).hex(), chromaHCL(colorNext).hex())
                  .toFixed(3)}
              </strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function styleOutput(color, i, colorName) {
  return <>{"--" + colorName + ": rgba(" + chromaHCL(color).rgba() + ");"}</>;
}

const styleList = colors.map((color, i) => (
  <>{styleOutput(color.value, i, color.name)}</>
));
const styleListNoSat = colorsNoSat.map((color, i) => (
  <>{styleOutput(color.value, i, color.name)}</>
));
const styleListAlpha = colorsAlpha.map((color, i) => (
  <>{styleOutput(color.value, i, color.name)}</>
));
const styleListOld = colorsOld.map((color, i) => (
  <>{styleOutput(color.value, i, color.name)}</>
));

const colorListOld = colorsOld.map((color, i) => (
  <>
    {colorOutput(
      color.value,
      colorsOld[i - 1]?.value,
      colorsOld[i + 1]?.value,
      i,
      color.name
    )}
  </>
));

const colorList = colors.map((color, i) => (
  <>
    {colorOutput(
      color.value,
      colors[i - 1]?.value,
      colors[i + 1]?.value,
      i,
      color.name
    )}
  </>
));

const colorListNoSat = colorsNoSat.map((color, i) => (
  <>
    {colorOutput(
      color.value,
      colorsNoSat[i - 1]?.value,
      colorsNoSat[i + 1]?.value,
      i,
      color.name
    )}
  </>
));

// const colorListAlpha = colorsAlpha.map((color, i) => (
//   <>
//     {colorOutput(
//       color.value,
//       colorsAlpha[i - 1]?.value,
//       colorsAlpha[i + 1]?.value,
//       i,
//       color.name
//     )}
//   </>
// ));

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Nunito:wght@200..900&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <style>
          {":root{"}
          {styleList}
          {styleListNoSat}
          {styleListAlpha}
          {styleListOld}
          {"}"}
        </style>

        <div class="split split--three split--responsive mg-b-24">
          <div class="old">
            Current
            <div className="panel">
              <Cards />
            </div>
          </div>
          <div>
            Adjusted
            <div className="panel">
              <Cards />
            </div>
          </div>
          <div class="v3">
            V3
            <div className="panel">
              <Cards />
            </div>
          </div>
        </div>

        <div class="split">
          <div class="old">
            <Layers />
          </div>
          <Layers />
        </div>

        <div
          style={{
            paddingBottom: "24px"
          }}
        >
          {/* <h1>Perceptual Colors</h1>
          <p>
            What hcl hue is 232? hsl(232, 22%, 11%) = hcl(
            {chroma("hsl(232,22%,11%)").get("hcl.h").toFixed(4)},
            {chroma("hsl(232,22%,11%)").get("hcl.c").toFixed(4)},
            {chroma("hsl(232,22%,11%)").get("hcl.l").toFixed(4)})
          </p>
          <p>
            What hcl hue is 243? hsl(243, 100%, 66%) = hcl(
            {chroma("hsl(243, 100%, 66%)").get("hcl.h").toFixed(4)},
            {chroma("hsl(243, 100%, 66%)").get("hcl.c").toFixed(4)},
            {chroma("hsl(243, 100%, 66%)").get("hcl.l").toFixed(4)})
          </p>
          <p>
            What hcl is rgb = hcl(
            {chroma("rgba(13, 13, 24, 0.1)").get("hcl.h").toFixed(4)},
            {chroma("rgba(13, 13, 24, 0.1)").get("hcl.c").toFixed(4)},
            {chroma("rgba(13, 13, 24, 0.1)").get("hcl.l").toFixed(4)})
          </p> */}
        </div>
        <div className="cols">
          <div>
            <h2>Current Greys</h2>
            {colorListOld}
          </div>

          <div>
            <h2>Greys Adjusted</h2>
            {colorList}
          </div>

          <div>
            <h2>Greys No Sat</h2>
            {colorListNoSat}
          </div>

          {/* <div
            style={{
              padding: "32px",
              background: "var(--grey10)"
            }}
          >
            <h2>Alpha Greys</h2>
            <div>{colorListAlpha}</div>
          </div> */}
        </div>
      </div>
    </>
  );
}
