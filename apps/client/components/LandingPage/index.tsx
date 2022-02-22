import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import { Frontpage } from '@lib/queries/getLandingPage'
import { GetLatestPostQueryResult } from '@lib/queries/getLatestPost'
import { Review } from '@lib/queries/getReviews'
import { SiteSettings } from '@lib/schema'
import React from 'react'

import BlogSection from './BlogSection'
import ContactSection from './ContactSection'
import EmployeesSection from './EmployeesSection'
import HeroSection from './HeroSection'
import ReviewsSection from './ReviewsSection'
import TreatmentsSection from './TreatmentsSection'

const treatments: string[] = [
  'Fyllinger',
  'Tannbleking',
  'Tannregulering',
  'Krone og bro',
  'Implantater',
  'Visdomstenner'
]

export interface LandingPageProps {
  frontpage: Frontpage
  settings: SiteSettings
  latestPost: GetLatestPostQueryResult
  reviews: Review[]
  employees: GetEmployeesQueryResult
}

export default function LandingPage({
  frontpage,
  settings,
  latestPost,
  reviews,
  employees
}: LandingPageProps) {
  return (
    <React.Fragment>
      {frontpage.introSection && (
        <HeroSection introSection={frontpage.introSection} />
      )}

      {treatments.length > 0 && <TreatmentsSection />}

      <ReviewsSection data={reviews} />

      {latestPost && <BlogSection data={latestPost} />}

      <ContactSection data={settings} />

      {employees.length > 0 && <EmployeesSection data={employees} />}
    </React.Fragment>
  )
}
