package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.PacientexcontatosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pacientexcontatos/")
public class PacientexcontatosController {
    @Autowired
    private PacientexcontatosRepository pacientexcontatosRepository;
}
