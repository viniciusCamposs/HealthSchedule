package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/paciente/")
public class PacienteController {
    @Autowired
    private PacienteRepository pacienteRepository;
}
