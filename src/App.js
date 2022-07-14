import React from "react";
import chroma from "chroma-js";
import "./styles.css";

// Set this to determine base hue for entire range
let hue = "285.9";
// Set this to determine base saturation for entire range
let chr = "10";

const colors = [
  [hue, 1, 97, 1], //////grey97
  [hue, 2, 95, 1], //////grey95
  [hue, 4, 92, 1], //////grey93
  [hue, 6.5, 89, 1], //////grey90
  [hue, 8, 86, 1], /////grey88
  [hue, 10, 79, 1], /////grey80
  [hue, 12, 69, 1], ////grey70
  [hue, 14, 60, 1], ////grey60
  [hue, 15, 49, 1], ////grey50
  [hue, 14, 38, 1], ////grey40
  [hue, 13, 29, 1], ////grey30
  [hue, 13, 22, 1], ////grey20
  [hue, 12, 17.75, 1], //grey15
  [hue, 11, 13.5, 1], ////grey12
  [hue, 10, 9, 1], /////grey10
  [hue, 9, 6, 1], /////grey08
  [hue, 8, 4, 1] ///////grey05
];

// Alpha Colors
const colorsAlpha = [
  [hue, chr, 97, 0.9],
  [hue, chr, 93, 0.8],
  [hue, chr, 87, 0.75],
  [hue, chr, 79, 0.7],
  [hue, chr, 70, 0.65],
  [hue, chr, 60, 0.55],
  [hue, chr, 49, 0.5],
  [hue, chr, 38, 0.4],
  [hue, chr, 27, 0.35],
  [hue, chr, 18, 0.3],
  [hue, chr, 11, 0.2],
  [hue, chr, 7, 0.1]
];

const colorsOld = [
  [290.29, 1.53, 96.61],
  [290.45, 3.59, 94.98],
  [286.72, 5.17, 92.53],
  [288.26, 7.81, 89.15],
  [289.16, 10.49, 86.1],
  [289.65, 12.29, 79.0],
  [290.32, 14.87, 68.09],
  [286.39, 14.92, 56.03],
  [290.63, 14.27, 45.93],
  [289.24, 13.74, 35.06],
  [288.83, 11.95, 24.02],
  [290.85, 11.58, 19.98],
  [288.38, 10.53, 16.06],
  [287.76, 9.43, 12.11],
  [289.96, 8.28, 8.12],
  [287.85, 7.33, 6.17],
  [290.17, 6.79, 3.97]
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

function colorOutput(color, colorPrev, colorNext, i) {
  return (
    <>
      <div
        style={{
          background: chromaHCL(color).hex(),
          padding: "12px",
          color: a11y(chromaHCL(color).hex())
        }}
      >
        {i}
        <p>
          hsla(
          {chromaHCL(color).get("hsl.h").toFixed(2)},
          {(chromaHCL(color).get("hsl.s") * 100).toFixed(2)}%,
          {(chromaHCL(color).get("hsl.l") * 100).toFixed(2)}%,
          {chromaHCL(color).get("rgba.a")})
        </p>
        <p>
          hcl(
          {chromaHCL(color).get("hcl.h").toFixed(2)},
          {chromaHCL(color).get("hcl.c").toFixed(2)},
          {chromaHCL(color).get("hcl.l").toFixed(2)}%)
        </p>
        <p>
          rgba(
          {chromaHCL(color).get("rgba.r")},{chromaHCL(color).get("rgba.g")},
          {chromaHCL(color).get("rgba.b")},{chromaHCL(color).get("rgba.a")})
        </p>
        <p>{chromaHCL(color).hex()}</p>

        <div className="split">
          {colorPrev && (
            <p>
              DeltaE☝️:
              <strong>
                {chroma
                  .deltaE(chromaHCL(color).hex(), chromaHCL(colorPrev).hex())
                  .toFixed(3)}
              </strong>
            </p>
          )}

          {!colorPrev && <div></div>}
          {!colorNext && <div></div>}

          {colorNext && (
            <p>
              DeltaE👇:
              <strong>
                {chroma
                  .deltaE(chromaHCL(color).hex(), chromaHCL(colorNext).hex())
                  .toFixed(3)}
              </strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function styleOutput(color, i) {
  return <>{"--grey" + i + ":" + chromaHCL(color).hex() + ";"}</>;
}

const styleList = colors.map((color, i) => <>{styleOutput(color, i)}</>);

const colorListOld = colorsOld.map((color, i) => (
  <>{colorOutput(color, colorsOld[i - 1], colorsOld[i + 1], i)}</>
));

const colorList = colors.map((color, i) => (
  <>{colorOutput(color, colors[i - 1], colors[i + 1], i)}</>
));
const colorList2 = colorsAlpha.map((color, i) => (
  <>{colorOutput(color, colorsAlpha[i - 1], colorsAlpha[i + 1], i)}</>
));

export default function App() {
  return (
    <>
      <div className="App">
        <style>
          {":root{"}
          {styleList}
          {"}"}
        </style>
        <div
          style={{
            paddingBottom: "24px"
          }}
        >
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
          </p>
        </div>
        <div className="cols">
          <div>
            <h2>Current Greys</h2>
            {colorListOld}
          </div>

          <div>
            <h2>Greys</h2>
            {colorList}
          </div>

          <div
            style={{
              padding: "32px",
              background: "#1D1F29"
            }}
          >
            <h2>Alpha Greys</h2>
            <div>{colorList2}</div>
          </div>
        </div>

        <div className="panel">
          <div className="card">
            <div className="card__media">
              <img src="IMG_1893.jpeg" alt="" />
            </div>
            <div className="card__chin">
              <h2 className="card__title">Churro-with-a-big-stick.MOV</h2>
              <p className="card__deck">Alexis Gallisá • July 4th 2022</p>
            </div>
          </div>
          <div className="card">
            <div className="card__media">
              <img src="IMG_1893.jpeg" alt="" />
            </div>
            <div className="card__chin">
              <h2 className="card__title">Churro-with-a-big-stick.MOV</h2>
              <p className="card__deck">Alexis Gallisá • July 4th 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
