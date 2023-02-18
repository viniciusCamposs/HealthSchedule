package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
public class Consultorio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    @NotBlank(message = "{empresa.not.blank}")
    private Empresa empresa;

    @NotBlank(message = "{nome.not.blank}")
    @Length(max = 100, message = "Limite máximo de caracteres para o campo nome é de 100 caracteres.")
    private String nome;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;
}
