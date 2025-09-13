package com.tolgay.mindbalance.controller;

import com.tolgay.mindbalance.dto.AuthenticationDTO;
import com.tolgay.mindbalance.dto.AuthenticationResponseDTO;
import com.tolgay.mindbalance.dto.UserDTO;
import com.tolgay.mindbalance.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDTO> register(@RequestBody UserDTO registerRequest) {
        AuthenticationResponseDTO responseDTO = authenticationService.register(registerRequest);

        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody AuthenticationDTO loginRequest) {
        AuthenticationResponseDTO responseDTO = authenticationService.login(loginRequest);

        return ResponseEntity.ok(responseDTO);
    }
}
