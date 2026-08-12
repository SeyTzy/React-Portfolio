import type { IconType } from 'react-icons'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVite,
  SiThreedotjs,
  SiRedux,
  SiDocker,
  SiFirebase,
  SiLaravel,
  SiPostgresql,
  SiVuedotjs,
  SiNuxt,
} from 'react-icons/si'
import { TbBrandVscode, TbBrandVisualStudio, TbBrandAws, TbApi, TbWifi, TbWorld, TbShieldCheck, TbRefresh, TbComponents, TbSql } from 'react-icons/tb'
import { FaBriefcase, FaCode, FaMobileAlt, FaPalette, FaDatabase, FaServer, FaTools, FaGraduationCap } from 'react-icons/fa'
import {
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineSparkles,
} from 'react-icons/hi'
import { FiAward, FiUsers, FiZap, FiCheckCircle } from 'react-icons/fi'

const registry = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  angular: SiAngular,
  vue: SiVuedotjs,
  nuxt: SiNuxt,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  dotnet: SiDotnet,
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  sqlserver: TbSql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  vscode: TbBrandVscode,
  visualstudio: TbBrandVisualStudio,
  figma: SiFigma,
  postman: SiPostman,
  vite: SiVite,
  three: SiThreedotjs,
  redux: SiRedux,
  aws: TbBrandAws,
  docker: SiDocker,
  firebase: SiFirebase,

  briefcase: FaBriefcase,
  code: FaCode,
  mobile: FaMobileAlt,
  palette: FaPalette,
  database: FaDatabase,
  server: FaServer,
  tools: FaTools,
  graduation: FaGraduationCap,

  api: TbApi,
  wifi: TbWifi,
  world: TbWorld,
  shield: TbShieldCheck,
  refresh: TbRefresh,
  components: TbComponents,

  outlineBriefcase: HiOutlineBriefcase,
  outlineCode: HiOutlineCode,
  outlineDesktop: HiOutlineDesktopComputer,
  outlineServer: HiOutlineServer,
  outlineSparkles: HiOutlineSparkles,

  award: FiAward,
  users: FiUsers,
  zap: FiZap,
  check: FiCheckCircle,
} satisfies Record<string, IconType>

export type IconKey = keyof typeof registry

export function getIcon(key: IconKey): IconType {
  return registry[key]
}

export function isIconKey(key: string): key is IconKey {
  return key in registry
}
