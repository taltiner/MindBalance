package com.tolgay.mindbalance.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DailyFactorsDTO {
    private int sleepQuality;
    private int physicalActivity;
    private int socialInteraction;
    private int stressLevel;
    private int screenTime;
    private int workSatisfaction;
    private int caffaineIntake;
    private int sugarIntake;
}
