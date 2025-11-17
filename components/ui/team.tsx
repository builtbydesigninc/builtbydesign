import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  avatar: string
  link: string
}

interface TeamSectionProps {
  members: TeamMember[]
  title?: string
  subtitle?: string
}

export default function TeamSection({ members, title = "Our dream team", subtitle }: TeamSectionProps) {
  return (
    <div className="mt-12 md:mt-16">
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div key={index} className="group overflow-hidden">
            <img
              className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
              src={member.avatar}
              alt={member.name}
              width="826"
              height="1239"
            />
            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
              <div className="flex justify-between">
                <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                  {member.name}
                </h3>
                <span className="text-xs text-muted-foreground">_0{index + 1}</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-muted-foreground inline-block text-sm opacity-100">
                  {member.role}
                </span>
                {member.link && (
                  <Link
                    href={member.link}
                    className="group-hover:text-primary inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    LinkedIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
