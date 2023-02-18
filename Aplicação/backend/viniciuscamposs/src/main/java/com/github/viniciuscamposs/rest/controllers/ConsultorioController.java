package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.ConsultorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consultorio/")
public class ConsultorioController {
    @Autowired
    private ConsultorioRepository consultorioRepository;
}
