package com.github.viniciuscamposs.model.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empresa/")
public class Empresa {
    @Autowired
    private EmpresaRepository empresaRepository;
}
