import { styles } from './PageFooter.styles';

type TProps = {
  className?: string;
};

export const PageFooter = (props: TProps) => (
  <footer id="app-footer">
    <div id="div-logo-wrapper">
      <a href="https://stevenjburns.github.io/">
        <svg id="svg-sjb" height="40" width="40" viewBox="0 0 256 256">
          <defs>
            <filter id="drop-shadow" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="4" dy="4" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="#D0D0D0"
            filter="url(#drop-shadow)"
          >
            <animate
              attributeType="XML"
              attributeName="r"
              from="0"
              to="96"
              dur="0.75s"
              fill="freeze"
            />
          </circle>
          <circle
            cx="128"
            cy="128"
            r="0"
            fill="none"
            stroke="#2F2F2FFF"
            strokeWidth="24"
          >
            <animate
              attributeType="XML"
              attributeName="r"
              begin="0.75s"
              from="0"
              to="50"
              dur="0.75s"
              fill="freeze"
            />
          </circle>
          <polygon
            opacity="0"
            points="128,128 16,84 62,62 84,16"
            stroke="#2F2F2FFF"
            strokeWidth="8"
            strokeLinejoin="round"
            fill="#F0F0F0"
            fillOpacity="1"
          >
            <animate
              attributeType="XML"
              attributeName="opacity"
              begin="1.5s"
              from="0"
              to="1"
              dur="0.5s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="-24 -24"
              to="0 0"
              begin="1.5s"
              dur="0.5s"
              fill="freeze"
            />
          </polygon>
        </svg>
      </a>
      {/* <a href="https://twitter.com/StevenJBurns">
        <FontAwesomeIcon className="fa-logo" icon={ faTwitter } size="2x" />
      </a>
      <a href="https://github.com/StevenJBurns/extrasolar">
        <FontAwesomeIcon className="fa-logo" icon={ faGithub } size="2x" />
      </a> */}
    </div>
    <h4>&copy;{new Date().getFullYear()} &bull; Steven J Burns</h4>
  </footer>
);

export default PageFooter;
