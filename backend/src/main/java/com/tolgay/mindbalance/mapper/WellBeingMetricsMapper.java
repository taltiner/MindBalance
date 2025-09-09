package com.tolgay.mindbalance.mapper;

import com.tolgay.mindbalance.dto.DailyCheckinDTO;
import com.tolgay.mindbalance.dto.WellBeingMetricsDTO;
import com.tolgay.mindbalance.model.WellBeingMetrics;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface WellBeingMetricsMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "mood", target = "mood")
    @Mapping(source = "focus", target = "focus")
    @Mapping(source = "emotionalStability", target = "emotionalStability")
    @Mapping(source = "productivity", target = "productivity")
    @Mapping(source = "energyLevel", target = "energyLevel")
    @Mapping(source = "anxiety", target = "anxiety")
    WellBeingMetrics toWellBeingMetricsEntity(WellBeingMetricsDTO dto);
}
