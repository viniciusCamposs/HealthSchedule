package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
@Table(name = "tipos_agendamento")
public class TipoAgendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "{consultorio.not.blank}")
    private int consultorio_id;

    @Length(max = 150, message = "Limite máximo de caracteres para o campo nome é de 150 caracteres.")
    private String nome;

    @NotBlank(message = "Consulta não deve ser branco.")
    private boolean consulta;

    @NotBlank(message = "Procedimento não deve ser branco.")
    private boolean procedimento;

    @Column(columnDefinition = "boolean default ativo")
    private boolean ativo;
}
