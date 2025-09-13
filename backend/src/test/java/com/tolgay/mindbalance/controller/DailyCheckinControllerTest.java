package com.tolgay.mindbalance.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tolgay.mindbalance.dto.DailyCheckinDTO;
import com.tolgay.mindbalance.dto.DailyFactorsDTO;
import com.tolgay.mindbalance.dto.WellBeingMetricsDTO;
import com.tolgay.mindbalance.mapper.DailyFactorsMapper;
import com.tolgay.mindbalance.mapper.WellBeingMetricsMapper;
import com.tolgay.mindbalance.model.DailyCheckin;
import com.tolgay.mindbalance.model.DailyFactors;
import com.tolgay.mindbalance.model.WellBeingMetrics;
import com.tolgay.mindbalance.service.DailyCheckinService;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = DailyCheckinController.class,
        excludeAutoConfiguration = {
                org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
                org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration.class
        })
class DailyCheckinControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private DailyCheckinService dailyCheckinService;
    @MockBean
    private DailyFactorsMapper dailyFactorsMapper;
    @MockBean
    private WellBeingMetricsMapper wellBeingMetricsMapper;


    private DailyFactorsDTO dailyFactorsDTO;
    private WellBeingMetricsDTO wellBeingMetricsDTO;
    private DailyCheckinDTO dailyCheckinDTO;

    @BeforeEach
    void setUp() {
        dailyFactorsDTO = DailyFactorsDTO.builder()
                .sleepQuality(7)
                .physicalActivity(3)
                .socialInteraction(4)
                .stressLevel(5)
                .screenTime(6)
                .workSatisfaction(8)
                .caffaineIntake(8)
                .sugarIntake(4)
                .build();

        wellBeingMetricsDTO = WellBeingMetricsDTO.builder()
                .mood(6)
                .focus(7)
                .emotionalStability(8)
                .productivity(8)
                .energyLevel(6)
                .anxiety(7)
                .build();

        dailyCheckinDTO = dailyCheckinDTO.builder()
                .dailyFactors(dailyFactorsDTO)
                .wellBeingMetrics(wellBeingMetricsDTO)
                .build();
    }

    void shouldCreateDailyCheckin() throws Exception {
        // given
        DailyFactors dailyFactors = dailyFactorsMapper.toDailyFactorsEntity(dailyFactorsDTO);
        WellBeingMetrics wellBeingMetrics = wellBeingMetricsMapper.toWellBeingMetricsEntity(wellBeingMetricsDTO);
        DailyCheckin dailyCheckin = DailyCheckin.builder()
                    .id(1L)
                    .dailyFactors(dailyFactors)
                    .wellBeingMetrics(wellBeingMetrics)
                    .build();
        // when
        when(dailyCheckinService.createDailyChecking(eq(dailyCheckinDTO))).thenReturn(dailyCheckin);

        mockMvc.perform(post("/daily-checkin")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dailyCheckin)))
                .andExpect(status().isCreated());
    }
}
