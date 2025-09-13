package com.tolgay.mindbalance.repository;

import com.tolgay.mindbalance.model.DailyCheckin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyCheckinRepository extends JpaRepository<DailyCheckin, Long> {
}
