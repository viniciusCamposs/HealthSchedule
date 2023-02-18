package com.github.viniciuscamposs.rest.controllers;

import com.github.viniciuscamposs.model.repository.SituacaoAgendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/situacao-agenda/")
public class SituacaoAgendaController {
    @Autowired
    private SituacaoAgendaRepository situacaoAgendaRepository;
}
