"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function ProfileSection() {
  return (
    <Card className="overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  안녕하세요, <span className="text-primary">UTACT</span>입니다.
                </h1>
              </div>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                사용자 편의와 시스템 효율의 균형을 설계합니다.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
              사용자에게는 <strong className="text-foreground">직관적인 편의성</strong>을 제공하면서도, 그 이면에서는 <strong className="text-foreground">개발적 이점과 데이터 정확성</strong>을 놓치지 않는 설계를 지향합니다. 문제를 기술적으로 해결하는 것을 넘어, 서비스의 지속 가능성을 고려한 <strong className="text-foreground">전략적인 시스템 구축</strong>에 탁월한 강점이 있습니다.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    <span>📍 대한민국 대전</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    <span>🚀 SSAFY 14기</span>
                </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
