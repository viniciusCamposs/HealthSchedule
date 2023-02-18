package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.PacientexenderecosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pacientexenderecos/")
public class PacientexenderecosController {
    @Autowired
    private PacientexenderecosRepository pacientexenderecosRepository;
}
