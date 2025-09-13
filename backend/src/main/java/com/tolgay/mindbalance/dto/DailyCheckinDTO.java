package com.tolgay.mindbalance.dto;

import lombok.*;

@Getter
@Setter
@Builder
public class DailyCheckinDTO {
    DailyFactorsDTO dailyFactors;
    WellBeingMetricsDTO wellBeingMetrics;
}
