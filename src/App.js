import React, { useState } from "react";
import chroma from "chroma-js";
import Cards from "./Cards.js";

import Layers from "./Layers.js";
import "../src/styles.scss";

// Set this to determine base hue for entire range
let hue = "285.9";

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
  { value: [290.29, 1.53, 96.61], name: "greyOld97" },
  { value: [290.29, 1.53, 100], name: "greyOld100" }
];

const colors = [
  { value: [hue, 0, 0, 1], name: "grey00" },
  { value: [hue, 6, 3.8, 1], name: "grey05" },
  { value: [hue, 8, 6.4, 1], name: "grey08" },
  { value: [hue, 10, 10.3, 1], name: "grey10" },
  { value: [hue, 11, 13.8, 1], name: "grey12" },
  { value: [hue, 12, 17.3, 1], name: "grey15" },
  { value: [hue, 12.5, 19.7, 1], name: "grey20" },
  { value: [hue, 14, 23.4, 1], name: "grey30" },
  { value: [hue, 14, 34.6, 1], name: "grey40" },
  { value: [hue, 13.5, 44.0, 1], name: "grey50" },
  { value: [hue, 13.5, 54.4, 1], name: "grey60" },
  { value: [hue, 12.75, 70, 1], name: "grey70" },
  { value: [hue, 10, 82.1, 1], name: "grey80" },
  { value: [hue, 9, 86.4, 1], name: "grey88" },
  { value: [hue, 7, 89.4, 1], name: "grey90" },
  { value: [hue, 5, 92.4, 1], name: "grey93" },
  { value: [hue, 3, 94.7, 1], name: "grey95" },
  { value: [hue, 1.5, 96.6, 1], name: "grey97" },
  { value: [hue, 0, 100, 1], name: "grey100" }
];

// Greys No Saturation
const colorsNoSat = [
  { value: [hue, 0, 0, 1], name: "greyN00" },
  { value: [hue, 0, 3.8, 1], name: "greyN05" },
  { value: [hue, 0, 6.4, 1], name: "greyN08" },
  { value: [hue, 0, 10.3, 1], name: "greyN10" },
  { value: [hue, 0, 13.8, 1], name: "greyN12" },
  { value: [hue, 0, 17.3, 1], name: "greyN15" },
  { value: [hue, 0, 19.7, 1], name: "greyN20" },
  { value: [hue, 0, 23.4, 1], name: "greyN30" },
  { value: [hue, 0, 34.6, 1], name: "greyN40" },
  { value: [hue, 0, 44.0, 1], name: "greyN50" },
  { value: [hue, 0, 54.4, 1], name: "greyN60" },
  { value: [hue, 0, 70, 1], name: "greyN70" },
  { value: [hue, 0, 82.1, 1], name: "greyN80" },
  { value: [hue, 0, 86.4, 1], name: "greyN88" },
  { value: [hue, 0, 89.4, 1], name: "greyN90" },
  { value: [hue, 0, 92.4, 1], name: "greyN93" },
  { value: [hue, 0, 94.7, 1], name: "greyN95" },
  { value: [hue, 0, 96.6, 1], name: "greyN97" },
  { value: [hue, 0, 100, 1], name: "greyN100" }
];

// Alpha Colors
const colorsAlpha = [
  { value: [hue, 8, 12, 0.1], name: "greyA00" },
  { value: [hue, 10, 16, 0.2], name: "greyA05" },
  { value: [hue, 12, 20, 0.3], name: "greyA10" },
  { value: [hue, 12, 26, 0.35], name: "greyA15" },
  { value: [hue, 13, 38, 0.4], name: "greyA20" },
  { value: [hue, 14, 48, 0.5], name: "greyA30" },
  { value: [hue, 14, 62, 0.55], name: "greyA40" },
  { value: [hue, 14, 68, 0.65], name: "greyA50" },
  { value: [hue, 11, 78, 0.7], name: "greyA60" },
  { value: [hue, 8, 86, 0.75], name: "greyA70" },
  { value: [hue, 5, 92, 0.8], name: "greyA80" },
  { value: [hue, 2, 96, 0.9], name: "greyA90" },
  { value: [hue, 0, 100, 1], name: "greyA100" }
];

// Alpha Colors old
const colorsAlphaOld = [
  { value: [290.17, 6.79, 3.97, 0.1], name: "greyA00" },
  { value: [288.38, 10.53, 16.06, 0.2], name: "greyA05" },
  { value: [290.85, 11.58, 19.98, 0.3], name: "greyA10" },
  { value: [288.83, 11.95, 24.02, 0.35], name: "greyA15" },
  { value: [289.24, 13.74, 35.06, 0.4], name: "greyA20" },
  { value: [290.63, 14.27, 45.93, 0.5], name: "greyA30" },
  { value: [290.32, 14.87, 68.09, 0.55], name: "greyA40" },
  { value: [290.32, 14.87, 68.09, 0.65], name: "greyA50" },
  { value: [289.65, 12.29, 79.0, 0.7], name: "greyA60" },
  { value: [289.16, 10.49, 86.1, 0.75], name: "greyA70" },
  { value: [286.72, 5.16, 92.53, 0.8], name: "greyA80" },
  { value: [290.29, 1.53, 96.61, 0.9], name: "greyA90" },
  { value: [0, 0.0, 100.0, 1], name: "greyA100" }
];

function chromaHCL(color) {
  const [h, c, l, opacity] = color;
  return chroma(h, c, l, "hcl").alpha(opacity ?? 1);
}

function a11y(color) {
  if (chroma.contrast(color, "#fff") > 4.51) {
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
        {colorName}: 'rgba(
        {chromaHCL(color).get("rgba.r")},{chromaHCL(color).get("rgba.g")},
        {chromaHCL(color).get("rgba.b")},{chromaHCL(color).get("rgba.a")})',
        <div className="hide__child">
          <p>
            hsla(
            {chromaHCL(color).get("hsl.h").toFixed(1)},
            {(chromaHCL(color).get("hsl.s") * 100).toFixed(1)}%,
            <b>{(chromaHCL(color).get("hsl.l") * 100).toFixed(1)}%,</b>
            {chromaHCL(color).get("rgba.a")})
          </p>
          <p>
            hcl(
            {chromaHCL(color).get("hcl.h").toFixed(1)},
            {chromaHCL(color).get("hcl.c").toFixed(1)},
            <b>{chromaHCL(color).get("hcl.l").toFixed(1)}%)</b>
          </p>
          {/* <p>{chromaHCL(color).hex()}</p> */}
          <div className="split">
            {colorPrev && (
              <p>
                Cntrst
                <span role="img" aria-label="Point Up">
                  ☝️
                </span>
                :
                <strong>
                  {chroma
                    .contrast(
                      chromaHCL(color).hex(),
                      chromaHCL(colorPrev).hex()
                    )
                    .toFixed(3)}
                </strong>
              </p>
            )}

            {!colorPrev && <div></div>}
            {!colorNext && <div></div>}

            {colorNext && (
              <p>
                Cntrst
                <span role="img" aria-label="Point Down">
                  👇
                </span>
                :
                <strong>
                  {chroma
                    .contrast(
                      chromaHCL(color).hex(),
                      chromaHCL(colorNext).hex()
                    )
                    .toFixed(3)}
                </strong>
              </p>
            )}
          </div>
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

const colorListAlpha = colorsAlpha.map((color, i) => (
  <>
    {colorOutput(
      color.value,
      colorsAlpha[i - 1]?.value,
      colorsAlpha[i + 1]?.value,
      i,
      color.name
    )}
  </>
));

const colorListAlphaOld = colorsAlphaOld.map((color, i) => (
  <>
    {colorOutput(
      color.value,
      colorsAlphaOld[i - 1]?.value,
      colorsAlphaOld[i + 1]?.value,
      i,
      color.name
    )}
  </>
));

export default function App() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
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

        <div className="split split--three split--responsive mg-b-24">
          <div className="old">
            <h2>Current Greys</h2>
            <div className="panel">
              <Cards />
            </div>
          </div>
          <div>
            <h2>Adjusted Greys</h2>
            <div className="panel">
              <Cards />
            </div>
          </div>
          <div className="v3">
            <h2>V3 Greys</h2>
            <div className="panel">
              <Cards />
            </div>
          </div>
        </div>

        <div className="split">
          <div className="old">
            <h2>Current Greys</h2>
            <Layers />
          </div>
          <div>
            <h2>Adjusted Greys</h2>
            <Layers />
          </div>
        </div>

        <div
          style={{
            paddingBottom: "24px"
          }}
        >
          {/*
          <p>
            [ {chroma("rgb(255, 255, 255)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(255, 255, 255)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(255, 255, 255)").get("hcl.l").toFixed(2)} ], name:
            "greyA10" [ {chroma("rgb(245, 245, 248)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(245, 245, 248)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(245, 245, 248)").get("hcl.l").toFixed(2)} ], name:
            "greyA90" [ {chroma("rgb(232, 233, 243)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(232, 233, 243)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(232, 233, 243)").get("hcl.l").toFixed(2)} ], name:
            "greyA80" [ {chroma("rgb(213, 214, 234)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(213, 214, 234)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(213, 214, 234)").get("hcl.l").toFixed(2)} ], name:
            "greyA70" [ {chroma("rgb(193, 194, 217)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(193, 194, 217)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(193, 194, 217)").get("hcl.l").toFixed(2)} ], name:
            "greyA60" [ {chroma("rgb(163, 164, 191)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(163, 164, 191)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(163, 164, 191)").get("hcl.l").toFixed(2)} ], name:
            "greyA50" [ {chroma("rgb(163, 164, 191)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(163, 164, 191)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(163, 164, 191)").get("hcl.l").toFixed(2)} ], name:
            "greyA40" [ {chroma("rgb(106, 107, 131)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(106, 107, 131)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(106, 107, 131)").get("hcl.l").toFixed(2)} ], name:
            "greyA30" [ {chroma("rgb(79, 81, 103)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(79, 81, 103)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(79, 81, 103)").get("hcl.l").toFixed(2)} ], name:
            "greyA20" [ {chroma("rgb(54, 56, 74)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(54, 56, 74)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(54, 56, 74)").get("hcl.l").toFixed(2)} ], name:
            "greyA15" [ {chroma("rgb(46, 47, 64)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(46, 47, 64)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(46, 47, 64)").get("hcl.l").toFixed(2)} ], name:
            "greyA10" [ {chroma("rgb(37, 39, 54)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(37, 39, 54)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(37, 39, 54)").get("hcl.l").toFixed(2)} ], name:
            "greyA05" [ {chroma("rgb(13, 13, 24)").get("hcl.h").toFixed(2)},{" "}
            {chroma("rgb(13, 13, 24)").get("hcl.c").toFixed(2)},{" "}
            {chroma("rgb(13, 13, 24)").get("hcl.l").toFixed(2)} ], name:
            "greyA00"
          </p>

           <h1>Perceptual Colors</h1>
     
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

        {/* This is gross don't look at me */}
        <button onClick={handleToggle}>Toggle format</button>

        <div className={isActive ? "cols hide" : "cols"}>
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
        </div>
        <div className={isActive ? "cols cols--four hide" : "cols cols--four"}>
          <div
            style={{
              padding: "16px",
              background: "rgba(29,31,44,1)"
            }}
          >
            <h2>Alpha Old on Primary</h2>
            <div>{colorListAlphaOld}</div>
          </div>
          <div
            style={{
              padding: "16px",
              background: "var(--bg-primary)"
            }}
          >
            <h2>Alpha on Primary</h2>
            <div>{colorListAlpha}</div>
          </div>
          <div
            style={{
              padding: "16px",
              background: "rgba(37,39,54,1)"
            }}
          >
            <h2>Alpha Old on Secondary</h2>
            <div>{colorListAlphaOld}</div>
          </div>
          <div
            style={{
              padding: "16px",
              background: "var(--bg-secondary)"
            }}
          >
            <h2>Alpha on Secondary</h2>
            <div>{colorListAlpha}</div>
          </div>
        </div>
      </div>
    </>
  );
}
