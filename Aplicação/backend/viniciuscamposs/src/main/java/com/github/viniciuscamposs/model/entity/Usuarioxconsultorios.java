package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;

@Entity
@Data
public class Usuarioxconsultorios {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "{usuario.not.blank}")
    private int usuario_id;

    @NotBlank(message = "{consultorio.not.blank}")
    private int consultorio_id;
}
