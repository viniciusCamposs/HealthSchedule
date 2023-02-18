package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
@Table(name = "especialidade")
public class Especialidade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "consultorio_id", referencedColumnName = "id")
    @NotBlank(message = "{consultorio.not.blank}")
    private Consultorio consultorio;

    @Length(max = 100, message = "Limite máximo de caracteres para o campo nome é de 100 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;
}
