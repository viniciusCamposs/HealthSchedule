package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/medico/")
public class MedicoController {
    @Autowired
    private MedicoRepository medicoRepository;
}
