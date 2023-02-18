package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
public class Pacientexcontatos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "paciente_id", referencedColumnName = "id")
    @NotBlank(message = "{paciente.not.blank}")
    private Paciente paciente;

    @Length(max = 200, message = "Limite máximo de caracteres para o campo nome é de 200 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Length(max = 20, message = "Limite máximo de caracteres para o campo telefone é de 20 caracteres.")
    @Pattern(regexp = "\\d{5}-\\d{3}", message = "{telefone.not.valid}")
    private String telefone;

    @Column(columnDefinition = "boolean default false")
    private boolean padrao;
}
