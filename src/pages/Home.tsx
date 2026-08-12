import { lazy, Suspense } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'
import { Hero } from '@/components/sections/Hero'
import { SectionSkeleton } from '@/components/ui/SectionSkeleton'

function lazyLoad<T extends { [key: string]: unknown }>(
  factory: () => Promise<T>,
  exportName: keyof T,
) {
  return lazy(() => factory().then((module) => ({ default: module[exportName] as ComponentType })))
}

const About = lazyLoad(() => import('@/components/sections/About'), 'About')
const Skills = lazyLoad(() => import('@/components/sections/Skills'), 'Skills')
const Experience = lazyLoad(() => import('@/components/sections/Experience'), 'Experience')
const Education = lazyLoad(() => import('@/components/sections/Education'), 'Education')
const Projects = lazyLoad(() => import('@/components/sections/Projects'), 'Projects')
const GraphicDesign = lazyLoad(() => import('@/components/sections/GraphicDesign'), 'GraphicDesign')
const Services = lazyLoad(() => import('@/components/sections/Services'), 'Services')
const Achievements = lazyLoad(() => import('@/components/sections/Achievements'), 'Achievements')
const TechStack = lazyLoad(() => import('@/components/sections/TechStack'), 'TechStack')
const Contact = lazyLoad(() => import('@/components/sections/Contact'), 'Contact')

function LazySection({ Component }: { Component: LazyExoticComponent<ComponentType> }) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <Component />
    </Suspense>
  )
}

export function Home() {
  return (
    <main>
      <Hero />
      <LazySection Component={About} />
      <LazySection Component={Skills} />
      <LazySection Component={Experience} />
      <LazySection Component={Education} />
      <LazySection Component={Projects} />
      <LazySection Component={GraphicDesign} />
      <LazySection Component={Services} />
      <LazySection Component={Achievements} />
      <LazySection Component={TechStack} />
      <LazySection Component={Contact} />
    </main>
  )
}
