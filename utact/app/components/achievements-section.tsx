"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle2, Languages, Trophy, Users } from "lucide-react";
import Image from "next/image";

const achievements = [
  // Awards
  {
    id: "award-1",
    type: "award",
    title: "재정 데이터 분석 미니 프로젝트",
    titleEn: "Excellence Award in Financial Data Analysis Mini Project",
    organization: "한국재정정보원",
    organizationEn: "Korea Public Finance Information Service",
    year: "2024",
    period: "2024.11.27 - 2024.12.06",
    role: "PM, DA",
    description:
      "개인형 이동장치 교통사고 취약 지역 선정 및 효율적 예산 배분 제안",
    image: "/icons/fis.svg",
    isExcellence: true,
  },
  // Certifications
  {
    id: "cert-1",
    type: "certification",
    title: "SQLD",
    titleEn: "SQL Developer",
    organization: "한국데이터산업진흥원",
    organizationEn: "Korea Data Agency",
    year: "2024",
    month: "12",
    credentialId: "SQLD-055017432",
    status: "취득 완료",
    category: "Database",
  },
  {
    id: "cert-2",
    type: "certification",
    title: "ADsP",
    titleEn: "Advanced Data Analytics Semi-Professional",
    organization: "한국데이터산업진흥원",
    organizationEn: "Korea Data Agency",
    year: "2025",
    month: "03",
    credentialId: "ADsP-044016734",
    status: "취득 완료",
    category: "Data Analysis",
  },

];

const languages = [
  {
    id: "lang-1",
    type: "language",
    title: "TOEIC",
    score: "870",
    level: "Advanced Proficiency",
    year: "2022",
    month: "11",
    organization: "ETS",
    status: "만료",
  },

];

export function AchievementsSection() {
  const awards = achievements.filter((item) => item.type === "award");
  const certifications = achievements.filter(
    (item) => item.type === "certification"
  );

  return (
    <section id="achievements" className="py-24 px-4 border-t bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-shadow-glow tracking-tight">
            Awards & Certifications
          </h2>

        </div>

        {/* Awards Section - Highlighted */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Awards</h3>
          </div>
          
          <div className="grid gap-6">
            {awards.map((award) => (
              <Card key={award.id} className="group overflow-hidden border dark:border-white/10 shadow-lg bg-card/50 dark:bg-secondary/10 hover:bg-card transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/80" />
                <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                         <div className="flex-shrink-0 p-4 bg-background rounded-2xl shadow-sm border">
                            <Image
                                src={award.image || "/images/placeholder.svg"}
                                alt={award.title}
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h4 className="text-2xl font-bold">{award.title}</h4>
                                    {award.isExcellence && (
                                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                            최우수상 ✨
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-muted-foreground">{award.titleEn}</p>
                            </div>
                            
                            <p className="text-lg leading-relaxed">
                                {award.description}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-4 border-t border-border/50 mt-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {award.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                    {award.organization}
                                </span>
                                {award.role && (
                                    <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                                        <Users className="w-4 h-4 text-primary" />
                                        {award.role}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications Section */}
            <div className="space-y-6">
                 <div className="flex items-center gap-2 mb-6 border-b pb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-4">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="flex flex-col p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-start justify-between w-full">
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-lg">{cert.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium mb-1">
                                        {cert.year}.{cert.month}
                                    </div>
                                    <Badge variant={cert.status === "취득 완료" ? "default" : "secondary"} className="text-xs">
                                        {cert.status}
                                    </Badge>
                                </div>
                            </div>
                            {cert.credentialId && (
                                <div className="mt-3 pt-3 border-t border-border/10 text-xs text-muted-foreground font-mono">
                                    ID: {cert.credentialId}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6 border-b pb-4">
                    <Languages className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Languages</h3>
                </div>
                <div className="space-y-4">
                    {languages.map((lang) => (
                        <div key={lang.id} className="flex flex-col p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-start justify-between w-full">
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-lg">{lang.title}</h4>
                                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium mb-1">
                                        {lang.year}.{lang.month}
                                    </div>
                                    <div className="text-lg font-bold text-primary">
                                        {lang.score || "-"}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        {lang.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
