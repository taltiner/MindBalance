package com.tolgay.mindbalance.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "WELL_BEING_METRICS")
public class WellBeingMetrics {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "well_being_metrics_seq")
    private Long id;
    private int mood;
    private int focus;
    private int emotionalStability;
    private int productivity;
    private int energyLevel;
    private int anxiety;
}
