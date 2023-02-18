package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    @NotBlank(message = "{empresa.not.blank}")
    private Empresa empresa;

    @Length(max = 200, message = "Limite máximo de caracteres para o campo nome é de 200 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Length(max = 100, message = "Limite máximo de caracteres para o campo email é de 100 caracteres.")
    @Email(message = "{email.not.valid}")
    private String email;

    @Length(max = 1, message = "Limite máximo de caracteres para o campo sexo é de 1 caracter.")
    @NotBlank(message = "Sexo não pode ser branco.")
    private char sexo;

    @Column
    @NotBlank(message = "Data de nascimento não pode ser branco.")
    private String dt_nasc;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;

    @OneToMany(mappedBy = "paciente", orphanRemoval = true)
    private List<Pacientexcontatos> pacientexcontatos = new ArrayList<Pacientexcontatos>();

    @OneToMany(mappedBy = "paciente", orphanRemoval = true)
    private List<Pacientexenderecos> pacientexenderecos = new ArrayList<Pacientexenderecos>();
}
