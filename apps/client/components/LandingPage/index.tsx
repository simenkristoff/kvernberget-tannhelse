import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import { FrontpageSettings } from '@lib/queries/getFrontpageSettings'
import { GetLatestPostQueryResult } from '@lib/queries/getLatestPost'
import { Review } from '@lib/queries/getReviews'
import { SiteSettings } from '@lib/schema'
import React from 'react'

import BlogSection from './BlogSection'
import ContactSection from './ContactSection'
import EmployeesSection from './EmployeesSection'
import IntroSection from './IntroSection'
import ReviewsSection from './ReviewsSection'
import TreatmentsSection from './TreatmentsSection'

export interface LandingPageProps {
  frontpageSettings: FrontpageSettings
  settings: SiteSettings
  latestPost: GetLatestPostQueryResult
  reviews: Review[]
  employees: GetEmployeesQueryResult
}

export default function LandingPage({
  frontpageSettings,
  settings,
  latestPost,
  reviews,
  employees
}: LandingPageProps) {
  const {
    introSection,
    treatmentsSection,
    reviewsSection,
    blogSection,
    contactSection,
    employeeSection
  } = frontpageSettings
  return (
    <React.Fragment>
      {introSection && <IntroSection {...introSection} />}

      {treatmentsSection && <TreatmentsSection {...treatmentsSection} />}

      {reviewsSection && <ReviewsSection data={reviews} {...reviewsSection} />}

      {blogSection && <BlogSection data={latestPost} {...blogSection} />}

      {contactSection && <ContactSection data={settings} {...contactSection} />}

      {employeeSection && (
        <EmployeesSection data={employees} {...employeeSection} />
      )}
    </React.Fragment>
  )
}
