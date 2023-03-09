import SVG_JS from 'src/assets/svgs/icons8-javascript.svg';
import SVG_TS from 'src/assets/svgs/icons8-typescript.svg';
import SVG_REACT from 'src/assets/svgs/icons8-nativo-de-reagir.svg';
import SVG_VUE from 'src/assets/svgs/icons8-vue-js.svg';
import SVG_CSS from 'src/assets/svgs/icons8-css3.svg';
import IMG_HTML from 'src/assets/images/icons8-html-66.png';

import { IconSkill } from 'src/interfaces/IconsSkills';

export const icons: Array<IconSkill> = [
  {
    icon: SVG_JS,
    alt: 'javascript icon'
  }, {
    icon: SVG_TS,
    alt: 'typescript icon'
  }, {
    icon: SVG_REACT,
    alt: 'react icon'
  }, {
    icon: SVG_VUE,
    alt: 'vue icon'
  }, {
    icon: SVG_CSS,
    alt: 'css icon'
  }, {
    icon: IMG_HTML,
    alt: 'html image'
  }
]