package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.ConvenioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/convenio/")
public class ConvenioController {
    @Autowired
    private ConvenioRepository convenioRepository;
}
