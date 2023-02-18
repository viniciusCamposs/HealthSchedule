package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
@Table(name = "situacoes_agenda")
public class SituacaoAgenda {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Length(max = 30, message = "Limite máximo de caracteres para o campo nome é de 30 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Column(columnDefinition = "boolean default false")
    private boolean definitivo;
}
