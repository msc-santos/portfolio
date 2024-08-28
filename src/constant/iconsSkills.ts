import SVG_JS from 'src/assets/svgs/icons8-javascript.svg';
import SVG_TS from 'src/assets/svgs/icons8-typescript.svg';
import SVG_REACT from 'src/assets/svgs/icons8-nativo-de-reagir.svg';
import SVG_NEXT from 'src/assets/svgs/nextjs-svgrepo-com.svg';
import SVG_NEST from 'src/assets/svgs/nestjs-svgrepo-com.svg';

import SVG_JAVA from 'src/assets/svgs/java-svgrepo-com.svg';
import SVG_SPRING from 'src/assets/svgs/spring-boot-svgrepo-com.svg';

import SVG_NODE from 'src/assets/svgs/icons8-nodejs.svg';

import SVG_AWS from 'src/assets/svgs/icons8-amazon-web-services.svg';
import SVG_GIT from 'src/assets/svgs/icons8-git.svg';
import SVG_POSTGRESSQL from 'src/assets/svgs/icons8-postgreesql.svg';
import SVG_MYSQL from 'src/assets/svgs/icons8-logo-mysql.svg';
import IMG_DB from 'src/assets/images/icons8-restauração-de-banco-de-dados-80.png';
import IMG_DOCKER from 'src/assets/images/icons8-docker-96.png';

import { IconSkill } from 'src/interfaces/IconsSkills';

export const iconslanguages: Array<IconSkill> = [
  {
    icon: SVG_JS,
    alt: 'javascript icon'
  }, {
    icon: SVG_NODE,
    alt: 'node icon'
  },{
    icon: SVG_TS,
    alt: 'typescript icon'
  }, {
    icon: SVG_JAVA,
    alt: 'java icon'
  }
]

export const iconsFrameworks: Array<IconSkill> = [
  {
    icon: SVG_NEST,
    alt: 'nest icon'
  },  {
    icon: SVG_NEXT,
    alt: 'vue icon'
  }, {
    icon: SVG_REACT,
    alt: 'react icon'
  },
  {
    icon: SVG_SPRING,
    alt: 'spring icon'
  },
]

export const iconsTools: Array<IconSkill> = [
  {
    icon: SVG_AWS,
    alt: 'aws icon'
  }, {
    icon: SVG_GIT,
    alt: 'git icon'
  }, {
    icon: SVG_POSTGRESSQL,
    alt: 'postgresql icon'
  }, {
    icon: SVG_MYSQL,
    alt: 'mysql icon'
  }, {
    icon: IMG_DB,
    alt: 'db icon'
  }, {
    icon: IMG_DOCKER,
    alt: 'docker icon'
  }
]