package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    @NotBlank(message = "{empresa.not.blank}")
    private Empresa empresa;

    @Length(max = 50, message = "Limite máximo de caracteres para o campo nome é de 50 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Length(max = 200, message = "Limite máximo de caracteres para o campo senha é de 200 caracteres.")
    @NotBlank(message = "Senha não deve ser branco.")
    private String senha;

    @Column(columnDefinition = "boolean default true")
    private Boolean ativo;
}
