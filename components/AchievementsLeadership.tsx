import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AchievementsLeadershipProps {
  isActive: boolean
}

const achievements = {
  hackathons: [
    "1st Prize in Enginerd Hackathon (KMIT) for Software & Physics Categories.",
    "Finalist in HackXcelerate Hackathon (Microsoft & Bytexl at CBIT) – awarded a certificate of participation.",
    "Top 10 in Hackathon (BVRIT).",
    "Top 15 in Hackathon (t-works, MGIT).",
    "IEEE Hackathon Award: Certificate of participation and appreciation from IEEE for winning a hackathon at Muffakham Jah College of Engineering and Technology (2nd year, 1st semester) with a congratulatory letter from the academic director.",
    "Winner in CHAT Olympiad (Chemistry Exam).",
  ],
  academic: [
    "IQAC Recognition: Letter of appreciation for developing the Result Automation System (college portal project).",
    "IQAC Recognition: Letter of appreciation for developing the Physics Virtual Lab.",
  ],
  community: [
    "Media Recognition: Featured in The Hindu with photos highlighting significant contributions to the Streetcause project (village adoption and community support).",
    "NSS & Community Service: Certificate of Appreciation from Saksham Telangana for contributions at the 'Divyang Sammelana' event.",
    "NSS & Community Service: Certificate of Service from Streetcause Hyderabad for the 2023–2024 tenure.",
  ],
}

const leadershipEngagements = [
  "StreetCause KMIT: Contributed to village adoption projects near Bhadrachalam, mentoring students and raising funds for community development.",
  "Public Speaking: Delivered Orientation Speeches for junior batches, welcoming and guiding new students.",
  "Vachan (Speakers Club): Active member of the Speakers Club, participating in events that foster communication, public speaking, and leadership skills.",
]

const AchievementsLeadership = forwardRef<HTMLElement, AchievementsLeadershipProps>(({ isActive }, ref) => {
  if (!isActive) return null

  return (
    <section ref={ref} id="achievements-leadership" className="scroll-mt-16 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Leadership</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Hackathons & Competitions</h3>
                <ul className="space-y-2">
                  {achievements.hackathons.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Academic & Project Recognitions</h3>
                <ul className="space-y-2">
                  {achievements.academic.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Community & Media</h3>
                <ul className="space-y-2">
                  {achievements.community.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl">Leadership & Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {leadershipEngagements.map((engagement, index) => (
                <li key={index} className="flex items-start">
                  <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <span>{engagement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
})

AchievementsLeadership.displayName = "AchievementsLeadership"

export default AchievementsLeadership

