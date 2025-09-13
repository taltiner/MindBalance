package com.tolgay.mindbalance.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DAILY_FACTORS")
public class DailyFactors {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "daily_factors_seq")
    private Long id;
    private int sleepQuality;
    private int physicalActivity;
    private int socialInteraction;
    private int stressLevel;
    private int screenTime;
    private int workSatisfaction;
    private int caffaineIntake;
    private int sugarIntake;
}
