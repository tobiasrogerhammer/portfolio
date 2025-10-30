import {
  Mail,
  Globe,
  MapPin,
  Award,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* A4 Container */}
      <div
        className="max-w-[210mm] mx-auto bg-white"
        style={{ width: "210mm", minHeight: "297mm" }}
      >
        {/* Header */}
        <div className="mb-6 pb-4 border-b-4 border-[#124D95]">
          <h1 className="text-[#124D95] mb-1">Tobias Hammer</h1>
          <p className="text-slate-600 mb-3">
            Developer / Tech enthusiast / Entrepreneur
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>tobias@hammerhome.no</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>
                Gydas vei 129, 1413, Tårnåsen, Nordre Follo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span>tobiashammer.dev</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+47 96040212</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-5">
          <h2 className="text-[#124D95] mb-2 pb-1 border-b-2 border-slate-200">
            Professional Summary
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Innovative and detail-oriented developer with a
            strong dedication for building digital products that
            connect ideas with people. Experienced in creating
            elegant, efficient, and sustainable solutions
            through modern web technologies. Focused on solving
            complex challenges with simplicity and precision.
            Constantly exploring new tools and opportunities to
            innovate, collaborate, and deliver meaningful
            impact.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-5">
          <h2 className="text-[#124D95] mb-3 pb-1 border-b-2 border-slate-200">
            Work Experience
          </h2>

          <div className="space-y-3">
            {/* Royal Norwegian Air Force */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">
                    Military Service
                  </h3>
                  <p className="text-sm text-slate-600">
                    Royal Norwegian Air Force
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2024 - 2025
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Developed discipline, mental resilience, and
                strong teamwork and communication skills.
                Represented soldiers in welfare and
                organizational discussions, ensuring fair
                treatment and improved conditions.
              </p>
              <p className="text-xs text-[#124D95]">
                ✓ Letter of recommendation available
              </p>
            </div>

            {/* Renow AS */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">Co-Owner</h3>
                  <p className="text-sm text-slate-600">
                    Renow AS • renow.no
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2023 - Present
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Co-founded Renow and helped transform it from a
                student startup into a registered legitimate
                company. Lead responsibilities include
                developing sustainable, high-performance
                websites, overseeing strategy, and managing
                client relationships. Played a key role in the
                company&apos;s early success, winning the Regional
                Sustainability Award and receiving nominations in
                the national student entrepreneurship
                competitions.
              </p>
              <p className="text-xs text-[#124D95]">
                ✓ NM Entrepreneurship Participation
              </p>
            </div>

            {/* Huddly AS */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">
                    Working Student
                  </h3>
                  <p className="text-sm text-slate-600">
                    Huddly AS • huddly.com
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2021 - Present
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Contribute to the development of AI-powered
                conference cameras through AI training,
                scripting, and product testing. Previously
                completed internship focused on learning about
                product development, technology and software
                engineering practices.
              </p>
            </div>

            {/* Kolbotn IL */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">
                    Swimming Instructor
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kolbotn IL
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2021 - 2022
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Delivered swimming instruction and water safety
                training to students of various ages.
                Strengthened communication, patience, and
                leadership skills through hands-on teaching
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-[#124D95] mb-3 pb-1 border-b-2 border-slate-200">
            Education
          </h2>

          <div className="space-y-3">
            {/* Oslo Metropolitan University */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">
                    Bachelor of Applied Computer Technology
                  </h3>
                  <p className="text-sm text-slate-600">
                    Oslo Metropolitan University (OsloMet)
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2025 - 2028 (Ongoing)
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Comprehensive study focusing on designing and
                developing technological solutions with emphasis
                on user-friendliness and universal design.
                Learning to develop solutions accessible to
                everyone regardless of limitations.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  User-Centered Design
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Web development
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Ethical technological innovation
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Programming
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Databases
                </Badge>
              </div>
            </div>

            {/* Drømtorp Videregående Skole */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-slate-900">
                    Information Technology
                  </h3>
                  <p className="text-sm text-slate-600">
                    Drømtorp Videregående Skole
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  2021 - 2024
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Completed high school with focus on computer
                science, information technology, media
                production and entrepreneurship.
              </p>
              <div className="flex flex-wrap gap-1 mb-1">
                <Badge variant="outline" className="text-xs">
                  Programming
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Web Development
                </Badge>
                <Badge variant="outline" className="text-xs">
                  System Development
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Media Production
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Entrepreneurship
                </Badge>
              </div>
              <p className="text-xs text-[#124D95]">
                ✓ Regional Entrepreneurship Award
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-5">
          <h2 className="text-[#124D95] mb-3 pb-1 border-b-2 border-slate-200">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-slate-900 min-w-fit">
                Frontend: TypeScript, Next.js, React, Tailwind
                CSS, JavaScript, HTML/CSS
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-slate-900 min-w-fit">
                Backend & Databases: Python, Node.js, Java, SQL,
                Express, Firebase
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-slate-900 min-w-fit">
                Tools & Platforms: AWS, GitHub, Docker, Vercel,
                Figma, Postman
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-slate-900 min-w-fit">
                Soft Skills: Problem Solving, Teamwork,
                Communication, Innovation, Entrepreneurship,
                Adaptability
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Two-Column Layout */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6">
          {/* Featured Projects - Left Column (Wider) */}
          <div>
            <h2 className="text-[#124D95] mb-3 pb-1 border-b-2 border-slate-200">
              Featured Projects
            </h2>

            <div className="space-y-2.5">
              <div className="border border-slate-200 rounded-md p-3">
                <h3 className="text-slate-900 text-sm mb-1">
                  Renow AS Website
                </h3>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Web development company website with focus on
                  sustainable development (88% reduced CO2
                  emissions). Built with modern technologies.
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <span className="text-slate-400">•</span>
                  <span className="text-[#124D95]">
                    renow.no
                  </span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-3">
                <h3 className="text-slate-900 text-sm mb-1">
                  Discgolf Scoretracking App
                </h3>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Comprehensive discgolf scoring application for
                  tracking scores and stats. Features course
                  exploration and friend challenges with
                  real-time updates.
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ConvexDB
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates & Achievements - Right Column (Narrower) */}
          <div>
            <h2 className="text-[#124D95] mb-3 pb-1 border-b-2 border-slate-200">
              Certificates & Achievements
            </h2>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Award
                  className="text-[#124D95] flex-shrink-0 mt-0.5"
                  size={14}
                />
                <div>
                  <p className="text-slate-900 text-xs leading-tight">
                    Letter of Recommendation
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Royal Norwegian Air Force
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award
                  className="text-[#124D95] flex-shrink-0 mt-0.5"
                  size={14}
                />
                <div>
                  <p className="text-slate-900 text-xs leading-tight">
                    Driver&apos;s Licenses: B, D1
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Statens Vegvesen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award
                  className="text-[#124D95] flex-shrink-0 mt-0.5"
                  size={14}
                />
                <div>
                  <p className="text-slate-900 text-xs leading-tight">
                    NM Entrepreneurship Participation
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    UNGT ENTREPRENØRSKAP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award
                  className="text-[#124D95] flex-shrink-0 mt-0.5"
                  size={14}
                />
                <div>
                  <p className="text-slate-900 text-xs leading-tight">
                    First Responder Certification
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Royal Norwegian Air Force
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award
                  className="text-[#124D95] flex-shrink-0 mt-0.5"
                  size={14}
                />
                <div>
                  <p className="text-slate-900 text-xs leading-tight">
                    First aid for suicidal thoughts
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    VIVAT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
