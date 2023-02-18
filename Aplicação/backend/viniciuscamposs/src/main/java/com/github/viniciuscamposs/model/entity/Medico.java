package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

@Entity
@Data
public class Medico {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Length(max = 200, message = "Limite máximo de caracteres para o campo nome é de 200 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Length(max = 15, message = "Limite máximo de caracteres para o campo CRM é de 15 caracteres.")
    @NotBlank(message = "{crm.not.blank}")
    private String crm;

    @Length(max = 1, message = "Limite máximo de caracteres para o campo sexo é de 1 caracter.")
    @NotBlank(message = "Sexo não deve ser branco.")
    private char sexo;

    @Length(max = 20, message = "Limite máximo de caracteres para o campo CPF é de 20 caracteres.")
    @NotBlank(message = "{cpf.not.blank}")
    @CPF(message = "{cpf.not.valid}")
    private String cpf;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;
}
