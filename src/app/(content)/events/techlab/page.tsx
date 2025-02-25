// import ButtonLanding from '@/components/sub-component/button-landing'
import React from 'react'
import EventIntro from '@/components/sub-component/event-intro'
import EventConclusion from '@/components/sub-component/event-conclusion'

const Page = () => {
  return (
    <div>
        {/* <ButtonLanding label="Register"/> */}
        <EventIntro
        imageUrl="/Rectangle 197.png"
        title="TECH LAB"
        registrations={300}
        pricepool={30000}
        description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
      />
      <EventConclusion />
    </div>
  )
}

export default Page