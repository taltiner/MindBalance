package com.tolgay.mindbalance.service;

import com.tolgay.mindbalance.config.JwtService;
import com.tolgay.mindbalance.dto.AuthenticationDTO;
import com.tolgay.mindbalance.dto.AuthenticationResponseDTO;
import com.tolgay.mindbalance.dto.UserDTO;
import com.tolgay.mindbalance.exception.UserAlreadyExistException;
import com.tolgay.mindbalance.mapper.UserMapper;
import com.tolgay.mindbalance.model.User;
import com.tolgay.mindbalance.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);

    public AuthenticationResponseDTO register(UserDTO register) {
        log.info("Registration attempt for user with email: {}", register.getEmail());

        User user = userMapper.toUserEntity(register);

        Optional<User> userDB = userRepository.findByEmail(register.getEmail());

        if(userDB.isPresent()) {
            throw new UserAlreadyExistException(String.format(
                    "User with the E-Mail: %s already exist.", register.getEmail()));
        }

        userRepository.save(user);
        String jwtToken = jwtService.generateToken(user);

        return new AuthenticationResponseDTO(jwtToken);
    }

    public AuthenticationResponseDTO login(AuthenticationDTO login) {
        log.info("Login attempt for user with email: {}", login.getEmail());

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            login.getEmail(),
                            login.getPassword()
                    )
            );
            log.info("Authentication successful for email: {}", login.getEmail());

        } catch (BadCredentialsException e) {
            log.error("Authentication failed: Bad credentials for email {}", login.getEmail());
            throw e;
        } catch (UsernameNotFoundException e) {
            log.error("Authentication failed: Username not found for email {}", login.getEmail());
            throw e;
        } catch (Exception e) {
            log.error("Authentication failed: Unexpected error for email {}: {}", login.getEmail(), e.getMessage(), e);
            throw e;
        }

        User user = userRepository.findByEmail(login.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User with the E-Mail %s was not found", login.getEmail())));

        var jwtToken = jwtService.generateToken(user);

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        return AuthenticationResponseDTO.builder()
                .token(jwtToken)
                .build();
    }
}
