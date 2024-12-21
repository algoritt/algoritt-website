import { notFound } from 'next/navigation'
import { openPositions } from '@/constants/careers'
import CareerDetails from '@/components/ui/careers/CareerDetails'
import type { Metadata } from 'next'

type CareerParams = { career: string }

interface Props {
  params: Promise<CareerParams> & {
    then: Promise<CareerParams>['then'];
    catch: Promise<CareerParams>['catch'];
    finally: Promise<CareerParams>['finally'];
    [Symbol.toStringTag]: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const position = openPositions.find(p => p.id === resolvedParams.career)
  if (!position) return {}

  return {
    title: `${position.title} | Algoritt Careers`,
    description: position.description,
  }
}

export default async function CareerPage({ params }: Props) {
  const resolvedParams = await params
  const position = openPositions.find(p => p.id === resolvedParams.career)
  
  if (!position) {
    notFound()
  }

  return <CareerDetails position={position} />
}