package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
public class Pacientexenderecos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "paciente_id", referencedColumnName = "id")
    @NotBlank(message = "{paciente.not.blank}")
    private Paciente paciente;

    @Length(max = 255, message = "Limite máximo de caracteres para o campo endereço é de 255 caracteres.")
    @NotBlank(message = "Endereço não deve ser branco.")
    private String endereco;

    @Length(max = 255, message = "Limite máximo de caracteres para o campo CNPJ é de 255 caracteres.")
    @NotBlank(message = "Bairro não deve ser branco.")
    private String bairro;

    @Length(max = 5, message = "Limite máximo de caracteres para o campo número é de 5 caracteres.")
    private String numero;

    @Length(max = 11, message = "Limite máximo de caracteres para o campo CEP é de 11 caracteres.")
    @NotBlank(message = "CEP não deve ser branco.")
    @Pattern(regexp = "(\\d{2}) \\d{4}-\\d{4}", message = "{cep.not.valid}")
    private String cep;

    @Column(columnDefinition = "boolean default false")
    private boolean padrao;

    @Column(columnDefinition = "boolean default true")
    private boolean ativo;
}
