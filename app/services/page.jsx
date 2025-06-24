import FooterOne from '@/components/layout/footers/FooterOne'
import Header1 from '@/components/layout/header/Header1'
import OurTechnologies from '@/components/Services_Sections/OurTechnologies'
import SolutionProvided from '@/components/Services_Sections/SolutionProvided'
import SupplyOfMaterial from '@/components/Services_Sections/SuppyOfMaterial'
import React from 'react'

const page = () => {
  return (
          <main>
            <Header1 />
            <SolutionProvided />
            <OurTechnologies />
            <SupplyOfMaterial />
            <FooterOne />
          </main>
  )
}

export default page