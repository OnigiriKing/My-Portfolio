
export default function ArrorSvg({width}) {

    return (
      <svg
        className="arror-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="117"
        viewBox="0 0 108 117"
        fill="none"
      >
        <line
          x1="0.42747"
          y1="27.7406"
          x2="54.4275"
          y2="116.741"
          stroke="black"
        />
        <line
          x1="0.42747"
          y1="0.740636"
          x2="54.4275"
          y2="89.7406"
          stroke="black"
        />
        <line
          y1="-0.5"
          x2="104.101"
          y2="-0.5"
          transform="matrix(-0.518727 0.85494 0.85494 0.518727 108 1)"
          stroke="black"
        />
        <line
          y1="-0.5"
          x2="104.101"
          y2="-0.5"
          transform="matrix(-0.518727 0.85494 0.85494 0.518727 108 28)"
          stroke="black"
        />
      </svg>
    );
}
