package com.tolgay.mindbalance.mapper;

import com.tolgay.mindbalance.dto.DailyFactorsDTO;
import com.tolgay.mindbalance.model.DailyFactors;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface DailyFactorsMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "sleepQuality", target = "sleepQuality")
    @Mapping(source = "physicalActivity", target = "physicalActivity")
    @Mapping(source = "socialInteraction", target = "socialInteraction")
    @Mapping(source = "stressLevel", target = "stressLevel")
    @Mapping(source = "screenTime", target = "screenTime")
    @Mapping(source = "workSatisfaction", target = "workSatisfaction")
    @Mapping(source = "caffaineIntake", target = "caffaineIntake")
    @Mapping(source = "sugarIntake", target = "sugarIntake")
    DailyFactors toDailyFactorsEntity(DailyFactorsDTO dto);
}
