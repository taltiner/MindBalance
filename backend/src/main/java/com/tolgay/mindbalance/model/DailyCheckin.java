package com.tolgay.mindbalance.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DAILY_CHECKIN")
public class DailyCheckin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "daily_checkin_seq")
    private Long id;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "daily_factors_id", referencedColumnName = "id")
    private DailyFactors dailyFactors;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "well_being_metrics_id", referencedColumnName = "id")
    private WellBeingMetrics wellBeingMetrics;
}
