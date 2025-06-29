package com.tolgay.mindbalance.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AuthenticationDTO {
    private String email;
    private String password;
}
