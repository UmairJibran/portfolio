export interface IGazaStats {
  killedInGazaListCount: number;
  massacres: number;
  killed: Killed;
  injured: Injured;
  dailyReportCount: number;
  lastDailyUpdate: string;
}

export interface Killed {
  total: number;
  children: number;
  women: number;
  civilDefence: number;
  press: number;
  medical: number;
}

export interface Injured {
  total: number;
}
