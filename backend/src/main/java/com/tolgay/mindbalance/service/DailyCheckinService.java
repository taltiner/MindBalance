package com.tolgay.mindbalance.service;

import com.tolgay.mindbalance.dto.DailyCheckinDTO;
import com.tolgay.mindbalance.exception.DailyCheckinException;
import com.tolgay.mindbalance.mapper.DailyFactorsMapper;
import com.tolgay.mindbalance.mapper.WellBeingMetricsMapper;
import com.tolgay.mindbalance.model.DailyCheckin;
import com.tolgay.mindbalance.model.DailyFactors;
import com.tolgay.mindbalance.model.WellBeingMetrics;
import com.tolgay.mindbalance.repository.DailyCheckinRepository;
import com.tolgay.mindbalance.repository.DailyFactorsRepository;
import com.tolgay.mindbalance.repository.WellBeingMetricsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DailyCheckinService {

    private final DailyFactorsRepository dailyFactorsRepository;
    private final WellBeingMetricsRepository wellBeingMetricsRepository;
    private final DailyCheckinRepository dailyCheckinRepository;
    private final DailyFactorsMapper dailyFactorsMapper;
    private final WellBeingMetricsMapper wellBeingMetricsMapper;

    public DailyCheckin createDailyChecking(DailyCheckinDTO dailyCheckinDTO) {
        //TODO: auf Datum pruefen
        try {
            DailyFactors dailyFactors = dailyFactorsMapper.toDailyFactorsEntity(dailyCheckinDTO.getDailyFactors());
            WellBeingMetrics wellBeingMetrics = wellBeingMetricsMapper.toWellBeingMetricsEntity(dailyCheckinDTO.getWellBeingMetrics());
            DailyCheckin dailyCheckin = DailyCheckin.builder()
                    .dailyFactors(dailyFactors)
                    .wellBeingMetrics(wellBeingMetrics)
                    .build();
            return dailyCheckinRepository.save(dailyCheckin);
        } catch(Exception e) {
            throw new DailyCheckinException();
        }
    }
}
