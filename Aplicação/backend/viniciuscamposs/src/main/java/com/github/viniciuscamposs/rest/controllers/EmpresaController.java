package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.entity.Empresa;
import com.github.viniciuscamposs.model.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empresa/")
public class EmpresaController {
    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping
    public ResponseEntity<Empresa> salvar(@RequestBody @Validated Empresa empresa) {
        return new ResponseEntity<>(empresa, HttpStatus.CREATED);
    }
}
