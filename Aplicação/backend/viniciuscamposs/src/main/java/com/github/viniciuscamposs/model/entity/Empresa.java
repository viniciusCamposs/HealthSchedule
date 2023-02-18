package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CNPJ;

@Entity
@Data
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "{name.not.blank}")
    @Length(max = 200, message = "Limite máximo de caracteres para o campo nome é de 200 caracteres.")
    private String nome;

    @NotBlank(message = "{cnpj.not.blank}")
    @Length(max = 14, message = "Limite máximo de caracteres para o campo CNPJ é de 14 caracteres.")
    @CNPJ(message = "{cnpj.not.valid}")
    private String cnpj;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;
}
