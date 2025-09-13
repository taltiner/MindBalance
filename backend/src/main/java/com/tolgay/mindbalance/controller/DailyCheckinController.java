package com.tolgay.mindbalance.controller;

import com.tolgay.mindbalance.dto.DailyCheckinDTO;
import com.tolgay.mindbalance.model.DailyCheckin;
import com.tolgay.mindbalance.service.DailyCheckinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;

@Controller
@RequestMapping(path = "/daily-checkin")
@RequiredArgsConstructor
public class DailyCheckinController {

    private final DailyCheckinService dailyCheckinService;

    @PostMapping
    public ResponseEntity createDailyCheckin(@RequestBody DailyCheckinDTO dailyCheckinDTO) {
        DailyCheckin saved = dailyCheckinService.createDailyChecking(dailyCheckinDTO);
        URI location = URI.create("/daily-checkin" + saved.getId());

        return ResponseEntity.created(location).body(saved);
    }
}
