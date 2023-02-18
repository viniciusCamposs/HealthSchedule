package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.UsuarioxconsultoriosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarioxconsultorios/")
public class UsuarioxconsultoriosController {
    @Autowired
    private UsuarioxconsultoriosRepository usuarioxconsultoriosRepository;
}
