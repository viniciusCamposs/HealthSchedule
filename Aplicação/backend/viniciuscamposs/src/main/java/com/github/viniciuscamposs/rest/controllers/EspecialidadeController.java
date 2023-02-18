package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.EspecialidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/especialidade/")
public class EspecialidadeController {
    @Autowired
    private EspecialidadeRepository especialidadeRepository;
}
