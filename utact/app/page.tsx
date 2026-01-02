"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import { ProfileSection } from "./components/profile-section";
import { EducationSection } from "./components/education-section";
import { AchievementsSection } from "./components/achievements-section";
import Image from "next/image";

export default function Portfolio() {


  const projects = [
    {
      id: "dash",
      title: "DashHub",
      description:
        "비용 효율성과 학습 동기를 동시에 잡은 알고리즘 플랫폼입니다. AI 코칭에 필요한 토큰 비용 문제를 해결하기 위해 '도토리' 재화 시스템을 직접 설계했습니다. 사용자의 자연스러운 학습 활동(문제 풀이, 코드 리뷰)이 도토리 획득으로 이어져, 과도한 토큰 소비를 방지하고 자생적인 경제 구조를 구축했습니다.",
      tech: ["Java", "Spring Boot", "FastAPI", "Vue.js", "MySQL", "Gemini AI"],
      link: "https://github.com/utact/dash",
      icon: "/images/dash.ico",
    },
    {
      id: "lifelogix",
      title: "LifeLogix",
      description:
        "자유도와 데이터 정확성을 모두 잡은 라이프 매니지먼트 OS입니다. 사용자에게 커스텀 카테고리의 자유를 주면서도, 내부적으로는 '시스템 대분류'를 상속받게 강제하는 상속 구조를 설계했습니다. 이를 통해 사용자는 자유롭게 기록하고, 시스템은 일관된 기준으로 데이터를 분석할 수 있습니다.",
      tech: ["Java", "Spring Boot", "DDD", "React", "Next.js", "QueryDSL"],
      link: "https://github.com/UTACt/lifelogix",
      icon: "/images/lifelogix.ico",
    },
    {
      id: "fictional-train",
      title: "Fictional Train",
      description:
        "스스로 성장하는 자가 증식형 데이터베이스를 구축한 웹 애플리케이션입니다. Spring AI 기반의 검증 루프를 도입하여, 외부 개입 없이도 시스템이 데이터를 스스로 검증하고 확장해 나가는 자동화된 파이프라인을 구현했습니다.",
      tech: ["Java", "Spring Boot", "H2", "MyBatis", "Vue.js", "Pinia"],
      link: "https://github.com/UTACt/fictional-train",
      icon: "/images/fictional-train.ico",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto w-full">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            utact
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">
              소개
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-primary"
            >
              프로젝트
            </a>
            <a
              href="#education"
              className="transition-colors hover:text-primary"
            >
              학력
            </a>
            <a
              href="#achievements"
              className="transition-colors hover:text-primary"
            >
              수상 및 자격증
            </a>

          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container max-w-6xl mx-auto">
          <ProfileSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 dark:text-shadow-glow tracking-tight">
              Featured Engineering
            </h2>

          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group flex flex-col h-full overflow-hidden border border-border/50 dark:border-white/10 dark:bg-zinc-900/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-card"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-muted/30 p-2 flex items-center justify-center border shadow-sm">
                            <Image
                                src={project.icon}
                                alt={project.title}
                                width={56}
                                height={56}
                                className="w-full h-full object-contain"
                            />
                        </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5"/>
                        </a>
                      </Button>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium px-2.5 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />



      {/* Achievements Section */}
      <AchievementsSection />



      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-background">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Terminal className="w-5 h-5" />
            utact
          </div>
          <div className="text-muted-foreground text-sm flex flex-col md:flex-row gap-4 items-center">
            <a href="mailto:dev.utact@gmail.com" className="hover:text-primary transition-colors">
              dev.utact@gmail.com
            </a>
            <p>© {new Date().getFullYear()} utact. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

