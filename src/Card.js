import React from "react";

function Card({ title, subTitle, img }) {
  return (
    <div className="card">
      <div className="card__media">
        <img src={img} alt="" />
      </div>
      <div className="card__chin">
        <h2 className="card__title" ref={this.myRef}>
          {title}
        </h2>
        <p className="card__deck">Alexis Gallisá • July 4th 2022</p>
        <div className="card__meta">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            focusable="false"
            color="rgba(129, 133, 159, 1.00)"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.833 1.083a3.75 3.75 0 0 0-3.75 3.75v6.334a3.75 3.75 0 0 0 3.75 3.75h6.334a3.75 3.75 0 0 0 3.75-3.75V4.834a3.75 3.75 0 0 0-3.75-3.75H4.833Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h6.334a2.25 2.25 0 0 1 2.25 2.25v6.334a2.25 2.25 0 0 1-2.25 2.25H4.833a2.25 2.25 0 0 1-2.25-2.25V4.833Zm3.018 1h4.798c.537 0 .854.603.55 1.045l-2.4 3.49a.667.667 0 0 1-1.098 0l-2.4-3.49a.667.667 0 0 1 .55-1.045Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="card__deck">Reviewer</p>
          <p className="chip chip--green">Bob Ross</p>
          <p className="chip chip--purple">Ross Barbera</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
