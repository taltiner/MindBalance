
export interface DailyFactors {
  sleepQuality: number;
  physicalActivity: number;
  socialInteraction: number;
  stressLevel: number;
  screenTime: number;
  workSatisfaction: number;
  caffaineIntake: number;
  sugarIntake: number;
}

export interface WellBeingMetrics {
  mood: number
  focus: number,
  emotionalStability: number,
  productivity: number,
  energyLevel: number,
  anxiety: number,
}

export interface DailyCheckin {
  dailyFactors: DailyFactors;
  wellBeingMetrics: WellBeingMetrics;
}
