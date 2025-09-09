package com.tolgay.mindbalance.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WellBeingMetricsDTO {
    private int mood;
    private int focus;
    private int emotionalStability;
    private int productivity;
    private int energyLevel;
    private int anxiety;
}
