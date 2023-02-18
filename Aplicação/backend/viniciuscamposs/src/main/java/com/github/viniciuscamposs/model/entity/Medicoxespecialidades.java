package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;

@Entity
@Data
public class Medicoxespecialidades {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "{medico.not.blank}")
    private int medico_id;

    @NotBlank(message = "{especialidade.not.blank}")
    private int especialidade_id;
}
