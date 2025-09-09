package com.tolgay.mindbalance.repository;

import com.tolgay.mindbalance.model.WellBeingMetrics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WellBeingMetricsRepository extends JpaRepository<WellBeingMetrics, Long> {
}
